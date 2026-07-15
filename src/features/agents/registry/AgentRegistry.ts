import type { Agent } from '../types/agent.types';
import type { AgentCategory } from '../constants/agentCategories';
import type { AgentCapability } from '../types/capability.types';

export class AgentRegistry {
  private static instance: AgentRegistry;
  private agents: Map<string, Agent> = new Map();

  private constructor() {}

  public static getInstance(): AgentRegistry {
    if (!AgentRegistry.instance) {
      AgentRegistry.instance = new AgentRegistry();
    }
    return AgentRegistry.instance;
  }

  public register(agent: Agent): void {
    this.agents.set(agent.id, agent);
  }

  public remove(id: string): void {
    this.agents.delete(id);
  }

  public update(id: string, updates: Partial<Agent>): void {
    const agent = this.agents.get(id);
    if (agent) {
      this.agents.set(id, { ...agent, ...updates });
    }
  }

  public find(id: string): Agent | undefined {
    return this.agents.get(id);
  }

  public getAgent(id: string): Agent | undefined {
    return this.find(id);
  }

  public getAll(): Agent[] {
    return Array.from(this.agents.values());
  }

  public getAllAgents(): Agent[] {
    return this.getAll();
  }

  public findByCategory(category: AgentCategory): Agent[] {
    return this.getAll().filter((a) => a.category === category);
  }

  public findByCapability(capability: AgentCapability): Agent[] {
    return this.getAll().filter((a) => a.capabilities.includes(capability));
  }

  public getFavorites(): Agent[] {
    return this.getAll().filter((a) => a.favorite);
  }

  public getEnabled(): Agent[] {
    return this.getAll().filter((a) => a.enabled);
  }
}

export const agentRegistry = AgentRegistry.getInstance();
