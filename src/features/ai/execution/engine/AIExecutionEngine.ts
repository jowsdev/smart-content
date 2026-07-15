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
      content: `Response to: ${request.prompt}`,
      model: request.model || 'smart-content-v1',
      usage: {
        promptTokens: 10,
        completionTokens: 20,
        totalTokens: 30
      }
    };
  }

  public async *executeStream(request: AIRequest): AsyncGenerator<StreamingChunk> {
    const response = `This is a streamed response to: ${request.prompt}`;
    const words = response.split(' ');

    for (const word of words) {
      yield { content: word + ' ', done: false };
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    yield { content: '', done: true };
  }
}

export const aiExecutionEngine = AIExecutionEngine.getInstance();
