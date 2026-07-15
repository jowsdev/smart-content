import React from 'react';
import type { AgentExecution } from '../types/execution.types';
import { Badge } from '../../../components/ui';

interface AgentExecutionHistoryProps {
  executions: AgentExecution[];
}

const AgentExecutionHistory: React.FC<AgentExecutionHistoryProps> = ({ executions }) => {
  return (
    <div className="execution-history">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Execution History</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #444' }}>
            <th style={{ padding: '0.5rem' }}>Date</th>
            <th style={{ padding: '0.5rem' }}>Status</th>
            <th style={{ padding: '0.5rem' }}>Duration</th>
            <th style={{ padding: '0.5rem' }}>Project</th>
          </tr>
        </thead>
        <tbody>
          {executions.map(exec => (
            <tr key={exec.id} style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '0.5rem' }}>{new Date(exec.startTime).toLocaleString()}</td>
              <td style={{ padding: '0.5rem' }}>
                <Badge variant={exec.status === 'completed' ? 'success' : exec.status === 'failed' ? 'error' : 'default'}>
                  {exec.status}
                </Badge>
              </td>
              <td style={{ padding: '0.5rem' }}>{exec.duration ? `${exec.duration}ms` : '-'}</td>
              <td style={{ padding: '0.5rem' }}>{exec.projectId || 'Standalone'}</td>
            </tr>
          ))}
          {executions.length === 0 && (
            <tr>
              <td colSpan={4} style={{ padding: '1rem', textAlign: 'center', color: '#888' }}>No history available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AgentExecutionHistory;
