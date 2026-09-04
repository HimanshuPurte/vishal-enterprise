export type ProductCategory = {
  id: string
  name: string
  description: string
  icon: 'wpcPanel' | 'soffit' | 'stonePanel' | 'glue' | 'steelRoofing' | 'bamboo'
  image: string
}

export const productRange: ProductCategory[] = [
  {
    id: 'wpc-exterior-panel',
    name: 'WPC Exterior Panel',
    description: 'Weather-resistant wood-plastic composite panels built for exterior cladding and facades.',
    icon: 'wpcPanel',
    image: 'https://picsum.photos/seed/wpc-exterior-panel/600/400',
  },
  {
    id: 'soffit-panel',
    name: 'Soffit Panel',
    description: 'Ventilated soffit panels that protect eaves while keeping air flowing freely.',
    icon: 'soffit',
    image: 'https://picsum.photos/seed/soffit-panel/600/400',
  },
  {
    id: 'stone-panel',
    name: 'Stone Panel',
    description: 'Lightweight decorative stone-finish panels for striking interior and exterior walls.',
    icon: 'stonePanel',
    image: 'https://picsum.photos/seed/stone-panel/600/400',
  },
  {
    id: 'glue',
    name: 'Glue',
    description: 'High-strength adhesives formulated for reliable panel and board installation.',
    icon: 'glue',
    image: 'https://picsum.photos/seed/glue-product/600/400',
  },
  {
    id: 'stone-coated-steel-roofing',
    name: 'Stone Coated Steel Roofing',
    description: 'Durable stone-coated steel roofing sheets that pair strength with style.',
    icon: 'steelRoofing',
    image: 'https://picsum.photos/seed/stone-coated-steel-roofing/600/400',
  },
  {
    id: 'bamboo-charcoal-panel',
    name: 'Bamboo Charcoal Panel',
    description: 'Eco-friendly bamboo charcoal panels with natural antibacterial properties.',
    icon: 'bamboo',
    image: 'https://picsum.photos/seed/bamboo-charcoal-panel/600/400',
  },
]

export type Product = {
  id: string
  name: string
  category: string
  finish: string
  downloadUrl: string
}

const CATALOGUE_ASSET_BASE = 'https://pub-9bd40650e53a466d8ed4409c60275882.r2.dev'

export const catalogue: Product[] = [
  {
    id: 'p1',
    name: 'Amber Oak Laminate',
    category: 'Laminates',
    finish: 'Matte',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/amber-oak-laminate.pdf`,
  },
  {
    id: 'p2',
    name: 'Walnut Grain Veneer',
    category: 'Veneers',
    finish: 'Natural',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/walnut-grain-veneer.pdf`,
  },
  {
    id: 'p3',
    name: 'Marine Plywood 19mm',
    category: 'Plywood & Boards',
    finish: 'BWP Grade',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/marine-plywood-19mm.pdf`,
  },
  {
    id: 'p4',
    name: 'Soft-Close Hinge Set',
    category: 'Furniture Hardware',
    finish: 'Chrome',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/soft-close-hinge-set.pdf`,
  },
  {
    id: 'p5',
    name: 'Pearl White Laminate',
    category: 'Laminates',
    finish: 'Glossy',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/pearl-white-laminate.pdf`,
  },
  {
    id: 'p6',
    name: 'Teak Wood Veneer',
    category: 'Veneers',
    finish: 'Natural',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/teak-wood-veneer.pdf`,
  },
  {
    id: 'p7',
    name: 'MR Grade Plywood 12mm',
    category: 'Plywood & Boards',
    finish: 'Commercial',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/mr-grade-plywood-12mm.pdf`,
  },
  {
    id: 'p8',
    name: 'Geometric Wallpaper',
    category: 'Wallpapers & Films',
    finish: 'Textured',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/geometric-wallpaper.pdf`,
  },
  {
    id: 'p9',
    name: 'Aluminium Profile Handle',
    category: 'Furniture Hardware',
    finish: 'Matte Black',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/aluminium-profile-handle.pdf`,
  },
  {
    id: 'p10',
    name: 'Industrial Wood Adhesive',
    category: 'Adhesives & Chemicals',
    finish: '1L Can',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/industrial-wood-adhesive.pdf`,
  },
  {
    id: 'p11',
    name: 'Charcoal Grey Laminate',
    category: 'Laminates',
    finish: 'Suede',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/charcoal-grey-laminate.pdf`,
  },
  {
    id: 'p12',
    name: 'Rosewood Veneer Sheet',
    category: 'Veneers',
    finish: 'Natural',
    downloadUrl: `${CATALOGUE_ASSET_BASE}/rosewood-veneer-sheet.pdf`,
  },
]
