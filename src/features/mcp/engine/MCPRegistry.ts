import type { MCPServer } from '../types/server.types';
import type { MCPTool } from '../types/tool.types';
import type { MCPResource } from '../types/resource.types';
import type { MCPPrompt } from '../types/prompt.types';

export class MCPRegistry {
  private servers: Map<string, MCPServer> = new Map();
  private tools: Map<string, MCPTool> = new Map();
  private resources: Map<string, MCPResource> = new Map();
  private prompts: Map<string, MCPPrompt> = new Map();

  registerServer(server: MCPServer) {
    this.servers.set(server.id, server);
  }

  getServer(id: string) {
    return this.servers.get(id);
  }

  getAllServers() {
    return Array.from(this.servers.values());
  }

  registerTool(tool: MCPTool) {
    this.tools.set(tool.id, tool);
  }

  getTool(id: string) {
    return this.tools.get(id);
  }

  registerResource(resource: MCPResource) {
    this.resources.set(resource.id, resource);
  }

  registerPrompt(prompt: MCPPrompt) {
    this.prompts.set(prompt.id, prompt);
  }

  findToolsByServer(serverId: string) {
    const server = this.getServer(serverId);
    if (!server) return [];
    return server.tools.map(id => this.tools.get(id)).filter(Boolean) as MCPTool[];
  }
}

export const mcpRegistry = new MCPRegistry();
