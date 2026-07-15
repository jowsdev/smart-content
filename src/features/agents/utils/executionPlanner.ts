import type { Agent } from '../types/agent.types';
import type { ExecutionPlan, ExecutionStep } from '../types/execution.types';

export const planExecution = (agent: Agent, _input: any): ExecutionPlan => {
  const steps: ExecutionStep[] = [
    { id: 'init', name: 'Initialization', description: `Initializing ${agent.displayName}` }
  ];

  if (agent.capabilities.includes('Research')) {
    steps.push({ id: 'research', name: 'Context Retrieval', description: 'Gathering relevant information' });
  }

  steps.push({ id: 'process', name: 'Core Processing', description: 'Generating output' });

  if (agent.capabilities.includes('Validation')) {
    steps.push({ id: 'validate', name: 'Validation', description: 'Checking quality of output' });
  }

  return {
    id: `plan-${Math.random().toString(36).substr(2, 9)}`,
    agentId: agent.id,
    steps
  };
};
