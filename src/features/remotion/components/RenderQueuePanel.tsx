import React from 'react';

const RenderQueuePanel: React.FC = () => {
  return (
    <div className="render-queue-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Render Queue</h3>
      <div style={{ color: '#666', fontSize: '12px' }}>No pending renders</div>
    </div>
  );
};

export default RenderQueuePanel;
