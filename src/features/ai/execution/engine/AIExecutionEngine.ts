import { AIRequest } from '../types/request.types';
import { AIResponse } from '../types/response.types';
import { StreamingChunk } from '../types/streaming.types';

export class AIExecutionEngine {
  private static instance: AIExecutionEngine;

  private constructor() {}

  public static getInstance(): AIExecutionEngine {
    if (!AIExecutionEngine.instance) {
      AIExecutionEngine.instance = new AIExecutionEngine();
    }
    return AIExecutionEngine.instance;
  }

  public async execute(request: AIRequest): Promise<AIResponse> {
    // Mock implementation for the shell
    console.log('Executing AI request:', request);
    return {
      id: request.id,
      content: `Response to: ${request.prompt ?? request.messages?.at(-1)?.content ?? ''}`,
      model: request.model || request.modelId || 'smart-content-v1',
      provider: request.providerId,
      createdAt: new Date().toISOString(),
      usage: {
        promptTokens: 10,
        completionTokens: 20,
        totalTokens: 30
      }
    };
  }

  public stream(request: AIRequest, _handlers?: any) {
    return this.executeStream(request);
  }

  public async *executeStream(request: AIRequest): AsyncGenerator<StreamingChunk> {
    const response = `This is a streamed response to: ${request.prompt ?? request.messages?.at(-1)?.content ?? ''}`;
    const words = response.split(' ');

    for (const word of words) {
      yield { content: word + ' ', done: false };
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    yield { content: '', done: true };
  }
}

export const aiExecutionEngine = AIExecutionEngine.getInstance();
