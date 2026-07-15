import React from 'react';
import PreviewToolbar from './PreviewToolbar';
import PlaybackControls from './PlaybackControls';

const VideoPreview: React.FC = () => {
  return (
    <div className="video-preview" style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#000',
      position: 'relative'
    }}>
      <PreviewToolbar />
      <div className="canvas-area" style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div className="preview-canvas" style={{
          aspectRatio: '16/9',
          width: '80%',
          background: '#1a1a1a',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#333'
        }}>
          Canvas Preview Area
        </div>
      </div>
      <PlaybackControls />
    </div>
  );
};

export default VideoPreview;
