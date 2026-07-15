import { BaseMCPAdapter } from './BaseMCPAdapter';

export class RemoteMCPAdapter extends BaseMCPAdapter {
  async connect(): Promise<boolean> {
    console.log(`[RemoteMCPAdapter] Connecting to remote server ${this.server.name} at ${this.server.url}...`);
    return true;
  }

  async disconnect(): Promise<void> {
    console.log(`[RemoteMCPAdapter] Disconnecting from remote server ${this.server.name}...`);
  }

  async call(method: string, params: any): Promise<any> {
    console.log(`[RemoteMCPAdapter] Remote call ${method} to ${this.server.url}`, params);
    return { success: true };
  }
}
