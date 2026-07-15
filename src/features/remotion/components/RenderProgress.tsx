import React from 'react';
import { RenderJob } from '../types/render.types';

interface RenderProgressProps {
  job: RenderJob;
}

const RenderProgress: React.FC<RenderProgressProps> = ({ job }) => {
  return (
    <div className="render-progress" style={{
      padding: '12px',
      background: '#222',
      borderRadius: '4px',
      marginBottom: '8px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
        <span>Rendering...</span>
        <span>{job.progress}%</span>
      </div>
      <div style={{ width: '100%', height: '4px', background: '#444', borderRadius: '2px' }}>
        <div style={{ width: `${job.progress}%`, height: '100%', background: '#0070f3', borderRadius: '2px' }} />
      </div>
    </div>
  );
};

export default RenderProgress;
