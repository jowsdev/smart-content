import type { KnowledgeItem } from '../types/knowledge.types';

export const mockKnowledge: KnowledgeItem[] = [
  {
    id: 'k-01',
    name: 'Main Brand Voice',
    description: 'Guidelines for the official tone and style of Smart Content communications.',
    type: 'Brand Guide',
    collectionId: 'col-workspace',
    scope: 'Workspace',
    language: 'English',
    author: 'Marketing Team',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24,
    favorite: true,
    tags: ['brand', 'style', 'official'],
    metadata: { version: '2.1', author: 'Jane Doe' },
    statistics: { documentCount: 1, totalSize: 1024 * 500, usageCount: 45, lastUsedAt: Date.now() },
    documents: [
      { id: 'doc-01', name: 'Brand_Guidelines_2026.pdf', format: 'PDF', size: 1024 * 500, author: 'Jane Doe', createdAt: Date.now(), metadata: {} }
    ],
    status: 'active'
  },
  {
    id: 'k-02',
    name: 'Competitor Analysis - AI Platforms',
    description: 'Detailed analysis of major players in the AI content generation market.',
    type: 'Research',
    collectionId: 'col-global',
    scope: 'Global',
    language: 'English',
    author: 'Product Strategy',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 15,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    favorite: false,
    tags: ['market', 'ai', 'competitors'],
    metadata: { source: 'Internal Research' },
    statistics: { documentCount: 3, totalSize: 1024 * 2500, usageCount: 12, lastUsedAt: Date.now() },
    documents: [
      { id: 'doc-02', name: 'Market_Landscape.docx', format: 'DOCX', size: 1024 * 800, author: 'Jane Doe', createdAt: Date.now(), metadata: {} },
      { id: 'doc-03', name: 'Comparison_Sheet.csv', format: 'CSV', size: 1024 * 200, author: 'John Smith', createdAt: Date.now(), metadata: {} }
    ],
    status: 'active'
  }
];
