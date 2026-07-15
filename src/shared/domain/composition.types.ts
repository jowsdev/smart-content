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
  scenes: string[];
  tracks: string[];
  audio?: unknown;
  captions?: unknown;
  variables: Record<string, unknown>;
  metadata: Record<string, unknown>;
  status: CompositionStatus;
  createdAt: string;
  updatedAt: string;
}
