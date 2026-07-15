import React from 'react';
import { useMCPTools } from '../hooks/useMCPTools';
import { MCPToolCard } from './MCPToolCard';
import { spacing } from '../../../styles/spacing';

interface MCPToolListProps {
  serverId: string;
}

export const MCPToolList: React.FC<MCPToolListProps> = ({ serverId }) => {
  const { tools } = useMCPTools(serverId);

  return (
    <div style={{ display: 'grid', gap: spacing.md }}>
      {tools.map(tool => (
        <MCPToolCard key={tool.id} tool={tool} onExecute={() => {}} />
      ))}
      {tools.length === 0 && <div style={{ color: '#666' }}>No tools available for this server.</div>}
    </div>
  );
};
