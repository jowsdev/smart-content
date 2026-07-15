import React from 'react';
import { Badge } from '../../../components/ui';

interface AgentSettingsProps {
  settings: Record<string, any>;
}

const AgentSettings: React.FC<AgentSettingsProps> = ({ settings }) => {
  const keys = Object.keys(settings);

  if (keys.length === 0) {
    return <p className="no-settings" style={{ color: '#888', fontSize: '0.9rem' }}>No custom settings configured.</p>;
  }

  return (
    <div className="agent-settings-grid" style={{ display: 'grid', gap: '1rem' }}>
      {keys.map((key) => (
        <div key={key} className="setting-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', backgroundColor: '#252525', borderRadius: '4px' }}>
          <label style={{ fontSize: '0.8rem', color: '#888' }}>{key}</label>
          <Badge variant="default">{String(settings[key])}</Badge>
        </div>
      ))}
    </div>
  );
};

export default AgentSettings;
