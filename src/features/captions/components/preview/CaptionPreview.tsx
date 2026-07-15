import React from 'react';

const CaptionPreview: React.FC = () => {
  return (
    <div className="caption-preview" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', position: 'relative' }}>
      <div style={{ width: '80%', aspectRatio: '16/9', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
          Welcome to <span style={{ color: '#0070f3' }}>Smart Content</span>
        </div>
      </div>
    </div>
  );
};

export default CaptionPreview;
