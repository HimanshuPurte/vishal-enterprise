export type Testimonial = {
  id: string
  name: string
  role: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rakesh Mehta',
    role: 'Interior Designer, Mehta & Co.',
    quote:
      'Vishal Enterprise has been our go-to supplier for laminates and veneers for over five years. Consistent quality and always on time.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Modular Kitchen Contractor',
    quote:
      'Their plywood range is unmatched in this price segment. The team also helps us pick the right material for each project.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Anil Kumar',
    role: 'Site Supervisor, Kumar Builders',
    quote:
      'Reliable delivery and fair pricing. Whenever we need bulk orders on short notice, they always come through.',
    rating: 4,
  },
  {
    id: 't4',
    name: 'Sneha Patil',
    role: 'Homeowner',
    quote:
      'We got our entire wardrobe and kitchen material from Vishal Enterprise. The finish quality exceeded our expectations.',
    rating: 5,
  },
]
