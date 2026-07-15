import React from 'react';

const PromptVariables: React.FC = () => {
  return (
    <div className="prompt-variables" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Variables</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        <span style={{ padding: '4px 8px', background: '#222', borderRadius: '4px', fontSize: '11px', color: '#0070f3' }}>{'{style}'}</span>
        <span style={{ padding: '4px 8px', background: '#222', borderRadius: '4px', fontSize: '11px', color: '#0070f3' }}>{'{subject}'}</span>
      </div>
    </div>
  );
};

export default PromptVariables;
