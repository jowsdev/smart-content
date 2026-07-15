import React from 'react';
import VideoStudioLayout from '../components/layout/VideoStudioLayout';
import VideoPreview from '../components/preview/VideoPreview';
import Timeline from '../components/timeline/Timeline';
import PropertiesPanel from '../components/inspector/PropertiesPanel';
import SceneExplorer from '../components/explorer/SceneExplorer';

const VideoStudioPage: React.FC = () => {
  return (
    <VideoStudioLayout>
      <div style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          minHeight: 0
        }}>
          <div style={{ width: '240px', borderRight: '1px solid #333', background: '#111', overflowY: 'auto' }}>
            <SceneExplorer />
          </div>

          <VideoPreview />

          <div style={{ width: '300px', borderLeft: '1px solid #333', background: '#111', overflowY: 'auto' }}>
            <PropertiesPanel />
          </div>
        </div>

        <Timeline />
      </div>
    </VideoStudioLayout>
  );
};

export default VideoStudioPage;
