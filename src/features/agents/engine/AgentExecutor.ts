import type { Agent } from '../types/agent.types';
import type { AgentExecution } from '../types/execution.types';
import { agentEngine } from './AgentEngine';

export class AgentExecutor {
  public async execute(agent: Agent, input: any): Promise<AgentExecution> {
    const isValid = await agentEngine.validate(agent, input);
    if (!isValid) {
      throw new Error(`Invalid input for agent ${agent.displayName}`);
    }

    const plan = await agentEngine.plan(agent, input);
    console.log(`Executing plan ${plan.id} for agent ${agent.name}`);

    return await agentEngine.run(agent, input);
  }
}

export const agentExecutor = new AgentExecutor();
