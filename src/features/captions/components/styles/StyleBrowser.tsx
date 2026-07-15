import React from 'react';
import { PRESET_STYLES } from '../../constants/presetStyles';
import StyleCard from './StyleCard';

const StyleBrowser: React.FC = () => {
  return (
    <div className="style-browser" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px', color: '#888' }}>Preset Styles</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {PRESET_STYLES.map(style => (
          <StyleCard key={style} name={style} />
        ))}
      </div>
    </div>
  );
};

export default StyleBrowser;
