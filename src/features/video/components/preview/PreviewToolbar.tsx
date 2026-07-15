import React from 'react';

const PreviewToolbar: React.FC = () => {
  return (
    <div className="preview-toolbar" style={{
      height: '32px',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      gap: '16px',
      fontSize: '12px'
    }}>
      <select style={{ background: 'transparent', color: 'white', border: 'none' }}>
        <option>Fit</option>
        <option>100%</option>
        <option>50%</option>
      </select>
      <div style={{ display: 'flex', gap: '8px' }}>
        <span>Safe Area</span>
        <span>Grid</span>
      </div>
    </div>
  );
};

export default PreviewToolbar;
