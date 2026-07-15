import React from 'react';

const CaptionTimeline: React.FC = () => {
  return (
    <div className="caption-timeline" style={{ height: '180px', background: '#111', borderTop: '1px solid #333', padding: '12px' }}>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Subtitle Timeline</div>
      <div style={{ width: '100%', height: '32px', background: '#1a1a1a', border: '1px solid #222', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '10%', width: '40%', height: '100%', background: '#0070f3', opacity: 0.3 }} />
      </div>
    </div>
  );
};

export default CaptionTimeline;
