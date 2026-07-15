export interface MCPTool {
  id: string;
  name: string;
  description: string;
  category: string;
  inputSchema: Record<string, any>;
  outputSchema: Record<string, any>;
  enabled: boolean;
  metadata: Record<string, any>;
}
