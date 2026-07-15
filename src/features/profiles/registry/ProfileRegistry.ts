import type { Profile, ProfileSummary } from '../types/profile.types';
import type { ProfileCategory } from '../constants/profileCategories';

class ProfileRegistry {
  private static instance: ProfileRegistry;
  private profiles: Map<string, Profile> = new Map();

  private constructor() {}

  public static getInstance(): ProfileRegistry {
    if (!ProfileRegistry.instance) {
      ProfileRegistry.instance = new ProfileRegistry();
    }
    return ProfileRegistry.instance;
  }

  register(profile: Profile): void {
    this.profiles.set(profile.id, profile);
  }

  update(id: string, updates: Partial<Profile>): void {
    const profile = this.profiles.get(id);
    if (profile) {
      this.profiles.set(id, { ...profile, ...updates, updatedAt: new Date().toISOString() });
    }
  }

  delete(id: string): void {
    this.profiles.delete(id);
  }

  duplicate(id: string): Profile | undefined {
    const profile = this.profiles.get(id);
    if (profile) {
      const newProfile: Profile = {
        ...profile,
        id: `profile-${Date.now()}`,
        name: `${profile.name} (Copy)`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      this.register(newProfile);
      return newProfile;
    }
    return undefined;
  }

  find(id: string): Profile | undefined {
    return this.profiles.get(id);
  }

  findByCategory(category: ProfileCategory): Profile[] {
    return Array.from(this.profiles.values()).filter(p => p.category === category);
  }

  getFavorites(): Profile[] {
    return Array.from(this.profiles.values()).filter(p => p.favorite);
  }

  getAll(): Profile[] {
    return Array.from(this.profiles.values());
  }

  getSummaries(): ProfileSummary[] {
    return Array.from(this.profiles.values()).map(p => ({
      id: p.id,
      name: p.name,
      description: p.description,
      category: p.category,
      favorite: p.favorite,
      agentCount: p.agentIds.length,
      workflowCount: p.workflowIds.length,
      preferredProvider: p.settings.preferredProviderId,
      recommendedModel: p.settings.preferredModelId,
      updatedAt: p.updatedAt
    }));
  }

  export(id: string): string | undefined {
    const profile = this.profiles.get(id);
    return profile ? JSON.stringify(profile, null, 2) : undefined;
  }

  import(data: string): Profile | undefined {
    try {
      const profile = JSON.parse(data) as Profile;
      profile.id = `profile-${Date.now()}`; // Ensure new ID on import
      this.register(profile);
      return profile;
    } catch (e) {
      console.error('Failed to import profile', e);
      return undefined;
    }
  }
}

export const profileRegistry = ProfileRegistry.getInstance();
