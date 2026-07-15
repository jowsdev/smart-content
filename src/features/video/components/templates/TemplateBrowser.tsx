import React from 'react';

const TemplateBrowser: React.FC = () => {
  return (
    <div className="template-browser" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Templates</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '12px', background: '#333', borderRadius: '4px' }}>YouTube Intro</div>
        <div style={{ padding: '12px', background: '#333', borderRadius: '4px' }}>TikTok Trend</div>
        <div style={{ padding: '12px', background: '#333', borderRadius: '4px' }}>LinkedIn Post</div>
      </div>
    </div>
  );
};

export default TemplateBrowser;
