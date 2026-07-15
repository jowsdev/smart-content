import React from 'react';
import { mcpRegistry } from '../engine/MCPRegistry';
import { Card } from '../../../components/ui/Card';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';

interface MCPResourceListProps {
  serverId: string;
}

export const MCPResourceList: React.FC<MCPResourceListProps> = ({ serverId }) => {
  const server = mcpRegistry.getServer(serverId);
  const resources = server?.resources.map(id => (mcpRegistry as any).resources.get(id)).filter(Boolean) || [];

  return (
    <div style={{ display: 'grid', gap: spacing.sm }}>
      {resources.map((res: any) => (
        <Card key={res.id} padding="small">
          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{res.name}</div>
          <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>{res.uri}</div>
          <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>{res.mimeType}</div>
        </Card>
      ))}
      {resources.length === 0 && <div style={{ color: '#666' }}>No resources.</div>}
    </div>
  );
};
