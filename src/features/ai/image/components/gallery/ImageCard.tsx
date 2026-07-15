import React from 'react';
import { GeneratedImage } from '../../types/image.types';

interface ImageCardProps {
  image: GeneratedImage;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="image-card" style={{
      background: '#1a1a1a',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #333',
      cursor: 'pointer'
    }}>
      <div style={{ aspectRatio: '1', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        🖼️
      </div>
      <div style={{ padding: '8px' }}>
        <div style={{ fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#aaa' }}>{image.prompt}</div>
        <div style={{ fontSize: '10px', color: '#666', marginTop: '4px' }}>{image.provider} • {image.model}</div>
      </div>
    </div>
  );
};

export default ImageCard;
