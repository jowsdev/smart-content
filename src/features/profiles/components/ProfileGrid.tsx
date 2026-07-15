import React from 'react';
import type { ProfileSummary } from '../types/profile.types';
import { ProfileCard } from './ProfileCard';
import { spacing } from '../../../styles/spacing';

interface ProfileGridProps {
  profiles: ProfileSummary[];
  onOpen: (id: string) => void;
  onDuplicate: (id: string) => void;
  onExport: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ProfileGrid: React.FC<ProfileGridProps> = ({
  profiles,
  onOpen,
  onDuplicate,
  onExport,
  onDelete
}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: spacing.lg,
      padding: spacing.md
    }}>
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onOpen={onOpen}
          onDuplicate={onDuplicate}
          onExport={onExport}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
