import { mcpRegistry } from '../engine/MCPRegistry';
import { mcpManager } from '../engine/MCPManager';
import type { MCPServer } from '../types/server.types';
import type { MCPExecutionResponse } from '../types/execution.types';

export const mcpService = {
  async loadServers(): Promise<MCPServer[]> {
    return new Promise(resolve => setTimeout(() => resolve(mcpRegistry.getAllServers()), 500));
  },

  async saveServer(server: MCPServer): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        mcpRegistry.registerServer(server);
        resolve();
      }, 500);
    });
  },

  async deleteServer(id: string): Promise<void> {
    console.log(`[mcpService] Deleted server ${id}`);
  },

  async discover(serverId: string): Promise<void> {
    const server = mcpRegistry.getServer(serverId);
    if (server) await mcpManager.registerAndConnect(server);
  },

  async execute(serverId: string, toolId: string, args: Record<string, any>): Promise<MCPExecutionResponse> {
    return mcpManager.executeTool(serverId, toolId, args);
  }
};
