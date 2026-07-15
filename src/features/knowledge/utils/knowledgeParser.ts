import type { KnowledgeItem } from '../types/knowledge.types';

export const parseKnowledge = (_input: string): Partial<KnowledgeItem> => {
  return {
    name: 'Parsed Knowledge',
    description: 'Extracted content'
  };
};
