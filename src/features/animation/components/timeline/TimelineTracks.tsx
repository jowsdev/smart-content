import React from 'react';

const TimelineTracks: React.FC = () => {
  return (
    <div className="timeline-tracks">
      <div style={{ height: '32px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', padding: '0 8px', color: '#888', fontSize: '12px' }}>
        Transform.Opacity
      </div>
      <div style={{ height: '32px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', padding: '0 8px', color: '#888', fontSize: '12px' }}>
        Transform.Position
      </div>
    </div>
  );
};

export default TimelineTracks;
