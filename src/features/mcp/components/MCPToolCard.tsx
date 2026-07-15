import React from 'react';
import type { MCPTool } from '../types/tool.types';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';

interface MCPToolCardProps {
  tool: MCPTool;
  onExecute: (id: string) => void;
}

export const MCPToolCard: React.FC<MCPToolCardProps> = ({ tool, onExecute }) => {
  return (
    <Card padding="medium" style={{ borderLeft: `4px solid ${colors.primary.main}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm }}>
        <h4 style={{ margin: 0 }}>{tool.name}</h4>
        <Badge variant="outline">{tool.category}</Badge>
      </div>
      <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: spacing.md }}>
        {tool.description}
      </p>
      <div style={{ backgroundColor: colors.background.light, padding: spacing.sm, borderRadius: 4, marginBottom: spacing.md }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: colors.text.muted, marginBottom: spacing.xs }}>INPUT SCHEMA</div>
        <pre style={{ fontSize: '0.75rem', margin: 0, overflowX: 'auto' }}>
          {JSON.stringify(tool.inputSchema.properties, null, 2)}
        </pre>
      </div>
      <Button variant="outline" size="small" fullWidth onClick={() => onExecute(tool.id)}>Run Tool</Button>
    </Card>
  );
};
