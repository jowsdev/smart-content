import { mcpRegistry } from '../engine/MCPRegistry';
import { mockServers } from '../data/mockServers';
import { mockTools } from '../data/mockTools';
import { mockResources } from '../data/mockResources';

export const initializeMCPRegistry = () => {
  mockServers.forEach(s => mcpRegistry.registerServer(s));
  mockTools.forEach(t => mcpRegistry.registerTool(t));
  mockResources.forEach(r => mcpRegistry.registerResource(r));
};
