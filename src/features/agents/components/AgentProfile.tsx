import React from 'react';
import type { Agent } from '../types/agent.types';
import { Badge } from '../../../components/ui';

interface AgentProfileProps {
  agent: Agent;
}

const AgentProfile: React.FC<AgentProfileProps> = ({ agent }) => {
  return (
    <div className="agent-profile">
      <div className="agent-profile-header" style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <span className="agent-large-icon" style={{ backgroundColor: agent.color, width: '64px', height: '64px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
          {agent.icon}
        </span>
        <div className="agent-profile-info">
          <h2 style={{ margin: 0 }}>{agent.displayName}</h2>
          <p className="agent-id" style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>ID: {agent.id}</p>
          <div className="agent-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
            {agent.tags.map(tag => (
              <Badge key={tag} variant="default">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
      <p className="agent-long-description" style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>{agent.description}</p>
      <div className="agent-meta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', padding: '1rem', backgroundColor: '#252525', borderRadius: '8px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Provider</label>
          <span style={{ fontSize: '0.9rem' }}>{agent.provider}</span>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Recommended Model</label>
          <span style={{ fontSize: '0.9rem' }}>{agent.recommendedModel}</span>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Author</label>
          <span style={{ fontSize: '0.9rem' }}>{agent.author}</span>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Version</label>
          <span style={{ fontSize: '0.9rem' }}>{agent.version}</span>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
