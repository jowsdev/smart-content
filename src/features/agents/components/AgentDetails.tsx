import React from 'react';
import type { Agent } from '../types/agent.types';
import AgentProfile from './AgentProfile';
import AgentCapabilities from './AgentCapabilities';
import AgentSettings from './AgentSettings';

interface AgentDetailsProps {
  agent: Agent;
}

const AgentDetails: React.FC<AgentDetailsProps> = ({ agent }) => {
  return (
    <div className="agent-details">
      <div className="agent-details-content">
        <AgentProfile agent={agent} />
        <div className="agent-details-sections">
          <section>
            <h4>Capabilities</h4>
            <AgentCapabilities capabilities={agent.capabilities} />
          </section>
          <section>
            <h4>Settings</h4>
            <AgentSettings settings={agent.settings} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
