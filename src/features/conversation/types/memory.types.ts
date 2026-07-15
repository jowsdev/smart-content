export interface MemoryContext {
  conversationId: string;
  workspaceId?: string;
  projectId?: string;
  globalId?: string;
  knowledgeIds?: string[];
}

export interface MemoryEntry {
  id: string;
  key: string;
  value: any;
  level: 'conversation' | 'workspace' | 'project' | 'global' | 'knowledge';
  timestamp: string;
}
