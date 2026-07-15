export type WorkerType = 'local' | 'remote' | 'gpu' | 'cpu' | 'cloud';

export interface RenderWorker {
  id: string;
  name: string;
  type: WorkerType;
  status: 'online' | 'offline' | 'busy' | 'maintenance';
  capabilities: {
    maxResolution: { width: number; height: number };
    supportedFormats: string[];
    gpuAccelerated: boolean;
    concurrentJobs: number;
  };
  currentJobs: string[]; // Job IDs
  metrics: {
    cpuUsage: number;
    memoryUsage: number;
    gpuUsage?: number;
    temperature?: number;
  };
}
