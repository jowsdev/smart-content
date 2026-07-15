import { RendererAdapter } from '../adapters/RendererAdapter';
import { RenderJob, RenderSettings } from '../types/render.types';

export class RenderManager {
  private adapter: RendererAdapter;
  private activeJobs: Map<string, RenderJob> = new Map();

  constructor() {
    this.adapter = new RendererAdapter();
  }

  public async startRender(compositionId: string, settings: RenderSettings): Promise<RenderJob> {
    const jobId = await this.adapter.render(compositionId, settings);
    const job: RenderJob = {
      id: jobId,
      compositionId,
      status: 'rendering',
      progress: 0,
      startTime: Date.now(),
    };
    this.activeJobs.set(jobId, job);
    return job;
  }

  public cancelRender(jobId: string) {
    this.adapter.cancel(jobId);
    const job = this.activeJobs.get(jobId);
    if (job) {
      job.status = 'canceled';
    }
  }

  public getJob(jobId: string) {
    return this.activeJobs.get(jobId);
  }
}
