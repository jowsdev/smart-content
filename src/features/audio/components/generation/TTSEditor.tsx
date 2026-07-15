import React from 'react';

const TTSEditor: React.FC = () => {
  return (
    <div className="tts-editor" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <label style={{ fontSize: '14px', color: '#888' }}>Text to Synthesize</label>
      <textarea
        placeholder="Enter the text you want to turn into speech..."
        style={{ width: '100%', height: '150px', background: '#111', border: '1px solid #333', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '6px', fontWeight: 'bold' }}>Generate Audio</button>
      </div>
    </div>
  );
};

export default TTSEditor;
