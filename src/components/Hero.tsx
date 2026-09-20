import { useEffect, useRef, useState } from 'react'
import { useScroll } from 'motion/react'
import { Header } from './Header'

// TODO: swap for real product/interior photography once available.
const CARDS = [
  'https://picsum.photos/seed/vishal-panel-1/480/600',
  'https://picsum.photos/seed/vishal-panel-2/480/600',
  'https://picsum.photos/seed/vishal-panel-3/480/600',
  'https://picsum.photos/seed/vishal-panel-4/480/600',
  'https://picsum.photos/seed/vishal-panel-5/480/600',
  'https://picsum.photos/seed/vishal-panel-6/480/600',
  'https://picsum.photos/seed/vishal-panel-7/480/600',
  'https://picsum.photos/seed/vishal-panel-8/480/600',
  'https://picsum.photos/seed/vishal-panel-9/480/600',
]

// Cards sit edge-to-edge around a regular polygon inscribed in the
// carousel's circle: radius = (cardWidth / 2) / tan(PI / cardCount).
const ANGLE_STEP = 360 / CARDS.length
const ROTATION_SPEED_DEG_PER_SEC = 360 / 42 // matches the previous 42s/revolution pace

// Beats within the pinned section's scroll range (0 to 1):
// 0 -> FREEZE_AT: carousel keeps spinning while the section is pinned.
// FREEZE_AT -> ZOOM_END: the front card grows to fill the screen.
// TEXT_START -> TEXT_END: the overlay copy fades in.
// TEXT_END -> 1: holds fullscreen before the section releases.
const FREEZE_AT = 0.15
const ZOOM_END = 0.55
const TEXT_START = 0.65
const TEXT_END = 0.85

const SHOWCASE_TEXT =
  'From surface finishes to structural boards, we stock everything you need to complete an interior project — sourced from trusted manufacturers.'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

type FrozenRect = { top: number; left: number; width: number; height: number }

