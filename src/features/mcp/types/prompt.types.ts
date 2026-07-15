export interface MCPPrompt {
  id: string;
  name: string;
  description: string;
  arguments: MCPPromptArgument[];
  messages: any[];
  metadata: Record<string, any>;
}

export interface MCPPromptArgument {
  name: string;
  description: string;
  required: boolean;
}
