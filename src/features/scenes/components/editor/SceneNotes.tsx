import React from 'react';

const SceneNotes: React.FC = () => {
  return (
    <div className="scene-notes" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Internal Notes</h3>
      <textarea style={{ width: '100%', height: '100px', background: '#111', border: '1px solid #333', color: '#fff', padding: '8px', fontSize: '12px' }} placeholder="Add notes for this scene..." />
    </div>
  );
};

export default SceneNotes;
