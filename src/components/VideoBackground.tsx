const DEFAULT_SRC =
  'https://cdn.dribbble.com/userupload/17778216/file/original-ea8be7b1c17c7b04ce83d5725e89a282.mp4'

type VideoBackgroundProps = {
  src?: string
}

// Full-bleed looping video with a dark scrim. The parent section must be
// `relative overflow-hidden`, and its content `relative` so it sits above.
export function VideoBackground({ src = DEFAULT_SRC }: VideoBackgroundProps) {
  return (
    <>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-ink-900/80" />
    </>
  )
}
