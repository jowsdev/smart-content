import { useState } from 'react';
import type { KnowledgeItem } from '../types/knowledge.types';
import * as knowledgeService from '../services/knowledge.service';

export const useKnowledgeSearch = () => {
  const [searchResults, setSearchResults] = useState<KnowledgeItem[]>([]);
  const [searching, setSearching] = useState(false);

  const search = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    try {
      const results = await knowledgeService.searchKnowledge(query);
      setSearchResults(results);
    } finally {
      setSearching(false);
    }
  };

  return { search, searchResults, searching };
};
