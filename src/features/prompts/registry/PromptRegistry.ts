import type { Prompt } from '../types/prompt.types';

class PromptRegistry {
  private static instance: PromptRegistry;
  private prompts: Map<string, Prompt> = new Map();

  private constructor() {
    this.register({
      id: 'p-professional-tone',
      name: 'Professional Tone',
      description: 'Ensures the output is professional and concise.',
      template: 'Rewrite the following text in a professional tone: {{text}}',
      variables: ['text']
    });
  }

  public static getInstance(): PromptRegistry {
    if (!PromptRegistry.instance) {
      PromptRegistry.instance = new PromptRegistry();
    }
    return PromptRegistry.instance;
  }

  register(prompt: Prompt) {
    this.prompts.set(prompt.id, prompt);
  }

  getPrompt(id: string) {
    return this.prompts.get(id);
  }

  getAllPrompts() {
    return Array.from(this.prompts.values());
  }
}

export const promptRegistry = PromptRegistry.getInstance();
