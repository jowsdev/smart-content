import React from 'react';
import VariantsPanel from './VariantsPanel';
import BackgroundRemovalPanel from './BackgroundRemovalPanel';

const ImageEditor: React.FC = () => {
  return (
    <div className="image-editor" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#111' }}>
      <header style={{ height: '48px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        <strong>Edit Generated Image</strong>
      </header>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <VariantsPanel />
        <BackgroundRemovalPanel />
      </div>
    </div>
  );
};

export default ImageEditor;
