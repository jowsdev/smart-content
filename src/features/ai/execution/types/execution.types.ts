export type ExecutionStatus = 'idle' | 'running' | 'completed' | 'error';

export interface ExecutionContext {
  id: string;
  startTime: number;
  endTime?: number;
  status: ExecutionStatus;
  error?: string;
}
