import React from 'react';
import type { Agent } from '../types/agent.types';
import AgentCard from './AgentCard';

interface AgentGridProps {
  agents: Agent[];
  onSelectAgent?: (agent: Agent) => void;
}

const AgentGrid: React.FC<AgentGridProps> = ({ agents, onSelectAgent }) => {
  if (agents.length === 0) {
    return (
      <div className="empty-state">
        <p>No agents found.</p>
      </div>
    );
  }

  return (
    <div className="agent-grid">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onClick={() => onSelectAgent?.(agent)}
        />
      ))}
    </div>
  );
};

export default AgentGrid;
