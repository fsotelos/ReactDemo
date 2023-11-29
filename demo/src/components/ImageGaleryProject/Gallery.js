// src/Gallery.js
import React, { useState } from 'react';
import './styles/Gallery.css'; // Asegúrate de tener un archivo CSS para los estilos
import image1 from './images/image1.jpeg'
import image2 from './images/image1.jpeg'
import image3 from './images/image1.jpeg'
import image4 from './images/image1.jpeg'
import image5 from './images/image1.jpeg'
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  // Agrega más imágenes según sea necesario
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => handleImageClick(image)}
        />
      ))}

      {selectedImage && (
        <div className="modal">
          <button onClick={handleCloseModal}>&times;</button>
          <img
            src={selectedImage}
            alt={`Selected Image`}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
