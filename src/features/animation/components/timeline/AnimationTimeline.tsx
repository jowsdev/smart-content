import React from 'react';
import TimelineRuler from './TimelineRuler';
import TimelineTracks from './TimelineTracks';
import TimelineCursor from './TimelineCursor';

const AnimationTimeline: React.FC = () => {
  return (
    <div className="animation-timeline" style={{
      height: '250px',
      background: '#111',
      borderTop: '1px solid #333',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="timeline-toolbar" style={{ height: '32px', background: '#222', borderBottom: '1px solid #333' }} />
      <div className="timeline-content" style={{ flex: 1, position: 'relative', overflow: 'auto' }}>
        <TimelineRuler />
        <TimelineTracks />
        <TimelineCursor />
      </div>
    </div>
  );
};

export default AnimationTimeline;
