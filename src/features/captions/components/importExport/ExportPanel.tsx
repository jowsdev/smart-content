import React from 'react';

const ExportPanel: React.FC = () => {
  return (
    <div className="export-panel" style={{ padding: '16px' }}>
      <button style={{ width: '100%', background: '#0070f3', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px' }}>Export as SRT</button>
    </div>
  );
};

export default ExportPanel;
