import type { MCPServer } from '../types/server.types';

export const mockServers: MCPServer[] = [
  {
    id: 'server-local-fs',
    name: 'Local Filesystem',
    description: 'Provides access to the local project files.',
    transport: 'stdio',
    status: 'connected',
    enabled: true,
    version: '1.0.0',
    url: 'file:///usr/bin/mcp-fs',
    capabilities: { tools: true, resources: true },
    tools: ['tool-fs-read'],
    resources: ['res-project-doc'],
    prompts: [],
    settings: {},
    metadata: {}
  },
  {
    id: 'server-github',
    name: 'GitHub MCP',
    description: 'Interact with GitHub repositories and issues.',
    transport: 'https',
    status: 'disconnected',
    enabled: true,
    version: '2.1.0',
    url: 'https://mcp.github.com',
    capabilities: { tools: true, prompts: true },
    tools: ['tool-github-search'],
    resources: [],
    prompts: [],
    settings: {},
    metadata: {}
  }
];
