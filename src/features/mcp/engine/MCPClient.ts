import type { MCPServer } from '../types/server.types';

export class MCPClient {
  constructor(public readonly server: MCPServer) {}

  async connect(): Promise<boolean> {
    console.log(`[MCPClient] Connecting to ${this.server.name} via ${this.server.transport}...`);
    return new Promise(resolve => setTimeout(() => resolve(true), 500));
  }

  async disconnect(): Promise<void> {
    console.log(`[MCPClient] Disconnecting from ${this.server.name}...`);
  }

  async call(method: string, params: any): Promise<any> {
    console.log(`[MCPClient] Calling ${method} on ${this.server.name}`, params);
    return { success: true };
  }
}
