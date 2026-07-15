import type { Agent } from '../types/agent.types';

export class AgentValidator {
  public validateAgent(agent: Agent): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!agent.id) errors.push('Agent ID is required');
    if (!agent.name) errors.push('Agent Name is required');
    if (!agent.displayName) errors.push('Display Name is required');
    if (agent.capabilities.length === 0) errors.push('Agent must have at least one capability');

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

export const agentValidator = new AgentValidator();
