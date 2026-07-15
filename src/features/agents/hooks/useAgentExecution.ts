import { useState } from 'react';
import type { Agent } from '../types/agent.types';
import type { AgentExecution } from '../types/execution.types';
import { agentExecutor } from '../engine/AgentExecutor';

export const useAgentExecution = () => {
  const [executing, setExecuting] = useState(false);
  const [lastExecution, setLastExecution] = useState<AgentExecution | null>(null);
  const [error, setError] = useState<string | null>(null);

  const execute = async (agent: Agent, input: any) => {
    setExecuting(true);
    setError(null);
    try {
      const result = await agentExecutor.execute(agent, input);
      setLastExecution(result);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Execution failed';
      setError(message);
      throw err;
    } finally {
      setExecuting(false);
    }
  };

  return { execute, executing, lastExecution, error };
};
