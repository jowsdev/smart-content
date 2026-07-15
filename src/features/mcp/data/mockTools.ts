import type { MCPTool } from '../types/tool.types';

export const mockTools: MCPTool[] = [
  {
    id: 'tool-fs-read',
    name: 'read_file',
    description: 'Read the contents of a file from the filesystem.',
    category: 'filesystem',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'The path to the file.' }
      },
      required: ['path']
    },
    outputSchema: {
      type: 'object',
      properties: {
        content: { type: 'string' }
      }
    },
    enabled: true,
    metadata: {}
  },
  {
    id: 'tool-github-search',
    name: 'search_repositories',
    description: 'Search for repositories on GitHub.',
    category: 'utilities',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string' }
      },
      required: ['query']
    },
    outputSchema: {
      type: 'array'
    },
    enabled: true,
    metadata: {}
  }
];
