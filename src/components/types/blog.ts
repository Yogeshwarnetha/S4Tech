export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    category: string;
    tags: string[];
    featuredImage: string;
    createdAt: string;
    status: 'published' | 'draft';
    readTime: number;
  }
  
  export const blogCategories = [
    'Technology',
    'Design',
    'Development',
    'Business',
    'Marketing',
    'Tutorial',
    'News',
  ] as const;
  
  export const dummyBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with React 18',
      excerpt: 'Learn about the new features in React 18 and how to use them effectively.',
      content: 'Detailed guide about React 18 features...',
      author: 'Alex Thompson',
      category: 'Development',
      tags: ['React', 'JavaScript', 'Web Development'],
      featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      createdAt: '2024-02-15',
      status: 'published',
      readTime: 8
    },
    {
      id: '2',
      title: 'Design Systems in 2024',
      excerpt: 'Explore modern design system practices and implementation strategies.',
      content: 'Comprehensive overview of design systems...',
      author: 'Sarah Chen',
      category: 'Design',
      tags: ['Design Systems', 'UI/UX', 'Frontend'],
      featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      createdAt: '2024-02-14',
      status: 'published',
      readTime: 6
    },
    {
      id: '3',
      title: 'AI in Modern Web Applications',
      excerpt: 'How to integrate AI capabilities into your web applications.',
      content: 'Guide to AI integration...',
      author: 'Marcus Rodriguez',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Web Development'],
      featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      createdAt: '2024-02-13',
      status: 'draft',
      readTime: 10
    }
  ];