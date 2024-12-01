// import { BookOpen } from 'lucide-react';

const BlogHero = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-500 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
         
          <h1 className="text-4xl md:text-5xl font-bold mb-6 py-20">Tech Insights & Updates</h1>
          {/* <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12" />
          </div> */}
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Stay informed about the latest trends, best practices, and innovations in IT consulting and digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;