export type RenderStatus = 'queued' | 'preparing' | 'rendering' | 'paused' | 'completed' | 'failed' | 'canceled';

export type Resolution = {
  width: number;
  height: number;
  label: string;
};

export interface RenderJob {
  id: string;
  projectId: string;
  compositionId: string;
  templateId?: string;
  renderer: string; // ID of the renderer from registry
  status: RenderStatus;
  priority: number;
  progress: number;
  startedAt?: string;
  completedAt?: string;
  estimatedDuration?: number;
  outputFormat: string;
  resolution: Resolution;
  fps: number;
  quality: 'draft' | 'standard' | 'high' | 'ultra';
  metadata: Record<string, any>;
  error?: string;
  logs: string[];
}
