import React from 'react';
import type { Agent } from '../types/agent.types';
import AgentGrid from './AgentGrid';
import AgentCategories from './AgentCategories';

interface AgentMarketplaceProps {
  agents: Agent[];
  onInstall?: (agent: Agent) => void;
}

const AgentMarketplace: React.FC<AgentMarketplaceProps> = ({ agents }) => {
  return (
    <div className="agent-marketplace">
      <div className="marketplace-header">
        <h2>Agent Marketplace</h2>
        <p>Discover and install specialized AI agents.</p>
      </div>
      <div className="marketplace-content">
        <AgentCategories />
        <AgentGrid agents={agents} />
      </div>
    </div>
  );
};

export default AgentMarketplace;
