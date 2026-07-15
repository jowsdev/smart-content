export interface MCPExecutionRequest {
  serverId: string;
  toolId: string;
  arguments: Record<string, any>;
}

export interface MCPExecutionResponse {
  success: boolean;
  result?: any;
  error?: string;
  timestamp: string;
  duration: number;
}

export interface MCPLog {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  serverId?: string;
  metadata?: Record<string, any>;
}
