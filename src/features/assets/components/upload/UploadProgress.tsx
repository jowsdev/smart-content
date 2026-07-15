import React from 'react';

const UploadProgress: React.FC = () => {
  return (
    <div className="upload-progress" style={{ padding: '8px' }}>
      <div style={{ width: '100%', height: '4px', background: '#333', borderRadius: '2px' }}>
        <div style={{ width: '45%', height: '100%', background: '#0070f3', borderRadius: '2px' }} />
      </div>
    </div>
  );
};

export default UploadProgress;
