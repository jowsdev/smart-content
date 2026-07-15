import React from 'react';

const UploadQueue: React.FC = () => {
  return (
    <div className="upload-queue" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Upload Queue</h3>
      <div style={{ fontSize: '12px', color: '#666' }}>No active uploads</div>
    </div>
  );
};

export default UploadQueue;
