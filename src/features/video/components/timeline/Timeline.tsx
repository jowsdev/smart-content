import React from 'react';
import TimelineToolbar from './TimelineToolbar';
import TimelineRuler from './TimelineRuler';
import TimelineTracks from './TimelineTracks';
import TimelineCursor from './TimelineCursor';

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container" style={{
      height: '300px',
      background: '#111',
      borderTop: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <TimelineToolbar />
      <div className="timeline-scroller" style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
        <TimelineRuler />
        <div className="tracks-wrapper" style={{ position: 'relative' }}>
          <TimelineTracks />
          <TimelineCursor />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
