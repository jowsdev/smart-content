import { Asset } from '../types/asset.types';

export const mockAssets: Asset[] = [
  {
    id: 'ast_1',
    name: 'Brand Logo.svg',
    type: 'logo',
    format: 'svg',
    size: 15000,
    checksum: 'abc12345',
    status: 'ready',
    visibility: 'public',
    favorite: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    owner: 'Jules',
    metadata: { width: 512, height: 512 },
    variants: [],
    usage: [],
    permissions: {},
    tags: ['logo', 'brand']
  },
  {
    id: 'ast_2',
    name: 'Promo Video.mp4',
    type: 'video',
    format: 'mp4',
    size: 45000000,
    checksum: 'def67890',
    status: 'ready',
    visibility: 'public',
    favorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    owner: 'Jules',
    metadata: { duration: 30, resolution: '1080p' },
    variants: [],
    usage: [],
    permissions: {},
    tags: ['marketing', 'video']
  }
];
