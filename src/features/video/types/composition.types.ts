export type CompositionStatus = 'draft' | 'ready' | 'rendering' | 'completed' | 'failed';

export interface Composition {
  id: string;
  projectId: string;
  name: string;
  description?: string;
  width: number;
  height: number;
  fps: number;
  durationInFrames: number;
  background?: string;
  scenes: string[]; // Scene IDs
  tracks: string[]; // Track IDs
  audio?: any;
  captions?: any;
  variables: Record<string, any>;
  metadata: Record<string, any>;
  status: CompositionStatus;
  createdAt: string;
  updatedAt: string;
}
