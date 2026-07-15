import type { KnowledgeItem } from '../types/knowledge.types';
import { knowledgeRegistry } from '../registry/KnowledgeRegistry';
import { mockKnowledge } from '../data/mockKnowledge';

export const loadKnowledge = async (collectionId?: string): Promise<KnowledgeItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  if (knowledgeRegistry.getAll().length === 0) {
    mockKnowledge.forEach(item => knowledgeRegistry.register(item));
  }

  return collectionId
    ? knowledgeRegistry.findByCollection(collectionId)
    : knowledgeRegistry.getAll();
};

export const saveKnowledge = async (item: KnowledgeItem): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  knowledgeRegistry.register(item);
};

export const deleteKnowledge = async (id: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  knowledgeRegistry.remove(id);
};

export const duplicateKnowledge = async (id: string): Promise<KnowledgeItem | undefined> => {
  const original = knowledgeRegistry.find(id);
  if (!original) return undefined;

  const duplicate: KnowledgeItem = {
    ...original,
    id: `k-${Math.random().toString(36).substr(2, 9)}`,
    name: `${original.name} (Copy)`,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  knowledgeRegistry.register(duplicate);
  return duplicate;
};

export const searchKnowledge = async (query: string): Promise<KnowledgeItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return knowledgeRegistry.search(query);
};
