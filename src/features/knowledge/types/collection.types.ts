export type CollectionScope = 'Global' | 'Workspace' | 'Project' | 'Private' | 'Shared' | 'Archive';

export interface Collection {
  id: string;
  name: string;
  description: string;
  scope: CollectionScope;
  color: string;
  itemCount: number;
}
