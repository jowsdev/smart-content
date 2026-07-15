import React from 'react';
import GenerationSettings from './GenerationSettings';
import GenerationQueue from './GenerationQueue';

const GenerationPanel: React.FC = () => {
  return (
    <div className="generation-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <GenerationSettings />
      </div>
      <div style={{ borderTop: '1px solid #333', height: '200px', overflowY: 'auto' }}>
        <GenerationQueue />
      </div>
    </div>
  );
};

export default GenerationPanel;
