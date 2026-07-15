import React from 'react';

const GenerationPreview: React.FC = () => {
  return (
    <div className="generation-preview" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <div style={{ width: '80%', aspectRatio: '1', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#444' }}>Generation Viewport</span>
      </div>
    </div>
  );
};

export default GenerationPreview;
