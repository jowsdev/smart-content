export interface Provider {
  id: string;
  name: string;
  type: 'llm' | 'image' | 'voice' | 'search';
  models: Model[];
}

export interface Model {
  id: string;
  name: string;
  contextWindow: number;
}
