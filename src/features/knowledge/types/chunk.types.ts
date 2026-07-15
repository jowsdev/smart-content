export interface Chunk {
  id: string;
  documentId: string;
  knowledgeId: string;
  content: string;
  index: number;
  metadata: Record<string, any>;
  tokens?: number;
}
