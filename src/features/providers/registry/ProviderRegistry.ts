import type { Provider } from '../types/provider.types';

class ProviderRegistry {
  private static instance: ProviderRegistry;
  private providers: Map<string, Provider> = new Map();

  private constructor() {
    this.register({
      id: 'openai',
      name: 'OpenAI',
      type: 'llm',
      models: [
        { id: 'gpt-4o', name: 'GPT-4o', contextWindow: 128000 },
        { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', contextWindow: 128000 }
      ]
    });
    this.register({
      id: 'anthropic',
      name: 'Anthropic',
      type: 'llm',
      models: [
        { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', contextWindow: 200000 },
        { id: 'claude-3-opus', name: 'Claude 3 Opus', contextWindow: 200000 }
      ]
    });
  }

  public static getInstance(): ProviderRegistry {
    if (!ProviderRegistry.instance) {
      ProviderRegistry.instance = new ProviderRegistry();
    }
    return ProviderRegistry.instance;
  }

  register(provider: Provider) {
    this.providers.set(provider.id, provider);
  }

  getProvider(id: string) {
    return this.providers.get(id);
  }

  getAllProviders() {
    return Array.from(this.providers.values());
  }
}

export const providerRegistry = ProviderRegistry.getInstance();
