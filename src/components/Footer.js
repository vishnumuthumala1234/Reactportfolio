import React from 'react';
import { FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa';
const Footer = () => {
  return (
    
    <footer className="bg-gray-800 text-white p-4">
      
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
            <FaSnapchat size={24} />
          </a>
        </div>
        <p className="mt-4">&copy; 2023 Vishnu Reddy. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
