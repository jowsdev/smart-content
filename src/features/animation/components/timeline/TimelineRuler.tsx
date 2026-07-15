import React from 'react';

const TimelineRuler: React.FC = () => {
  return (
    <div className="timeline-ruler" style={{ height: '20px', background: '#1a1a1a', borderBottom: '1px solid #333', display: 'flex' }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} style={{ minWidth: '80px', borderLeft: '1px solid #444', fontSize: '10px', paddingLeft: '4px' }}>{i * 10}f</div>
      ))}
    </div>
  );
};

export default TimelineRuler;
