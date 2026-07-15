export type MCPTransportType = 'stdio' | 'http' | 'https' | 'websocket' | 'sse' | 'custom';
export type MCPServerStatus = 'connected' | 'disconnected' | 'connecting' | 'error' | 'disabled';

export interface MCPServer {
  id: string;
  name: string;
  description: string;
  transport: MCPTransportType;
  status: MCPServerStatus;
  enabled: boolean;
  version: string;
  author?: string;
  icon?: string;
  url: string;
  capabilities: MCPCapabilities;
  tools: string[]; // IDs of tools
  resources: string[]; // IDs of resources
  prompts: string[]; // IDs of prompts
  settings: Record<string, any>;
  metadata: Record<string, any>;
}

export interface MCPCapabilities {
  tools?: boolean;
  resources?: boolean;
  prompts?: boolean;
  sampling?: boolean;
  roots?: boolean;
  logging?: boolean;
  notifications?: boolean;
  streaming?: boolean;
}
