import React from 'react';

const PromptHistory: React.FC = () => {
  return (
    <div className="prompt-history" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Recent Prompts</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '10px', background: '#1a1a1a', borderRadius: '4px', fontSize: '12px', color: '#aaa', border: '1px solid #222' }}>
          "A futuristic city at sunset..."
        </div>
      </div>
    </div>
  );
};

export default PromptHistory;
