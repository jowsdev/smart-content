import React from 'react';
import TimelineTrack from './TimelineTrack';

const TimelineTracks: React.FC = () => {
  return (
    <div className="timeline-tracks" style={{ display: 'flex', flexDirection: 'column' }}>
      <TimelineTrack name="Video 1" type="video" />
      <TimelineTrack name="Audio 1" type="audio" />
      <TimelineTrack name="Overlay" type="overlay" />
    </div>
  );
};

export default TimelineTracks;
