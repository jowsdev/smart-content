import React from 'react';

const TimelineCursor: React.FC = () => {
  return (
    <div className="timeline-cursor" style={{
      position: 'absolute',
      top: 0,
      left: '250px', // Example position
      width: '1px',
      height: '100%',
      background: 'red',
      zIndex: 20,
      pointerEvents: 'none'
    }}>
      <div style={{
        width: '11px',
        height: '11px',
        background: 'red',
        position: 'absolute',
        top: '-5px',
        left: '-5px',
        borderRadius: '50%'
      }} />
    </div>
  );
};

export default TimelineCursor;
