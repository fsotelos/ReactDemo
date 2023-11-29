// src/Gallery.js
import React, { useState } from 'react';
import './styles/Gallery.css'; // Asegúrate de tener un archivo CSS para los estilos
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
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
