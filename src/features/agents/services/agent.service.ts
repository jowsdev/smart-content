import type { Agent } from '../types/agent.types';
import { mockAgents } from '../data/mockAgents';
import { agentRegistry } from '../registry/AgentRegistry';

export const loadAgents = async (): Promise<Agent[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));

  // Register mock agents if registry is empty
  if (agentRegistry.getAll().length === 0) {
    mockAgents.forEach(agent => agentRegistry.register(agent));
  }

  return agentRegistry.getAll();
};

export const saveAgent = async (agent: Agent): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  agentRegistry.register(agent);
};

export const installAgent = async (agent: Agent): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  agentRegistry.register({ ...agent, enabled: true });
};

export const duplicateAgent = async (id: string): Promise<Agent | undefined> => {
  const original = agentRegistry.find(id);
  if (!original) return undefined;

  const copy: Agent = {
    ...original,
    id: `${original.id}-copy`,
    displayName: `${original.displayName} (Copy)`,
    favorite: false
  };

  agentRegistry.register(copy);
  return copy;
};

export const exportAgent = async (id: string): Promise<string> => {
  const agent = agentRegistry.find(id);
  return JSON.stringify(agent, null, 2);
};

export const importAgent = async (json: string): Promise<Agent> => {
  const agent = JSON.parse(json) as Agent;
  agentRegistry.register(agent);
  return agent;
};
