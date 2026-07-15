export interface AIResponse {
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
