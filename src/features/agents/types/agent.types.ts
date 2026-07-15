import type { AgentCategory } from '../constants/agentCategories';
import type { AgentCapability } from './capability.types';

export interface Agent {
  id: string;
  name: string;
  displayName: string;
  description: string;
  category: AgentCategory;
  icon: string;
  color: string;
  version: string;
  author: string;
  enabled: boolean;
  favorite: boolean;
  tags: string[];
  provider: string;
  recommendedModel: string;
  capabilities: AgentCapability[];
  tools: AgentTool[];
  inputs: AgentInput[];
  outputs: AgentOutput[];
  settings: Record<string, any>;
  permissions: string[];
  metadata: Record<string, any>;
}

export interface AgentTool {
  id: string;
  name: string;
  description: string;
  parameters: Record<string, any>;
}

export interface AgentInput {
  id: string;
  name: string;
  type: string;
  required: boolean;
  defaultValue?: any;
}

export interface AgentOutput {
  id: string;
  name: string;
  type: string;
}
