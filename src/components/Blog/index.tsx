import { useState } from 'react';
import BlogHero from './hero';
import BlogCard from './card';

const BlogList = () => {
  const categories = [
    'All',
    'Cloud Computing',
    'Cybersecurity',
    'Digital Transformation',
    'AI & ML',
    'DevOps',
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogs = [
    {
      title: 'The Future of Cloud Computing in Enterprise',
      excerpt: 'Explore how cloud computing is revolutionizing enterprise infrastructure and enabling digital transformation at scale.',
      author: 'Sarah Johnson',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      category: 'Cloud Computing',
    },
    {
      title: 'Implementing Zero Trust Security',
      excerpt: 'Learn about the principles of zero trust architecture and how to implement it in your organization.',
      author: 'Michael Chen',
      date: 'Mar 12, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      category: 'Cybersecurity',
    },
    {
      title: 'AI-Driven Business Intelligence',
      excerpt: 'Discover how artificial intelligence is transforming business intelligence and decision-making processes.',
      author: 'Emily Rodriguez',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      category: 'AI & ML',
    },
    {
      title: 'DevOps Best Practices for 2024',
      excerpt: 'Stay ahead of the curve with these essential DevOps practices for modern software development.',
      author: 'David Kim',
      date: 'Mar 8, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      category: 'DevOps',
    },
    {
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world examples of successful digital transformation initiatives and their impact on business growth.',
      author: 'Lisa Thompson',
      date: 'Mar 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      category: 'Digital Transformation',
    },
    {
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding the importance of edge computing in modern IT infrastructure.',
      author: 'James Wilson',
      date: 'Mar 3, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      category: 'Cloud Computing',
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHero />
      
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-[#E31937] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#E31937] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;