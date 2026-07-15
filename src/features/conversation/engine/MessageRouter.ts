import type {
  ConversationAIExecutor,
  ConversationAIRequest,
  ConversationAIResponse,
} from '../ports/AIExecutionPort';

const getPromptFromRequest = (request: ConversationAIRequest): string => {
  if (request.prompt) return request.prompt;

  const lastMessage = request.messages?.at(-1);
  if (lastMessage && typeof lastMessage === 'object' && 'content' in lastMessage) {
    return String(lastMessage.content ?? '');
  }

  return '';
};

class LocalConversationAIExecutor implements ConversationAIExecutor {
  async execute(request: ConversationAIRequest): Promise<ConversationAIResponse> {
    return {
      id: request.id,
      content: `Response to: ${getPromptFromRequest(request)}`,
      model: request.model ?? request.modelId ?? 'smart-content-v1',
      provider: request.providerId,
      createdAt: new Date().toISOString(),
      usage: {
        promptTokens: 10,
        completionTokens: 20,
        totalTokens: 30,
      },
    };
  }

  stream(request: ConversationAIRequest, _handlers: unknown): AsyncGenerator<{ content: string; done: boolean }> {
    return this.executeStream(request);
  }

  private async *executeStream(request: ConversationAIRequest): AsyncGenerator<{ content: string; done: boolean }> {
    const response = `This is a streamed response to: ${getPromptFromRequest(request)}`;

    for (const word of response.split(' ')) {
      yield { content: `${word} `, done: false };
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    yield { content: '', done: true };
  }
}

export class MessageRouter {
  constructor(private readonly aiExecutor: ConversationAIExecutor = new LocalConversationAIExecutor()) {}

  async route(request: ConversationAIRequest) {
    console.log(`[MessageRouter] Routing request ${request.id}`);
    return this.aiExecutor.execute(request);
  }

  async routeStream(request: ConversationAIRequest, handlers: unknown) {
    console.log(`[MessageRouter] Routing streaming request ${request.id}`);
    return this.aiExecutor.stream(request, handlers);
  }
}
