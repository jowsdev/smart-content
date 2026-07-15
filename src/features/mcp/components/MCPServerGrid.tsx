import React from 'react';
import type { MCPServer } from '../types/server.types';
import { MCPServerCard } from './MCPServerCard';
import { spacing } from '../../../styles/spacing';

interface MCPServerGridProps {
  servers: MCPServer[];
  onSelect: (id: string) => void;
}

export const MCPServerGrid: React.FC<MCPServerGridProps> = ({ servers, onSelect }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: spacing.lg,
      padding: spacing.md
    }}>
      {servers.map(server => (
        <MCPServerCard key={server.id} server={server} onSelect={onSelect} />
      ))}
    </div>
  );
};
