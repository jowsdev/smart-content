import type { ProfileCategory } from '../constants/profileCategories';
import type { ProfileSettings, ProfilePermissions } from './profileSettings.types';

export interface Profile {
  id: string;
  name: string;
  description: string;
  category: ProfileCategory;
  icon?: string;
  color?: string;
  version: string;
  status: 'draft' | 'active' | 'archived';
  favorite: boolean;
  createdAt: string;
  updatedAt: string;

  // Associations
  agentIds: string[];
  workflowIds: string[];
  promptIds: string[];
  providerIds: string[];
  modelIds: string[];
  knowledgeCollectionIds: string[];
  templateIds: string[];

  variables: ProfileVariable[];
  settings: ProfileSettings;
  permissions: ProfilePermissions;
  tags: string[];
  metadata: Record<string, any>;
}

export interface ProfileVariable {
  id: string;
  key: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'select';
  defaultValue?: any;
  required: boolean;
  description?: string;
  options?: { label: string; value: any }[];
}

export interface ProfileSummary {
  id: string;
  name: string;
  description: string;
  category: ProfileCategory;
  favorite: boolean;
  agentCount: number;
  workflowCount: number;
  preferredProvider?: string;
  recommendedModel?: string;
  updatedAt: string;
}
