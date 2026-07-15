import React from 'react';
import PresetCard from './PresetCard';

const PresetBrowser: React.FC = () => {
  return (
    <div className="preset-browser" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Presets</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <PresetCard name="Fade In" category="Fade" />
        <PresetCard name="Slide Up" category="Slide" />
        <PresetCard name="Zoom In" category="Zoom" />
        <PresetCard name="Bounce" category="Bounce" />
      </div>
    </div>
  );
};

export default PresetBrowser;
