import React from 'react';

const TimelineRuler: React.FC = () => {
  return (
    <div className="timeline-ruler" style={{
      height: '24px',
      background: '#1a1a1a',
      borderBottom: '1px solid #333',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'flex-end',
      paddingLeft: '200px' // Offset for track headers
    }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} style={{
          minWidth: '100px',
          borderLeft: '1px solid #444',
          height: '10px',
          fontSize: '10px',
          color: '#666',
          paddingLeft: '4px'
        }}>
          {i}s
        </div>
      ))}
    </div>
  );
};

export default TimelineRuler;
