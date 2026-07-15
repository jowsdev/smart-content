import type { Profile } from '../types/profile.types';

export const exportProfileToJson = (profile: Profile): string => {
  return JSON.stringify(profile, null, 2);
};

export const downloadProfile = (profile: Profile): void => {
  const data = exportProfileToJson(profile);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${profile.name.toLowerCase().replace(/\s+/g, '-')}-profile.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
