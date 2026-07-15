import React from 'react';
import SceneHeader from './SceneHeader';
import ScenePreview from '../preview/ScenePreview';
import SceneLayers from './SceneLayers';
import SceneTimeline from './SceneTimeline';

const SceneEditor: React.FC = () => {
  return (
    <div className="scene-editor" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <SceneHeader />
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <div style={{ width: '260px', borderRight: '1px solid #333', overflowY: 'auto' }}>
          <SceneLayers />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#000' }}>
          <ScenePreview />
          <SceneTimeline />
        </div>
      </div>
    </div>
  );
};

export default SceneEditor;
