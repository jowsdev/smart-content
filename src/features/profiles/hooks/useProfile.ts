import { useState, useEffect } from 'react';
import { profileService } from '../services/profile.service';
import type { Profile } from '../types/profile.types';

export function useProfile(id: string | undefined) {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    async function load() {
      try {
        setIsLoading(true);
        const data = await profileService.getProfile(id);
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load profile'));
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [id]);

  const save = async (updatedProfile: Profile) => {
    await profileService.saveProfile(updatedProfile);
    setProfile(updatedProfile);
  };

  return { profile, isLoading, error, save };
}
