import { useState, useEffect } from 'react';
import { profileService } from '../services/profile.service';
import type { ProfileSummary } from '../types/profile.types';

export function useProfiles() {
  const [profiles, setProfiles] = useState<ProfileSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const data = await profileService.loadProfiles();
        setProfiles(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load profiles'));
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const refresh = async () => {
    const data = await profileService.loadProfiles();
    setProfiles(data);
  };

  return { profiles, isLoading, error, refresh };
}
