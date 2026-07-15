import type { Collection } from '../types/collection.types';

export const mockCollections: Collection[] = [
  { id: 'col-global', name: 'Global Library', description: 'General knowledge shared across all projects', scope: 'Global', color: '#4F46E5', itemCount: 12 },
  { id: 'col-workspace', name: 'Workspace Assets', description: 'Internal company documents and brand guides', scope: 'Workspace', color: '#10B981', itemCount: 5 },
  { id: 'col-project-01', name: 'Smart Content Launch', description: 'Context specific to the launch campaign', scope: 'Project', color: '#F59E0B', itemCount: 8 },
  { id: 'col-private', name: 'Personal Research', description: 'My private research notes', scope: 'Private', color: '#EC4899', itemCount: 3 }
];
