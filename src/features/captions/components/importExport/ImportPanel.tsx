import React from 'react';

const ImportPanel: React.FC = () => {
  return (
    <div className="import-panel" style={{ padding: '20px', border: '1px dashed #333', textAlign: 'center' }}>
      <div style={{ fontSize: '24px', marginBottom: '8px' }}>📥</div>
      <p style={{ fontSize: '12px', color: '#666' }}>Upload SRT or VTT file</p>
    </div>
  );
};

export default ImportPanel;
