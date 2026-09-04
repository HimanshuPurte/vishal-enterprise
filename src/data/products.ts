export type ProductCategory = {
  id: string
  name: string
  description: string
  icon: 'laminate' | 'veneer' | 'plywood' | 'hardware' | 'adhesive' | 'wallpaper'
}

export const productRange: ProductCategory[] = [
  {
    id: 'laminates',
    name: 'Laminates',
    description: 'High-pressure decorative laminates in a wide range of finishes and textures.',
    icon: 'laminate',
  },
  {
    id: 'veneers',
    name: 'Veneers',
    description: 'Natural and engineered wood veneers for premium interior surfaces.',
    icon: 'veneer',
  },
  {
    id: 'plywood',
    name: 'Plywood & Boards',
    description: 'Marine, commercial, and MDF boards built for strength and durability.',
    icon: 'plywood',
  },
  {
    id: 'hardware',
    name: 'Furniture Hardware',
    description: 'Hinges, channels, handles, and fittings from trusted manufacturers.',
    icon: 'hardware',
  },
  {
    id: 'adhesives',
    name: 'Adhesives & Chemicals',
    description: 'Industrial-grade adhesives, sealants, and polishing chemicals.',
    icon: 'adhesive',
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers & Films',
    description: 'Decorative wallpapers and PVC films for walls and furniture surfaces.',
    icon: 'wallpaper',
  },
]

export type Product = {
  id: string
  name: string
  category: string
  finish: string
}

export const catalogue: Product[] = [
  { id: 'p1', name: 'Amber Oak Laminate', category: 'Laminates', finish: 'Matte' },
  { id: 'p2', name: 'Walnut Grain Veneer', category: 'Veneers', finish: 'Natural' },
  { id: 'p3', name: 'Marine Plywood 19mm', category: 'Plywood & Boards', finish: 'BWP Grade' },
  { id: 'p4', name: 'Soft-Close Hinge Set', category: 'Furniture Hardware', finish: 'Chrome' },
  { id: 'p5', name: 'Pearl White Laminate', category: 'Laminates', finish: 'Glossy' },
  { id: 'p6', name: 'Teak Wood Veneer', category: 'Veneers', finish: 'Natural' },
  { id: 'p7', name: 'MR Grade Plywood 12mm', category: 'Plywood & Boards', finish: 'Commercial' },
  { id: 'p8', name: 'Geometric Wallpaper', category: 'Wallpapers & Films', finish: 'Textured' },
  { id: 'p9', name: 'Aluminium Profile Handle', category: 'Furniture Hardware', finish: 'Matte Black' },
  { id: 'p10', name: 'Industrial Wood Adhesive', category: 'Adhesives & Chemicals', finish: '1L Can' },
  { id: 'p11', name: 'Charcoal Grey Laminate', category: 'Laminates', finish: 'Suede' },
  { id: 'p12', name: 'Rosewood Veneer Sheet', category: 'Veneers', finish: 'Natural' },
]
