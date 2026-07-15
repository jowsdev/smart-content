import { useState, useEffect } from 'react';
import type { Agent } from '../types/agent.types';
import { agentRegistry } from '../registry/AgentRegistry';

export const useAgent = (id: string | undefined) => {
  const [agent, setAgent] = useState<Agent | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setAgent(agentRegistry.find(id));
    }
    setLoading(false);
  }, [id]);

  return { agent, loading };
};
