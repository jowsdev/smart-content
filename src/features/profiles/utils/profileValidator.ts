import type { Profile } from '../types/profile.types';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateProfile = (profile: Profile): ValidationResult => {
  const errors: string[] = [];

  if (!profile.name.trim()) {
    errors.push('Profile name is required.');
  }

  if (profile.agentIds.length === 0) {
    errors.push('At least one agent must be assigned.');
  }

  if (profile.workflowIds.length === 0) {
    errors.push('At least one workflow must be assigned.');
  }

  if (!profile.settings.preferredProviderId) {
    errors.push('A preferred provider is required.');
  }

  if (!profile.settings.preferredModelId) {
    errors.push('A preferred model is required.');
  }

  // Check required variables
  const missingVariables = profile.variables
    .filter(v => v.required && (v.defaultValue === undefined || v.defaultValue === ''))
    .map(v => v.label);

  if (missingVariables.length > 0) {
    errors.push(`Missing required variables: ${missingVariables.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
