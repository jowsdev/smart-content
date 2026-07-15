import React from 'react';

const TimelineCursor: React.FC = () => {
  return (
    <div className="timeline-cursor" style={{ position: 'absolute', top: 0, left: '100px', width: '1px', height: '100%', background: '#ff0055', zIndex: 10 }}>
      <div style={{ width: '9px', height: '9px', background: '#ff0055', borderRadius: '50%', marginLeft: '-4px' }} />
    </div>
  );
};

export default TimelineCursor;
