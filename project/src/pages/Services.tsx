import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrench, Building2, Droplet, Users, Shield, TreePine, Building, ClipboardList, UserCog, HeadsetIcon, ChevronRight, Lightbulb, Coffee, Paintbrush as PaintBrush, Brush } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Mechanical Services',
      description: 'Comprehensive HVAC maintenance, elevator maintenance, and mechanical system optimization.'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Civil Works',
      description: 'Structural maintenance, repairs, renovations, and infrastructure development.'
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: 'Plumbing Services',
      description: 'Expert plumbing maintenance, repairs, and water management solutions.'
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'Facility Pantry',
      description: 'Complete pantry management and refreshment services for your workplace.'
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: 'Horticulture',
      description: 'Professional landscaping and green space maintenance services.'
    },
    {
      icon: <Brush className="h-8 w-8" />,
      title: 'Façade Cleaning',
      description: 'Specialized cleaning services for building exteriors and windows.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security Services',
      description: '24/7 security personnel and advanced surveillance systems.'
    },
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: 'Vendor Management',
      description: 'Efficient coordination and management of third-party service providers.'
    },
    {
      icon: <UserCog className="h-8 w-8" />,
      title: 'Staffing & Payroll',
      description: 'Comprehensive staffing solutions and payroll management services.'
    },
    {
      icon: <HeadsetIcon className="h-8 w-8" />,
      title: 'Helpdesk Services',
      description: 'Responsive customer support and issue resolution system.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Electrical Services',
      description: 'Complete electrical system maintenance and installations.'
    },
    {
      icon: <PaintBrush className="h-8 w-8" />,
      title: 'Architecture & Interior Design',
      description: 'Modern architectural solutions and interior design services.'
    }
  ];

  const clients = [
    { name: 'Qualcomm', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Qualcomm-Logo.svg' },
    { name: 'HPCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hindustan_Petroleum_Logo.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Capgemini_logo.svg' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Delta Elmech Systems</title>
        <meta name="description" content="Explore Delta Elmech Systems' comprehensive range of facility management services including mechanical, civil, plumbing, security, and more." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Comprehensive facility management solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Carousel */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Clients</h2>
            <p className="text-xl text-gray-300">Trusted by leading organizations</p>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ 
                x: [0, -1920],
                transition: {
                  x: {
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                  }
                }
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-lg flex items-center justify-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need a customized solution?</h2>
            <p className="text-xl text-blue-100 mb-8">Contact us to discuss your specific requirements</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Get a Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;