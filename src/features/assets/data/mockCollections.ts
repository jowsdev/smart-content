import { AssetCollection } from '../types/collection.types';

export const mockCollections: AssetCollection[] = [
  {
    id: 'col_1',
    name: 'Brand Assets',
    description: 'Logos, fonts, and colors for the brand.',
    assetIds: ['ast_1'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'col_2',
    name: 'Marketing Campaigns',
    description: 'Resources for current marketing efforts.',
    assetIds: ['ast_2'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];
