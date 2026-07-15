import React from 'react';

const BackgroundRemovalPanel: React.FC = () => {
  return (
    <div className="background-removal-panel" style={{ padding: '16px', borderBottom: '1px solid #333' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Background</h3>
      <button style={{ width: '100%', background: '#0070f3', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold' }}>
        Remove Background
      </button>
    </div>
  );
};

export default BackgroundRemovalPanel;
