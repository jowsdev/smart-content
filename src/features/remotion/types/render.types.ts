export type RenderStatus = 'idle' | 'rendering' | 'completed' | 'failed' | 'canceled';

export interface RenderJob {
  id: string;
  compositionId: string;
  status: RenderStatus;
  progress: number;
  outputUrl?: string;
  error?: string;
  startTime?: number;
  endTime?: number;
}

export interface RenderSettings {
  format: 'mp4' | 'webm' | 'gif';
  codec: string;
  quality: number;
  scale: number;
}
