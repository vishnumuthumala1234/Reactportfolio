// Slideshow.js

import React, { useState, useEffect } from 'react';
import '../Slideshow.css'; // Import your Tailwind CSS styles

// Import your images
import image1 from '../assets/projects/img1.jpg';
import image2 from '../assets/projects/img2.jpg';
import image3 from '../assets/projects/img3.jpg';
import image4 from '../assets/projects/img4.jpg';

const images = [image1, image2, image3, image4]; // Add more images as needed

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 1000); // Change image every 1 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slide-image"
      />

      <button onClick={prevImage} className="prev-button">&#10094;</button>
      <button onClick={nextImage} className="next-button">&#10095;</button>
    </div>
  );
};

export default Slideshow;
 