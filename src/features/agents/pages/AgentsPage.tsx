import React, { useState } from 'react';
import { useAgents } from '../hooks/useAgents';
import AgentGrid from '../components/AgentGrid';
import AgentToolbar from '../components/AgentToolbar';
import AgentDetails from '../components/AgentDetails';
import type { Agent } from '../types/agent.types';
import { PageHeader } from '../../../components/ui';

const AgentsPage: React.FC = () => {
  const { agents, loading } = useAgents();
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAgents = agents.filter(agent =>
    agent.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading Agents...</div>;
  }

  return (
    <div className="agents-page">
      <PageHeader
        title="Agent Registry"
        description="Manage and configure your specialized AI agents."
      />

      <AgentToolbar
        onSearch={setSearchTerm}
        onFilterCategory={() => {}}
      />

      <div className="agents-layout">
        <div className="agents-main">
          <AgentGrid
            agents={filteredAgents}
            onSelectAgent={setSelectedAgent}
          />
        </div>

        {selectedAgent && (
          <aside className="agent-side-panel">
            <div className="panel-header">
              <h3>Agent Details</h3>
              <button onClick={() => setSelectedAgent(null)}>Close</button>
            </div>
            <AgentDetails agent={selectedAgent} />
          </aside>
        )}
      </div>
    </div>
  );
};

export default AgentsPage;
