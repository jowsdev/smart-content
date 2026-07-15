import type { KnowledgeType } from '../constants/knowledgeTypes';
import type { Document } from './document.types';

export interface KnowledgeItem {
  id: string;
  name: string;
  description: string;
  type: KnowledgeType;
  collectionId: string;
  projectId?: string;
  scope: string;
  language: string;
  author: string;
  createdAt: number;
  updatedAt: number;
  favorite: boolean;
  tags: string[];
  metadata: Record<string, any>;
  statistics: KnowledgeStatistics;
  documents: Document[];
  status: 'active' | 'archived' | 'processing';
}

export interface KnowledgeStatistics {
  documentCount: number;
  totalSize: number;
  usageCount: number;
  lastUsedAt?: number;
}
