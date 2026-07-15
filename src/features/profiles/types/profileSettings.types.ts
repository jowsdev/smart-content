export interface ProfileSettings {
  defaultLanguage: string;
  tone: string;
  audience: string;
  preferredProviderId?: string;
  preferredModelId?: string;
  defaultWorkflowId?: string;
  defaultTemplateId?: string;
  autoSave: boolean;
  autoVersioning: boolean;
  outputFormat: 'markdown' | 'html' | 'text' | 'json';
}

export interface ProfilePermissions {
  canEdit: boolean;
  canShare: boolean;
  canDelete: boolean;
}
