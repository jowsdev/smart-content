import { profileRegistry } from '../registry/ProfileRegistry';
import type { Profile, ProfileSummary } from '../types/profile.types';

export const profileService = {
  async loadProfiles(): Promise<ProfileSummary[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileRegistry.getSummaries());
      }, 500);
    });
  },

  async getProfile(id: string): Promise<Profile | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileRegistry.find(id));
      }, 300);
    });
  },

  async saveProfile(profile: Profile): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        profileRegistry.register(profile);
        resolve();
      }, 500);
    });
  },

  async duplicateProfile(id: string): Promise<Profile | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileRegistry.duplicate(id));
      }, 500);
    });
  },

  async deleteProfile(id: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        profileRegistry.delete(id);
        resolve();
      }, 500);
    });
  },

  async exportProfile(id: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileRegistry.export(id));
      }, 300);
    });
  },

  async importProfile(data: string): Promise<Profile | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileRegistry.import(data));
      }, 500);
    });
  }
};
