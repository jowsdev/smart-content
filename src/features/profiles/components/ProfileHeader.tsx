import React from 'react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';
import { SearchInput } from '../../../components/ui/SearchInput';
import { spacing } from '../../../styles/spacing';

interface ProfileHeaderProps {
  onSearch: (query: string) => void;
  onCreateNew: () => void;
  onImport: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  onSearch,
  onCreateNew,
  onImport
}) => {
  return (
    <PageHeader
      title="Agent Profiles"
      description="Manage and configure use-case specific agent profiles for your projects."
      actions={
        <div style={{ display: 'flex', gap: spacing.md, alignItems: 'center' }}>
          <SearchInput
            placeholder="Search profiles..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <Button variant="outline" onClick={onImport}>Import</Button>
          <Button variant="primary" onClick={onCreateNew}>Create Profile</Button>
        </div>
      }
    />
  );
};
