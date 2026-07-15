export interface ConversationAIRequest {
  id?: string;
  prompt?: string;
  providerId?: string;
  modelId?: string;
  messages?: unknown[];
  metadata?: Record<string, unknown>;
  systemPrompt?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
}

export interface ConversationAIResponse {
  id?: string;
  content: string;
  model: string;
  provider?: string;
  createdAt?: string;
  cost?: number;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  finishReason?: string;
}

export interface ConversationAIExecutor {
  execute(request: ConversationAIRequest): Promise<ConversationAIResponse>;
  stream(request: ConversationAIRequest, handlers: unknown): unknown;
}
