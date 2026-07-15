import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';
import type { ProfileSummary } from '../types/profile.types';

interface DuplicateProfileDialogProps {
  profile: ProfileSummary;
  onClose: () => void;
  onDuplicate: (id: string, newName: string) => void;
}

export const DuplicateProfileDialog: React.FC<DuplicateProfileDialogProps> = ({
  profile,
  onClose,
  onDuplicate
}) => {
  const [newName, setNewName] = React.useState(`${profile.name} (Copy)`);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <Card padding="large" style={{ width: 400 }}>
        <h3 style={{ marginTop: 0 }}>Duplicate Profile</h3>
        <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: spacing.md }}>
          Create a copy of <strong>{profile.name}</strong>.
        </p>
        <div style={{ marginBottom: spacing.xl }}>
          <label style={{ display: 'block', marginBottom: spacing.xs, fontSize: '0.875rem' }}>New Profile Name</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ width: '100%', padding: spacing.sm, borderRadius: 4, border: `1px solid ${colors.border.main}`, backgroundColor: colors.background.light, color: colors.text.primary }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: spacing.md }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={() => onDuplicate(profile.id, newName)}>Duplicate</Button>
        </div>
      </Card>
    </div>
  );
};
