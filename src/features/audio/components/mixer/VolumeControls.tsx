import React from 'react';

interface VolumeControlsProps {
  label: string;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({ label }) => {
  return (
    <div className="volume-controls" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div style={{ height: '120px', width: '32px', background: '#222', position: 'relative', borderRadius: '4px' }}>
        <div style={{ position: 'absolute', bottom: '20%', left: 0, right: 0, height: '2px', background: '#0070f3' }} />
      </div>
      <span style={{ fontSize: '10px', color: '#888' }}>{label}</span>
    </div>
  );
};

export default VolumeControls;
