import { useState, useEffect } from 'react';
import type { KnowledgeItem } from '../types/knowledge.types';
import * as knowledgeService from '../services/knowledge.service';

export const useKnowledge = (collectionId?: string) => {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchKnowledge = async () => {
      setLoading(true);
      try {
        const data = await knowledgeService.loadKnowledge(collectionId);
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load knowledge'));
      } finally {
        setLoading(false);
      }
    };

    fetchKnowledge();
  }, [collectionId]);

  return { items, loading, error, refresh: () => knowledgeService.loadKnowledge(collectionId) };
};
