import React from 'react';

const KeyframeEditor: React.FC = () => {
  return (
    <div className="keyframe-editor" style={{ padding: '16px', background: '#111', borderBottom: '1px solid #333' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Keyframe Editor</h3>
      <div style={{ color: '#666', fontSize: '12px' }}>Select a keyframe to edit properties</div>
    </div>
  );
};

export default KeyframeEditor;
