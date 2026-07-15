import type { MCPResource } from '../types/resource.types';

export const mockResources: MCPResource[] = [
  {
    id: 'res-project-doc',
    uri: 'mcp://workspace/docs/project-plan.md',
    name: 'Project Plan',
    mimeType: 'text/markdown',
    description: 'The master project plan for Smart Content.',
    size: 1024,
    metadata: {}
  }
];
