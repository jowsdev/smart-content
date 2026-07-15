import type { KnowledgeItem } from '../types/knowledge.types';
import type { KnowledgeType } from '../constants/knowledgeTypes';

export class KnowledgeRegistry {
  private static instance: KnowledgeRegistry;
  private items: Map<string, KnowledgeItem> = new Map();

  private constructor() {}

  public static getInstance(): KnowledgeRegistry {
    if (!KnowledgeRegistry.instance) {
      KnowledgeRegistry.instance = new KnowledgeRegistry();
    }
    return KnowledgeRegistry.instance;
  }

  public register(item: KnowledgeItem): void {
    this.items.set(item.id, item);
  }

  public remove(id: string): void {
    this.items.delete(id);
  }

  public find(id: string): KnowledgeItem | undefined {
    return this.items.get(id);
  }

  public getCollection(id: string): KnowledgeItem | undefined {
    return this.find(id);
  }

  public getAll(): KnowledgeItem[] {
    return Array.from(this.items.values());
  }

  public getAllCollections(): KnowledgeItem[] {
    return this.getAll();
  }

  public findByCollection(collectionId: string): KnowledgeItem[] {
    return this.getAll().filter(item => item.collectionId === collectionId);
  }

  public findByType(type: KnowledgeType): KnowledgeItem[] {
    return this.getAll().filter(item => item.type === type);
  }

  public search(query: string): KnowledgeItem[] {
    const q = query.toLowerCase();
    return this.getAll().filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  public setFavorite(id: string, favorite: boolean): void {
    const item = this.items.get(id);
    if (item) {
      this.items.set(id, { ...item, favorite });
    }
  }

  public archive(id: string): void {
    const item = this.items.get(id);
    if (item) {
      this.items.set(id, { ...item, status: 'archived' });
    }
  }
}

export const knowledgeRegistry = KnowledgeRegistry.getInstance();
