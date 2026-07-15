import React from 'react';

const CompositionExplorer: React.FC = () => {
  return (
    <div className="composition-explorer" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Compositions</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '8px', background: '#333', borderRadius: '4px' }}>Main Composition</li>
      </ul>
    </div>
  );
};

export default CompositionExplorer;
