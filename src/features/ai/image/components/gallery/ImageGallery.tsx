import React from 'react';
import { GeneratedImage } from '../../types/image.types';
import ImageCard from './ImageCard';

interface ImageGalleryProps {
  images: GeneratedImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: '16px',
      padding: '20px'
    }}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGallery;
