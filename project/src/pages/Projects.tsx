import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'services',
      description: 'Complete facility management for a modern office complex',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3',
      tags: ['Facility Management', 'Security', 'Maintenance']
    },
    {
      id: 2,
      title: 'Residential Community',
      category: 'home',
      description: 'Comprehensive maintenance services for residential community',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3',
      tags: ['Residential', 'Security', 'Maintenance']
    },
    {
      id: 3,
      title: 'Corporate Headquarters',
      category: 'about',
      description: 'Full-scale facility management for corporate headquarters',
      image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3',
      tags: ['Corporate', 'Facility Management']
    },
    {
      id: 4,
      title: 'Tech Park',
      category: 'services',
      description: 'Integrated facility solutions for tech park',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3',
      tags: ['Tech Park', 'Security', 'Maintenance']
    },
    {
      id: 5,
      title: 'Shopping Mall',
      category: 'services',
      description: 'Retail facility management and maintenance',
      image: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3',
      tags: ['Retail', 'Security', 'Maintenance']
    },
    {
      id: 6,
      title: 'Hospital Complex',
      category: 'about',
      description: 'Healthcare facility management solutions',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3',
      tags: ['Healthcare', 'Maintenance']
    },
    {
      id: 7,
      title: 'Educational Campus',
      category: 'home',
      description: 'Campus-wide facility management services',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3',
      tags: ['Education', 'Maintenance']
    },
    {
      id: 8,
      title: 'Industrial Complex',
      category: 'services',
      description: 'Industrial facility management and maintenance',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3',
      tags: ['Industrial', 'Maintenance']
    },
    {
      id: 9,
      title: 'Data Center',
      category: 'about',
      description: 'Critical facility management for data centers',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3',
      tags: ['Data Center', 'Security']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Our Projects - Delta Elmech Systems</title>
        <meta name="description" content="Explore our portfolio of successful facility management projects across various sectors." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[300px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Showcasing our excellence in facility management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-200 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-blue-600/80 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;