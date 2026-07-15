import React from 'react';
import { useRenderer } from '../hooks/useRenderer';
import RenderSettings from './RenderSettings';
import RenderProgress from './RenderProgress';

const RenderPanel: React.FC = () => {
  const { render, jobs } = useRenderer();

  return (
    <div className="render-panel" style={{ padding: '20px', background: '#1a1a1a', height: '100%' }}>
      <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Export Studio</h2>

      <RenderSettings onExport={(settings) => render('current-comp', settings)} />

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Active Renders</h3>
        {jobs.map(job => (
          <RenderProgress key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RenderPanel;
