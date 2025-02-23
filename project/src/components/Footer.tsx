import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Delta Elmech</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in comprehensive facility management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Mechanical Services</li>
              <li className="text-gray-400">Civil Services</li>
              <li className="text-gray-400">Plumbing Services</li>
              <li className="text-gray-400">Facility Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                delta@delta.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                0000000000
              </li>
              <li className="text-gray-400">
                Hyderabad, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Delta Elmech Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;