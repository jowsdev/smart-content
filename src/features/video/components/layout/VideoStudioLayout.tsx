import React from 'react';
import VideoHeader from './VideoHeader';
import VideoSidebar from './VideoSidebar';
import VideoFooter from './VideoFooter';

interface VideoStudioLayoutProps {
  children: React.ReactNode;
}

const VideoStudioLayout: React.FC<VideoStudioLayoutProps> = ({ children }) => {
  return (
    <div className="video-studio-layout" style={{
      display: 'grid',
      gridTemplateAreas: '"header header" "sidebar main" "footer footer"',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: 'auto 1fr',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#1a1a1a',
      color: '#ffffff'
    }}>
      <div style={{ gridArea: 'header' }}>
        <VideoHeader />
      </div>
      <div style={{ gridArea: 'sidebar' }}>
        <VideoSidebar />
      </div>
      <main style={{ gridArea: 'main', position: 'relative', overflow: 'hidden' }}>
        {children}
      </main>
      <div style={{ gridArea: 'footer' }}>
        <VideoFooter />
      </div>
    </div>
  );
};

export default VideoStudioLayout;
