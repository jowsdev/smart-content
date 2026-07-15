import React from 'react';

interface RenderSettingsProps {
  onExport: (settings: any) => void;
}

const RenderSettings: React.FC<RenderSettingsProps> = ({ onExport }) => {
  return (
    <div className="render-settings" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', color: '#888' }}>Format</label>
        <select style={{ width: '100%', padding: '8px', background: '#333', color: 'white', border: 'none' }}>
          <option>MP4 (H.264)</option>
          <option>ProRes 4444</option>
        </select>
      </div>
      <button
        onClick={() => onExport({ format: 'mp4' })}
        style={{
          background: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Export Video
      </button>
    </div>
  );
};

export default RenderSettings;
