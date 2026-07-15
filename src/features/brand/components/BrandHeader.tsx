import React from 'react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';

interface BrandHeaderProps {
  onCreate: () => void;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({ onCreate }) => {
  return (
    <PageHeader
      title="Brand Kits"
      description="Manage identities, voice guidelines, and global variables for all your brands."
      actions={<Button variant="primary" onClick={onCreate}>+ Create Brand</Button>}
    />
  );
};
