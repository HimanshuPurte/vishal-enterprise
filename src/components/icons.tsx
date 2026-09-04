import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function WpcPanelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M8 4v16M13 4v16M17.5 4v16" opacity="0.6" />
    </svg>
  )
}

export function SoffitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="9" width="18" height="7" rx="1" />
      <path d="M6 12h.01M9.5 12h.01M13 12h.01M16.5 12h.01M20 12h.01" />
      <path d="M3 5l18-1" />
    </svg>
  )
}

export function StonePanelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9l6-2 5 2 7-2M4 15l5-2 5 2 6-2" />
    </svg>
  )
}

export function GlueIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 3h6v4l2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-2V3Z" />
      <path d="M9 12h6" />
    </svg>
  )
}

export function SteelRoofingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 20l3-9 3 5 3-8 3 8 3-5 3 9" />
      <path d="M3 20h18" />
    </svg>
  )
}

export function BambooIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 21V3M8 7h8M8 12h8M8 17h8" />
      <path d="M12 3v18" opacity="0.6" />
    </svg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path d="M4 19h16" />
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
  wpcPanel: WpcPanelIcon,
  soffit: SoffitIcon,
  stonePanel: StonePanelIcon,
  glue: GlueIcon,
  steelRoofing: SteelRoofingIcon,
  bamboo: BambooIcon,
}
