import React from 'react';
import { GeneratedImage } from '../../types/image.types';

interface ImageMetadataProps {
  image: GeneratedImage;
}

const ImageMetadata: React.FC<ImageMetadataProps> = ({ image }) => {
  return (
    <div className="image-metadata" style={{ padding: '20px' }}>
      <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Generation Details</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
        <div>
          <div style={{ color: '#555' }}>Prompt</div>
          <div style={{ color: '#aaa', marginTop: '4px' }}>{image.prompt}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#555' }}>Provider</span>
          <span>{image.provider}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#555' }}>Model</span>
          <span>{image.model}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#555' }}>Created</span>
          <span>{new Date(image.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageMetadata;
