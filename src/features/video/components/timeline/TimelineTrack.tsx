import React from 'react';

interface TimelineTrackProps {
  name: string;
  type: string;
}

const TimelineTrack: React.FC<TimelineTrackProps> = ({ name, type }) => {
  return (
    <div className="timeline-track" style={{
      height: '40px',
      display: 'flex',
      borderBottom: '1px solid #222'
    }}>
      <div className="track-header" style={{
        width: '200px',
        background: '#1a1a1a',
        borderRight: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        fontSize: '12px',
        position: 'sticky',
        left: 0,
        zIndex: 5
      }}>
        <span style={{ marginRight: '8px' }}>{type === 'video' ? '📽️' : '🔊'}</span>
        {name}
      </div>
      <div className="track-content" style={{ flex: 1, position: 'relative', background: '#0a0a0a' }}>
        {/* Clips would go here */}
        {name === 'Video 1' && (
          <div style={{
            position: 'absolute',
            left: '50px',
            width: '200px',
            height: '32px',
            top: '4px',
            background: '#2a4a6a',
            borderRadius: '4px',
            border: '1px solid #3a5a7a',
            fontSize: '10px',
            padding: '4px'
          }}>
            Intro.mp4
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineTrack;
