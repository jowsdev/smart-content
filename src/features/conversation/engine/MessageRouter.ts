import { aiExecutionEngine } from '../../ai';
import type { AIRequest } from '../../ai';

export class MessageRouter {
  async route(request: AIRequest) {
    // Logic for deciding how to handle the message (e.g., direct LLM, workflow, tool use)
    // For now, it delegates to the AI Execution Engine
    console.log(`[MessageRouter] Routing request ${request.id}`);
    return aiExecutionEngine.execute(request);
  }

  async routeStream(request: AIRequest, handlers: any) {
    console.log(`[MessageRouter] Routing streaming request ${request.id}`);
    return aiExecutionEngine.stream(request, handlers);
  }
}
