import type { RenderJob } from './renderJob.types';

export interface RenderQueue {
  id: string;
  jobs: RenderJob[];
  status: 'idle' | 'processing' | 'paused' | 'draining';
  workers: string[]; // Worker IDs
  statistics: {
    totalJobs: number;
    completedJobs: number;
    failedJobs: number;
    averageRenderTime: number;
    totalRenderTime: number;
  };
  metadata: Record<string, any>;
}
