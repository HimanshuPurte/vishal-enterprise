import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function LaminateIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M3 14h18" />
    </svg>
  )
}

export function VeneerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 4c4 2 4 4 8 4s4-2 8-4M4 10c4 2 4 4 8 4s4-2 8-4M4 16c4 2 4 4 8 4s4-2 8-4" />
    </svg>
  )
}

export function PlywoodIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <rect x="6" y="7" width="12" height="10" rx="1" opacity="0.6" />
    </svg>
  )
}

export function HardwareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="8" cy="12" r="3" />
      <path d="M11 12h10M17 9v6" />
    </svg>
  )
}

export function AdhesiveIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 3h6v4l2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-2V3Z" />
      <path d="M9 12h6" />
    </svg>
  )
}

export function WallpaperIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 4v16M9 4c2 3 -2 6 0 9s-2 6 0 7M14 4c2 3 -2 6 0 9s-2 6 0 7M20 4v16" />
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.5l-5.9 3 1.3-6.6-4.9-4.5 6.6-.8L12 2.5Z" />
    </svg>
  )
}

export const categoryIcons = {
  laminate: LaminateIcon,
  veneer: VeneerIcon,
  plywood: PlywoodIcon,
  hardware: HardwareIcon,
  adhesive: AdhesiveIcon,
  wallpaper: WallpaperIcon,
}
