export type RenderStatus = 'queued' | 'rendering' | 'completed' | 'failed' | 'canceled';

export class RenderQueue {
  private queue: any[] = [];

  public add(job: any) {
    this.queue.push({ ...job, status: 'queued' });
    console.log('Job added to render queue');
  }

  public getJobs() {
    return this.queue;
  }
}
