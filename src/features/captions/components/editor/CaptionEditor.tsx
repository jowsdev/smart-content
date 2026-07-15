import React from 'react';
import CaptionList from './CaptionList';
import CaptionToolbar from './CaptionToolbar';
import CaptionTimeline from './CaptionTimeline';

const CaptionEditor: React.FC = () => {
  return (
    <div className="caption-editor" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <CaptionToolbar />
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <div style={{ width: '300px', borderRight: '1px solid #333', overflowY: 'auto' }}>
          <CaptionList />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#000' }}>
          <div style={{ flex: 1, position: 'relative' }}>
             {/* Preview here */}
          </div>
          <CaptionTimeline />
        </div>
      </div>
    </div>
  );
};

export default CaptionEditor;
