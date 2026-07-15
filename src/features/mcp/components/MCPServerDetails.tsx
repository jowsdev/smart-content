import React from 'react';
import type { MCPServer } from '../types/server.types';
import { MCPConnectionStatus } from './MCPConnectionStatus';
import { MCPToolList } from './MCPToolList';
import { MCPResourceList } from './MCPResourceList';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';
import { Button } from '../../../components/ui/Button';

interface MCPServerDetailsProps {
  server: MCPServer;
}

export const MCPServerDetails: React.FC<MCPServerDetailsProps> = ({ server }) => {
  return (
    <div style={{ padding: spacing.lg }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.xl }}>
        <div>
          <h2 style={{ margin: 0 }}>{server.name}</h2>
          <div style={{ marginTop: spacing.xs }}>
            <MCPConnectionStatus status={server.status} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: spacing.md }}>
          <Button variant="outline">Refresh</Button>
          <Button variant="outline" danger>Remove</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: spacing.xl }}>
        <div>
          <h3 style={{ borderBottom: `2px solid ${colors.primary.main}`, paddingBottom: spacing.sm }}>Tools</h3>
          <MCPToolList serverId={server.id} />
        </div>
        <div>
          <h3 style={{ borderBottom: `2px solid ${colors.secondary.main}`, paddingBottom: spacing.sm }}>Resources</h3>
          <MCPResourceList serverId={server.id} />
        </div>
      </div>
    </div>
  );
};
