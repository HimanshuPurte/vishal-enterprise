import wpcPanelImage from '../image/wpc-panel.jpg'
import soffitPanelImage from '../image/soffit-panel.jpg'
import stonePanelImage from '../image/stone-panel.jpg'
import steelRoofingImage from '../image/Stone Coated Steel Roofing.jpg'
import polygraniteImage from '../image/polygranite.jpg'

import DecorativePanels1 from '../image/image2.jpg'
import DecorativePanels2 from '../image/image1.jpg'
import DecorativePanels3 from '../image/image3.jpg'

import pvc from '../image/pvc.png'            

import Flooring from '../image/floor.jpg'


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
    image: wpcPanelImage,
  },
  {
    id: 'soffit-panel',
    name: 'Soffit Panel',
    description: 'Ventilated soffit panels that protect eaves while keeping air flowing freely.',
    icon: 'soffit',
    image: soffitPanelImage,
  },
  {
    id: 'stone-panel',
    name: 'Stone Panel',
    description: 'Lightweight decorative stone-finish panels for striking interior and exterior walls.',
    icon: 'stonePanel',
    image: stonePanelImage,
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
    image: steelRoofingImage,
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
  image?: string
}

const CATALOGUE_ASSET_BASE =
  'https://pub-9bd40650e53a466d8ed4409c60275882.r2.dev/vishal-enterprise-catlogue'

const asset = (filename: string) => `${CATALOGUE_ASSET_BASE}/${encodeURIComponent(filename)}`

export const catalogue: Product[] = [
  {
    id: 'wpc-exterior-panel',
    name: 'WPC Exterior Panel',
    category: 'WPC Panels',
    finish: 'Exterior Grade',
    downloadUrl: asset('A4 Size WPC Exterior-1.pdf'),
    image: wpcPanelImage,
  },
  {
    id: 'wpc-interior-fluted-panel',
    name: 'WPC Interior Fluted Panel',
    category: 'WPC Panels',
    finish: 'Interior Grade',
    downloadUrl: asset('WPC Interior Fluted Panel.pdf'),
    image: wpcPanelImage,
  },
  {
    id: 'arkceil-soffit',
    name: 'ARKCEIL Soffit Panel',
    category: 'Soffit Panel',
    finish: 'Ventilated',
    downloadUrl: asset('ARKCEIL_SOFFIT.pdf'),
    image: soffitPanelImage,
  },
  {
    id: 'stone-panel-catalog',
    name: 'Stone Panel Catalogue',
    category: 'Stone Panel',
    finish: 'Decorative Finish',
    downloadUrl: asset('Stone Panel Catalog.pdf'),
    image: stonePanelImage,
  },
  {
    id: 'stone-coated-steel-roofing',
    name: 'Stone Coated Steel Roofing',
    category: 'Stone Coated Steel Roofing',
    finish: 'Roofing Sheet',
    downloadUrl: asset('stone coated steel Roofing-1.pdf'),
    image: steelRoofingImage,
  },
  {
    id: 'polygranite-sheet',
    name: 'Polygranite Sheet',
    category: 'Polygranite Panels',
    finish: 'Granite Finish',
    downloadUrl: asset('1. Polygranite Sheet.pdf'),
    image: polygraniteImage,
  },
  {
    id: 'estella-decor-crystal-series',
    name: 'Estella Decor Crystal Series',
    category: 'Decorative Panels',
    finish: 'Crystal Series',
    downloadUrl: asset('Estella Decor Crystal Series.pdf'),
    image: DecorativePanels1,
  },
  {
    id: 'estella-decor-pixie-collection',
    name: 'Estella Decor Pixie Collection',
    category: 'Decorative Panels',
    finish: 'Pixie Collection',
    downloadUrl: asset('Estella Decor Pixie Collection.pdf'), 
    image: DecorativePanels3,
  },
  {
    id: 'estella-decor-goldfinch-collection',
    name: 'Estella Decor Goldfinch Collection',
    category: 'Decorative Panels',
    finish: 'Goldfinch Collection',
    downloadUrl: asset('Estella decor Goldfinch Collection(1).pdf'),
    image: DecorativePanels2,
  },
  {
    id: 'glitter-pattern',
    name: 'Glitter Pattern',
    category: 'Decorative Panels',
    finish: 'Glitter Finish',
    downloadUrl: asset('Glitter Pattern.pdf'),
  },
  {
    id: 'gp-flooring-brochure',
    name: 'GP Flooring Brochure',
    category: 'Flooring',
    finish: 'Brochure',
    downloadUrl: asset('GP_FlooringBrochure.pdf'),
    image: Flooring,
  },
  {
    id: 'spc-flooring-catalog',
    name: 'SPC Flooring Catalogue',
    category: 'Flooring',
    finish: 'SPC',
    downloadUrl: asset('SPC Flooring Catalog.pdf'),
    image: Flooring,
  },
  {
    id: 'herringbone-flooring',
    name: 'Stunning Herringbone Flooring',
    category: 'Flooring',
    finish: 'Herringbone',
    downloadUrl: asset('ST - STUNNING Herringbone Flooring.pdf'),
  },
  {
    id: 'pvc-partition',
    name: 'PVC Partition',
    category: 'PVC Partition',
    finish: 'Partition Panel',
    downloadUrl: asset('PVC Partition.pdf'),
    image: pvc,
  },
  // {
  //   id: 'arise-folder',
  //   name: 'ARISE Folder',
  //   category: 'ARISE Folder',
  //   finish: 'Catalogue',
  //   downloadUrl: asset('ARISE FOLDER PDF.pdf'),
  // },
  // {
  //   id: 'aryan-aghara',
  //   name: 'Aryan Aghara',
  //   category: 'Aryan Aghara',
  //   finish: 'Catalogue',
  //   downloadUrl: asset('Aryan Aghara.pdf'),
  // },
]
