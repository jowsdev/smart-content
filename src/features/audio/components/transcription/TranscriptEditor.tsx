import React from 'react';

const TranscriptEditor: React.FC = () => {
  return (
    <div className="transcript-editor" style={{ padding: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <span style={{ color: '#0070f3', fontSize: '12px' }}>00:00</span>
        <span style={{ fontSize: '13px' }}>Hello everyone and welcome to this video.</span>
      </div>
    </div>
  );
};

export default TranscriptEditor;
