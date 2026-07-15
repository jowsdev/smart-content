import type { RenderJob } from '../types/renderJob.types';

export interface RendererInfo {
  id: string;
  name: string;
  version: string;
  type: 'local' | 'cloud';
}

export interface BaseRenderer {
  getInfo(): RendererInfo;
  validate(job: RenderJob): Promise<{ valid: boolean; errors?: string[] }>;
  render(job: RenderJob, onProgress: (progress: number) => void): Promise<string>; // Returns output URL
  cancel(jobId: string): Promise<void>;
  estimate(job: RenderJob): Promise<number>; // Estimated duration in ms
}
