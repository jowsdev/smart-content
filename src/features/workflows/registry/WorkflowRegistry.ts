import type { Workflow } from '../types/workflow.types';

class WorkflowRegistry {
  private static instance: WorkflowRegistry;
  private workflows: Map<string, Workflow> = new Map();

  private constructor() {
    // Initial mock workflows
    this.register({
      id: 'wf-blog-post',
      name: 'Standard Blog Post',
      description: 'Research, Outline, Write, and Edit a blog post.',
      steps: []
    });
  }

  public static getInstance(): WorkflowRegistry {
    if (!WorkflowRegistry.instance) {
      WorkflowRegistry.instance = new WorkflowRegistry();
    }
    return WorkflowRegistry.instance;
  }

  register(workflow: Workflow) {
    this.workflows.set(workflow.id, workflow);
  }

  getWorkflow(id: string) {
    return this.workflows.get(id);
  }

  getAllWorkflows() {
    return Array.from(this.workflows.values());
  }
}

export const workflowRegistry = WorkflowRegistry.getInstance();
