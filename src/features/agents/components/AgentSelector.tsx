import React from 'react';
import type { Agent } from '../types/agent.types';
import { Select } from '../../../components/ui';

interface AgentSelectorProps {
  agents: Agent[];
  selectedId?: string;
  onSelect: (id: string) => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({ agents, selectedId, onSelect }) => {
  const options = [
    { value: '', label: 'Select an Agent...' },
    ...agents.map(agent => ({
      value: agent.id,
      label: `${agent.icon} ${agent.displayName}`
    }))
  ];

  return (
    <Select
      options={options}
      value={selectedId || ''}
      onChange={(e) => onSelect(e.target.value)}
    />
  );
};

export default AgentSelector;
