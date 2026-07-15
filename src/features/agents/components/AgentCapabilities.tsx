import React from 'react';
import type { AgentCapability } from '../types/capability.types';
import { Badge } from '../../../components/ui';

interface AgentCapabilitiesProps {
  capabilities: AgentCapability[];
}

const AgentCapabilities: React.FC<AgentCapabilitiesProps> = ({ capabilities }) => {
  return (
    <div className="capabilities-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {capabilities.map((cap) => (
        <Badge key={cap} variant="default">
          {cap}
        </Badge>
      ))}
    </div>
  );
};

export default AgentCapabilities;