export function Hero() {
  const pinRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const rotorRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const overlayRef = useRef<HTMLDivElement>(null)
  const scrimRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const rotationRef = useRef(0)
  const frontIndexRef = useRef(0)
  const frozenRectRef = useRef<FrozenRect | null>(null)
  const wasActiveRef = useRef(false)
  const isHoveredRef = useRef(false)

  const [frozen, setFrozen] = useState<{ index: number; rect: FrozenRect } | null>(null)

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ['start start', 'end end'] })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let lastTime = performance.now()

    const tick = (time: number) => {
      const dt = (time - lastTime) / 1000
      lastTime = time

      const rect = pinRef.current?.getBoundingClientRect()
      const scrolledPastEnd = !!rect && rect.bottom <= window.innerHeight
      const isPinnedNow = !!rect && rect.top <= 0 && !scrolledPastEnd
      const progress = scrollYProgress.get()
      const shouldFreeze = isPinnedNow && progress >= FREEZE_AT

      // Once scrolled past the pinned section, keep the fullscreen overlay
      // up and fade it out gradually as the next section scrolls into place,
      // instead of dropping it instantly and exposing the (now invisible)
      // pinned content still finishing its scroll-away underneath.
      let exitOpacity = 1
      if (scrolledPastEnd && rect) {
        const pastPx = window.innerHeight - rect.bottom
        exitOpacity = 1 - clamp01(pastPx / window.innerHeight)
      }
      const active = shouldFreeze || (wasActiveRef.current && scrolledPastEnd && exitOpacity > 0.01)

      if (!active) {
        if (!isHoveredRef.current && !prefersReducedMotion) {
          rotationRef.current = (rotationRef.current + ROTATION_SPEED_DEG_PER_SEC * dt) % 360
        }
        if (rotorRef.current) {
          rotorRef.current.style.transform = `rotateY(${rotationRef.current}deg)`
        }

        let bestIndex = 0
        let bestDistance = Infinity
        for (let i = 0; i < CARDS.length; i++) {
          const total = (((rotationRef.current + ANGLE_STEP * i) % 360) + 360) % 360
          const distance = Math.min(total, 360 - total)
          if (distance < bestDistance) {
            bestDistance = distance
            bestIndex = i
          }
        }
        frontIndexRef.current = bestIndex

        if (wasActiveRef.current) {
          setFrozen(null)
        }
      } else if (!wasActiveRef.current) {
        const el = cardRefs.current[frontIndexRef.current]
        if (el) {
          const cardRect = el.getBoundingClientRect()
          const rect: FrozenRect = {
            top: cardRect.top,
            left: cardRect.left,
            width: cardRect.width,
            height: cardRect.height,
          }
          frozenRectRef.current = rect
          setFrozen({ index: frontIndexRef.current, rect })
        }
      }

      const zoomT = clamp01((progress - FREEZE_AT) / (ZOOM_END - FREEZE_AT))

      // Fade the pinned heading/carousel out as the overlay grows over it, so
      // once the section releases it's already invisible instead of popping
      // back into view small before the next section scrolls up.
      if (contentRef.current) {
        contentRef.current.style.opacity = String(1 - zoomT)
      }

      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(exitOpacity)

        const rect = frozenRectRef.current
        if (rect) {
          const top = rect.top * (1 - zoomT)
          const left = rect.left * (1 - zoomT)
          const width = rect.width + (window.innerWidth - rect.width) * zoomT
          const height = rect.height + (window.innerHeight - rect.height) * zoomT
          const radius = 16 * (1 - zoomT)
          overlayRef.current.style.top = `${top}px`
          overlayRef.current.style.left = `${left}px`
          overlayRef.current.style.width = `${width}px`
          overlayRef.current.style.height = `${height}px`
          overlayRef.current.style.borderRadius = `${radius}px`
        }

        const textT = clamp01((progress - TEXT_START) / (TEXT_END - TEXT_START))
        if (textRef.current) {
          textRef.current.style.opacity = String(textT)
          textRef.current.style.transform = `translateY(${24 * (1 - textT)}px)`
        }

        const scrimT = clamp01((progress - ZOOM_END) / (TEXT_START - ZOOM_END))
        if (scrimRef.current) {
          scrimRef.current.style.opacity = String(scrimT)
        }
      }

      wasActiveRef.current = active
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [scrollYProgress])

  return (
    <>
      <div ref={pinRef} className="relative h-[300vh] bg-ink-50">
        <div
          ref={contentRef}
          className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden"
        >
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink-900/40" />

          <Header variant="dark" />

          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl  md:mt-30">
              Vishal Enterprise
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-100 sm:text-lg">
              The interior finish you deserve — laminates, veneers, and boards engineered from a
              single sheet, never a shortcut.
            </p>
          </div>

          <div
            className="relative mt-14 flex h-[300px] w-full items-center justify-center sm:mt-10 sm:h-[500px]"
            style={{ perspective: '1500px' }}
            onMouseEnter={() => {
              isHoveredRef.current = true
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false
            }}
          >
            <div
              ref={rotorRef}
              className="relative h-[260px] w-[190px] [--card-radius:300px] [transform-style:preserve-3d] will-change-transform sm:h-[250px] sm:w-[380px] sm:[--card-radius:570px]"
            >
              {CARDS.map((src, i) => (
                <div
                  key={src}
                  ref={(el) => {
                    cardRefs.current[i] = el
                  }}
                  className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl shadow-ink-900/30 [backface-visibility:hidden]"
                  style={{
                    transform: `rotateY(${ANGLE_STEP * i}deg) translateZ(var(--card-radius))`,
                    visibility: frozen?.index === i ? 'hidden' : 'visible',
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover grayscale-[15%]"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {frozen && (
        <div
          ref={overlayRef}
          className="fixed z-40 overflow-hidden shadow-2xl"
          style={{
            top: frozen.rect.top,
            left: frozen.rect.left,
            width: frozen.rect.width,
            height: frozen.rect.height,
            borderRadius: 16,
          }}
        >
          <img
            src={CARDS[frozen.index]}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover grayscale-[15%]"
          />
          <div
            ref={scrimRef}
            style={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-16">
            <p
              ref={textRef}
              style={{ opacity: 0, transform: 'translateY(24px)' }}
              className="max-w-3xl text-xl font-medium leading-snug text-white sm:text-3xl"
            >
              {SHOWCASE_TEXT}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
