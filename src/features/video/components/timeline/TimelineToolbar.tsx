import React from 'react';

const TimelineToolbar: React.FC = () => {
  return (
    <div className="timeline-toolbar" style={{
      height: '36px',
      background: '#222',
      borderBottom: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      gap: '16px'
    }}>
      <div className="tools" style={{ display: 'flex', gap: '8px' }}>
        <button title="Select Tool">🖱️</button>
        <button title="Blade Tool">🔪</button>
        <button title="Transition Tool">↔️</button>
      </div>
      <div className="zoom-controls" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Zoom</span>
        <input type="range" min="1" max="100" defaultValue="50" />
      </div>
    </div>
  );
};

export default TimelineToolbar;
