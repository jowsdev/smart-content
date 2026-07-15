import React from 'react';
import type { Agent } from '../types/agent.types';
import { Card, Badge } from '../../../components/ui';

interface AgentCardProps {
  agent: Agent;
  onClick?: () => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onClick }) => {
  return (
    <Card onClick={onClick} className="agent-card-wrapper">
      <div className="agent-card-content">
        <div className="agent-card-header">
          <span className="agent-icon" style={{ backgroundColor: agent.color }}>
            {agent.icon}
          </span>
          <div className="agent-info">
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{agent.displayName}</h3>
            <span style={{ fontSize: '0.8rem', color: '#888' }}>{agent.category}</span>
          </div>
        </div>
        <p className="agent-description" style={{ fontSize: '0.9rem', color: '#ccc', margin: '1rem 0' }}>
          {agent.description}
        </p>
        <div className="agent-card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#888' }}>v{agent.version}</span>
          <Badge variant={agent.enabled ? 'success' : 'default'}>
            {agent.enabled ? 'Active' : 'Inactive'}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default AgentCard;
