import type { ExecutionStatus } from '../constants/executionStatus';

export interface AgentExecution {
  id: string;
  agentId: string;
  status: ExecutionStatus;
  startTime: number;
  endTime?: number;
  duration?: number;
  input: any;
  output?: any;
  error?: string;
  logs: AgentLog[];
  projectId?: string;
  workflowId?: string;
}

export interface AgentLog {
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  data?: any;
}

export interface ExecutionPlan {
  id: string;
  agentId: string;
  steps: ExecutionStep[];
}

export interface ExecutionStep {
  id: string;
  name: string;
  description: string;
}
