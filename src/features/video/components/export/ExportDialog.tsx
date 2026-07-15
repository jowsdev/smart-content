import React from 'react';

const ExportDialog: React.FC = () => {
  return (
    <div className="export-dialog" style={{ padding: '24px', background: '#222', borderRadius: '8px', width: '400px' }}>
      <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Export Video</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px' }}>Format</label>
          <select style={{ width: '100%', padding: '8px', background: '#333', color: 'white', border: 'none' }}>
            <option>MP4 (H.264)</option>
            <option>WebM (VP9)</option>
            <option>GIF</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px' }}>Resolution</label>
          <select style={{ width: '100%', padding: '8px', background: '#333', color: 'white', border: 'none' }}>
            <option>1080p (1920x1080)</option>
            <option>720p (1280x720)</option>
            <option>4K (3840x2160)</option>
          </select>
        </div>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <button style={{ padding: '8px 16px', background: 'transparent', color: 'white', border: 'none' }}>Cancel</button>
        <button style={{ padding: '8px 16px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}>Start Render</button>
      </div>
    </div>
  );
};

export default ExportDialog;
