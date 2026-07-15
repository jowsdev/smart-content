import { RenderJob } from '../types/render.types';

export class RenderQueue {
  private queue: RenderJob[] = [];

  public push(job: RenderJob) {
    this.queue.push(job);
  }

  public remove(jobId: string) {
    this.queue = this.queue.filter(j => j.id !== jobId);
  }

  public getAll() {
    return this.queue;
  }
}
