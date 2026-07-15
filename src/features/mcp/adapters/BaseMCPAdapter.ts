import type { MCPServer } from '../types/server.types';

export abstract class BaseMCPAdapter {
  constructor(protected server: MCPServer) {}

  abstract connect(): Promise<boolean>;
  abstract disconnect(): Promise<void>;
  abstract call(method: string, params: any): Promise<any>;
}
