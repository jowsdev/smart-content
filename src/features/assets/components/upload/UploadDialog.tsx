import React from 'react';

const UploadDialog: React.FC = () => {
  return (
    <div className="upload-dialog" style={{ padding: '32px', background: '#111', borderRadius: '8px', textAlign: 'center', border: '2px dashed #333' }}>
      <div style={{ fontSize: '32px', marginBottom: '12px' }}>☁️</div>
      <h3>Drop files here to upload</h3>
      <p style={{ color: '#666', fontSize: '13px' }}>Maximum file size: 500MB</p>
    </div>
  );
};

export default UploadDialog;
