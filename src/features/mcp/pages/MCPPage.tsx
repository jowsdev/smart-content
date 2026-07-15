import React, { useState } from 'react';
import { MCPLayout } from '../components/MCPLayout';
import { MCPServerGrid } from '../components/MCPServerGrid';
import { MCPServerDetails } from '../components/MCPServerDetails';
import { MCPExecutionLogs } from '../components/MCPExecutionLogs';
import { CreateServerDialog } from '../components/CreateServerDialog';
import { useMCPServers } from '../hooks/useMCPServers';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';
import { Spinner } from '../../../components/ui/Spinner';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';

const MCPPage: React.FC = () => {
  const { servers, isLoading } = useMCPServers();
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const selectedServer = servers.find(s => s.id === selectedServerId);

  if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', padding: 100 }}><Spinner size="large" /></div>;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PageHeader
        title="Model Context Protocol"
        description="Connect and manage MCP servers to extend AI capabilities with external tools and resources."
        actions={
          <Button variant="primary" onClick={() => setShowCreateDialog(true)}>+ Add Server</Button>
        }
      />

      <MCPLayout
        sidebar={
          <div style={{ padding: spacing.md }}>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: colors.text.muted, marginBottom: spacing.md }}>Servers</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
              <button
                onClick={() => setSelectedServerId(null)}
                style={{
                  textAlign: 'left', padding: spacing.sm, border: 'none', borderRadius: 4, cursor: 'pointer',
                  backgroundColor: !selectedServerId ? colors.primary.light + '22' : 'transparent',
                  color: !selectedServerId ? colors.primary.main : colors.text.primary
                }}
              >
                Overview (Grid)
              </button>
              {servers.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelectedServerId(s.id)}
                  style={{
                    textAlign: 'left', padding: spacing.sm, border: 'none', borderRadius: 4, cursor: 'pointer',
                    backgroundColor: selectedServerId === s.id ? colors.primary.light + '22' : 'transparent',
                    color: selectedServerId === s.id ? colors.primary.main : colors.text.primary
                  }}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        }
        content={
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              {selectedServer ? (
                <MCPServerDetails server={selectedServer} />
              ) : (
                <MCPServerGrid servers={servers} onSelect={setSelectedServerId} />
              )}
            </div>
            <div style={{ padding: spacing.md, borderTop: `1px solid ${colors.border.light}` }}>
              <h4 style={{ margin: `0 0 ${spacing.sm} 0`, fontSize: '0.875rem', color: colors.text.muted }}>Execution Engine Logs</h4>
              <MCPExecutionLogs />
            </div>
          </div>
        }
      />

      {showCreateDialog && (
        <CreateServerDialog
          onClose={() => setShowCreateDialog(false)}
          onCreate={() => setShowCreateDialog(false)}
        />
      )}
    </div>
  );
};

export default MCPPage;
