import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrench, Building2, Shield, Users, Clock, Award, Zap, BarChart3, Timer, UserCog, MessageSquare, Building, FileText, User, ChevronRight, Star, Lightbulb, Paintbrush as PaintBrush, Brush } from 'lucide-react';

const Home = () => {
  const services = [
    { 
      icon: <Wrench className="h-8 w-8" />, 
      title: 'Mechanical Services',
      description: 'Comprehensive HVAC, elevator maintenance, and mechanical system solutions',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3'
    },
    { 
      icon: <Building2 className="h-8 w-8" />, 
      title: 'Civil Services',
      description: 'Expert structural maintenance and civil engineering solutions',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3'
    },
    { 
      icon: <Shield className="h-8 w-8" />, 
      title: 'Security Services',
      description: 'Advanced security systems and 24/7 monitoring solutions',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3'
    },
    { 
      icon: <Users className="h-8 w-8" />, 
      title: 'Facility Management',
      description: 'Integrated facility operations and maintenance solutions',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Electrical Services',
      description: 'Complete electrical system maintenance and installations',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3'
    },
    {
      icon: <PaintBrush className="h-8 w-8" />,
      title: 'Interior Design',
      description: 'Modern architectural and interior design solutions',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3'
    }
  ];

  const whyChooseUs = [
    { icon: <Shield className="h-8 w-8" />, title: 'Comprehensive Security', description: 'Advanced security protocols and 24/7 monitoring systems to protect your assets.' },
    { icon: <Zap className="h-8 w-8" />, title: 'Energy Management', description: 'Smart energy solutions to reduce costs and environmental impact.' },
    { icon: <BarChart3 className="h-8 w-8" />, title: 'Performance Analytics', description: 'Real-time monitoring and reporting for optimal facility performance.' },
    { icon: <Timer className="h-8 w-8" />, title: 'Preventive Maintenance', description: 'Proactive maintenance schedules to prevent equipment failures.' },
    { icon: <UserCog className="h-8 w-8" />, title: 'Expert Staff', description: "Highly trained professionals dedicated to your facility needs." },
    { icon: <MessageSquare className="h-8 w-8" />, title: 'Process Automation', description: 'Streamlined operations through advanced automation systems.' }
  ];

  const stats = [
    { icon: <Building className="h-8 w-8" />, number: '500+', label: 'Properties Managed', subtext: 'Across major cities' },
    { icon: <User className="h-8 w-8" />, number: '1000+', label: 'Team Members', subtext: 'Skilled professionals' },
    { icon: <Clock className="h-8 w-8" />, number: '24/7', label: 'Support Available', subtext: 'Round-the-clock service' },
    { icon: <Award className="h-8 w-8" />, number: '15+', label: 'Years Experience', subtext: 'Industry expertise' }
  ];

  const clients = [
    { name: 'Qualcomm', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Qualcomm-Logo.svg' },
    { name: 'HPCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hindustan_Petroleum_Logo.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Tech_Mahindra_New_Logo.svg' },
    { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/HCL_Technologies_Logo.svg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Delta Elmech Systems - Professional Facility Management Services</title>
        <meta name="description" content="Delta Elmech Systems provides comprehensive facility management services including mechanical, electrical, civil, security, and maintenance solutions for corporate buildings." />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/748735465/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1027659655&signature=0266c87c75c2a65b3c4b96c7c7597a4ce2d0f5dc6ac7882e0b70c7cc83982d0f"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Professional Facility Management Solutions
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 max-w-2xl"
            >
              Comprehensive building maintenance and facility management services for modern businesses
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your facility management needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-blue-600 rounded-lg mr-3">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-gray-200">{service.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Delta Elmech Systems?</h2>
            <p className="text-xl text-gray-600">
              We combine innovative technology with industry expertise to deliver exceptional facility management solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
                <p className="text-gray-600">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="h-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workplace Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Workplace Experience</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in facility management, we've built a reputation for excellence in creating optimal workplace environments that enhance productivity and employee satisfaction.
              </p>
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="h-6 w-6 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-lg font-semibold">5-Star Client Satisfaction</span>
              </div>
              <p className="text-gray-600">
                Our commitment to quality and customer service has earned us the highest ratings from our clients across various industries.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/mechanical-logo.png"
                alt="Delta Elmech Systems Mechanical Logo" 
                className="h-48 w-auto"
              />
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-xl text-blue-100 mb-8">Contact us today for a free consultation</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Contact Us
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;