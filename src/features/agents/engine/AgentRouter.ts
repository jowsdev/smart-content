import type { Agent } from '../types/agent.types';
import { agentRegistry } from '../registry/AgentRegistry';

export interface RouteContext {
  contentType?: string;
  promptType?: string;
  workflow?: string;
  userAction?: string;
  requiredCapabilities?: string[];
}

export class AgentRouter {
  public async route(context: RouteContext): Promise<Agent | undefined> {
    console.log('[AgentRouter] Routing request based on context', context);

    const agents = agentRegistry.getEnabled();

    // Simplistic routing logic for simulation
    if (context.contentType === 'blog' || context.promptType === 'article') {
      return agents.find(a => a.category === 'Copywriting');
    }

    if (context.userAction === 'optimize' || context.requiredCapabilities?.includes('SEO')) {
      return agents.find(a => a.category === 'SEO');
    }

    // Default to first favorite or first available
    return agents.find(a => a.favorite) || agents[0];
  }
}

export const agentRouter = new AgentRouter();
