import { BaseMCPAdapter } from './BaseMCPAdapter';

export class LocalMCPAdapter extends BaseMCPAdapter {
  async connect(): Promise<boolean> {
    console.log(`[LocalMCPAdapter] Connecting to local server ${this.server.name} via stdio...`);
    return true;
  }

  async disconnect(): Promise<void> {
    console.log(`[LocalMCPAdapter] Disconnecting from local server ${this.server.name}...`);
  }

  async call(method: string, params: any): Promise<any> {
    console.log(`[LocalMCPAdapter] Local call ${method}`, params);
    return { success: true };
  }
}
