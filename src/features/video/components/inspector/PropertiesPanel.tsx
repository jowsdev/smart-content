import React from 'react';

const PropertiesPanel: React.FC = () => {
  return (
    <div className="properties-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Transform</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Position X</label>
          <input type="number" defaultValue={0} style={{ width: '60px', background: '#333', color: 'white', border: 'none' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Position Y</label>
          <input type="number" defaultValue={0} style={{ width: '60px', background: '#333', color: 'white', border: 'none' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Scale</label>
          <input type="number" defaultValue={100} style={{ width: '60px', background: '#333', color: 'white', border: 'none' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Opacity</label>
          <input type="range" min="0" max="100" defaultValue="100" />
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
