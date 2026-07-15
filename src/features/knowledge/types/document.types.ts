import type { DocumentFormat } from '../constants/documentFormats';

export interface Document {
  id: string;
  name: string;
  format: DocumentFormat;
  size: number;
  url?: string;
  content?: string;
  author: string;
  createdAt: number;
  metadata: Record<string, any>;
}

export interface DocumentMetadata {
  source?: string;
  version?: string;
  license?: string;
  category?: string;
  language?: string;
  keywords?: string[];
  summary?: string;
}
