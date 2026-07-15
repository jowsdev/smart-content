import { useState, useEffect } from 'react';
import type { Agent } from '../types/agent.types';
import * as agentService from '../services/agent.service';

export const useAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await agentService.loadAgents();
        setAgents(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load agents'));
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return { agents, loading, error, refresh: agentService.loadAgents };
};
