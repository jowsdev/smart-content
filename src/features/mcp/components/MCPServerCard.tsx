import React from 'react';
import type { MCPServer } from '../types/server.types';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';

interface MCPServerCardProps {
  server: MCPServer;
  onSelect: (id: string) => void;
}

export const MCPServerCard: React.FC<MCPServerCardProps> = ({ server, onSelect }) => {
  const getStatusVariant = (): any => {
    switch (server.status) {
      case 'connected': return 'success';
      case 'error': return 'error';
      case 'connecting': return 'primary';
      default: return 'outline';
    }
  };

  return (
    <Card padding="medium">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.sm }}>
        <h3 style={{ margin: 0, fontSize: '1rem' }}>{server.name}</h3>
        <Badge variant={getStatusVariant()}>{server.status.toUpperCase()}</Badge>
      </div>
      <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: spacing.md, minHeight: 40 }}>
        {server.description}
      </p>
      <div style={{ display: 'flex', gap: spacing.sm, marginBottom: spacing.md }}>
        <Badge variant="secondary">{server.tools.length} Tools</Badge>
        <Badge variant="secondary">{server.resources.length} Resources</Badge>
      </div>
      <div style={{ borderTop: `1px solid ${colors.border.light}`, paddingTop: spacing.md, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.75rem', color: colors.text.muted }}>v{server.version} • {server.transport}</span>
        <Button variant="ghost" size="small" onClick={() => onSelect(server.id)}>Details</Button>
      </div>
    </Card>
  );
};
