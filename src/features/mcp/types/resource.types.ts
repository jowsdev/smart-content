export interface MCPResource {
  id: string;
  uri: string;
  name: string;
  mimeType: string;
  description: string;
  size?: number;
  metadata: Record<string, any>;
}
