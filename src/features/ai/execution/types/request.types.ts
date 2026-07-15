export interface AIRequest {
  id?: string;
  prompt?: string;
  providerId?: string;
  modelId?: string;
  messages?: any[];
  metadata?: Record<string, any>;
  systemPrompt?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
  stop?: string[];
  tools?: any[];
}
