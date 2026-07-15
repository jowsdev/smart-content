import type { RenderStatus } from '../types/renderJob.types';

export const RENDER_STATUS_COLORS: Record<RenderStatus, string> = {
  queued: 'gray',
  preparing: 'blue',
  rendering: 'purple',
  paused: 'yellow',
  completed: 'green',
  failed: 'red',
  canceled: 'orange',
};

export const RENDER_STATUS_LABELS: Record<RenderStatus, string> = {
  queued: 'Queued',
  preparing: 'Preparing...',
  rendering: 'Rendering...',
  paused: 'Paused',
  completed: 'Completed',
  failed: 'Failed',
  canceled: 'Canceled',
};
