export interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  id: string;
  agentId?: string;
  action: string;
  params: Record<string, any>;
}
