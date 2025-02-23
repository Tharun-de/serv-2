import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ChevronRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Smart Building Management',
      excerpt: 'Explore how IoT and AI are revolutionizing facility management and creating more efficient buildings.',
      date: 'March 15, 2024',
      author: 'John Doe',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3'
    },
    {
      title: 'Sustainable Facility Management Practices',
      excerpt: 'Learn about eco-friendly approaches to building maintenance and operations.',
      date: 'March 10, 2024',
      author: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3'
    },
    {
      title: 'Essential Security Measures for Commercial Buildings',
      excerpt: 'A comprehensive guide to modern security systems and protocols.',
      date: 'March 5, 2024',
      author: 'Mike Johnson',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Delta Elmech Systems</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and news in facility management from Delta Elmech Systems." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[300px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Insights and updates from the world of facility management
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;