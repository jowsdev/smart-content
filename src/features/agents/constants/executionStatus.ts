export type ExecutionStatus =
  | 'idle'
  | 'pending'
  | 'planning'
  | 'running'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'retrying';

export const EXECUTION_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  PLANNING: 'planning',
  RUNNING: 'running',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  RETRYING: 'retrying',
} as const;
