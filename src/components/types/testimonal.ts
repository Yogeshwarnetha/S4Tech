export interface Testimonial {
    id: string;
    name: string;
    rating: number;
    description: string;
    position: string;
    company: string;
    createdAt: string;
    status: 'published' | 'draft';
  }
  
  export const dummyTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      rating: 5,
      description: 'Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.',
      position: 'CEO',
      company: 'TechStart Inc.',
      createdAt: '2024-02-15',
      status: 'published'
    },
    {
      id: '2',
      name: 'Michael Chen',
      rating: 4,
      description: 'The level of professionalism and expertise demonstrated throughout our project was exceptional.',
      position: 'Marketing Director',
      company: 'Growth Solutions',
      createdAt: '2024-02-14',
      status: 'published'
    },
    {
      id: '3',
      name: 'Emma Davis',
      rating: 5,
      description: 'I am thoroughly impressed with the quality of service and the results delivered. Highly recommended!',
      position: 'Product Manager',
      company: 'Innovation Labs',
      createdAt: '2024-02-13',
      status: 'published'
    }
  ];