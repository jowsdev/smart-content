import React from 'react';

const STTPanel: React.FC = () => {
  return (
    <div className="stt-panel" style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Transcription</h3>
      <div style={{ padding: '30px', border: '1px dashed #333', textAlign: 'center', color: '#666' }}>
        Upload or select audio to transcribe
      </div>
    </div>
  );
};

export default STTPanel;
