import React from 'react';
import type { AgentLog } from '../types/execution.types';

interface AgentLogsProps {
  logs: AgentLog[];
}

const AgentLogs: React.FC<AgentLogsProps> = ({ logs }) => {
  return (
    <div className="agent-logs">
      {logs.map((log, index) => (
        <div key={index} className={`log-entry ${log.level}`}>
          <span className="log-time">{new Date(log.timestamp).toLocaleTimeString()}</span>
          <span className="log-message">{log.message}</span>
        </div>
      ))}
    </div>
  );
};

export default AgentLogs;
