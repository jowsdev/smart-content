import { mcpRegistry } from './MCPRegistry';
import { MCPDiscovery } from './MCPDiscovery';
import { MCPExecutor } from './MCPExecutor';
import { MCPValidator } from './MCPValidator';
import type { MCPServer } from '../types/server.types';

export class MCPManager {
  private discovery = new MCPDiscovery();
  private executor = new MCPExecutor();
  private validator = new MCPValidator();

  async registerAndConnect(server: MCPServer) {
    mcpRegistry.registerServer(server);
    await this.discovery.refresh(server.id);
    console.log(`[MCPManager] Server ${server.name} registered and discovered.`);
  }

  async executeTool(serverId: string, toolId: string, args: Record<string, any>) {
    const tool = mcpRegistry.getTool(toolId);
    if (!tool) throw new Error(`Tool ${toolId} not found`);

    const errors = this.validator.validateToolInput(tool, args);
    if (errors.length > 0) throw new Error(`Validation failed: ${errors.join(', ')}`);

    return this.executor.executeTool({ serverId, toolId, arguments: args });
  }
}

export const mcpManager = new MCPManager();
