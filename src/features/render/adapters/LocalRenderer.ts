import type { BaseRenderer, RendererInfo } from './BaseRenderer';
import type { RenderJob } from '../types/renderJob.types';

export class LocalRenderer implements BaseRenderer {
  public getInfo(): RendererInfo {
    return {
      id: 'local-remotion-renderer',
      name: 'Local Remotion Renderer',
      version: '1.0.0',
      type: 'local',
    };
  }

  public async validate(_job: RenderJob): Promise<{ valid: boolean; errors?: string[] }> {
    return { valid: true };
  }

  public async render(job: RenderJob, onProgress: (progress: number) => void): Promise<string> {
    // Simulate render progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      onProgress(i);
    }
    return `file:///tmp/render-${job.id}.${job.outputFormat.toLowerCase()}`;
  }

  public async cancel(jobId: string): Promise<void> {
    console.log(`Canceled local render: ${jobId}`);
  }

  public async estimate(_job: RenderJob): Promise<number> {
    return 30000; // 30 seconds
  }
}
