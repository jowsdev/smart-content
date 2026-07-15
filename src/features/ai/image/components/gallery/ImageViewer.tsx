import React from 'react';
import { GeneratedImage } from '../../types/image.types';

interface ImageViewerProps {
  image: GeneratedImage;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ image }) => {
  return (
    <div className="image-viewer" style={{ padding: '40px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '120px', marginBottom: '24px' }}>🖼️</div>
        <h3>{image.prompt}</h3>
        <p style={{ color: '#666' }}>{image.width}x{image.height} • {image.format.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default ImageViewer;
