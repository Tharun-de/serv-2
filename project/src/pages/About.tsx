import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer First',
      description: 'We prioritize our clients\' needs and deliver solutions that exceed expectations.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every service we provide.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Delta Elmech Systems</title>
        <meta name="description" content="Learn about Delta Elmech Systems' journey, mission, values, and commitment to excellence in facility management services." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Building trust through excellence in facility management since 2008
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2008, Delta Elmech Systems has grown to become a leading provider of integrated facility management solutions in India. What started as a small team of dedicated professionals has evolved into a comprehensive service provider trusted by major corporations across the country.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to excellence, innovation, and customer satisfaction has helped us build long-lasting relationships with our clients and establish ourselves as a reliable partner in the facility management industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional facility management services that enable our clients to focus on their core business while we ensure their facilities operate at peak efficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative facility management partner, setting industry standards for service excellence and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;