import React from 'react';
import AnimationLayout from '../components/layout/AnimationLayout';
import AnimationTimeline from '../components/timeline/AnimationTimeline';
import AnimationPreview from '../components/inspector/AnimationPreview';
import AnimationProperties from '../components/inspector/AnimationProperties';
import CurveEditor from '../components/curves/CurveEditor';
import PresetBrowser from '../components/presets/PresetBrowser';

const AnimationStudioPage: React.FC = () => {
  return (
    <AnimationLayout>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ width: '250px', borderRight: '1px solid #333', overflowY: 'auto' }}>
            <PresetBrowser />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <AnimationPreview />
            <div style={{ flex: 1, background: '#0a0a0a' }}>
              <CurveEditor />
            </div>
          </div>
          <div style={{ width: '300px', borderLeft: '1px solid #333', overflowY: 'auto' }}>
            <AnimationProperties />
          </div>
        </div>
        <AnimationTimeline />
      </div>
    </AnimationLayout>
  );
};

export default AnimationStudioPage;
