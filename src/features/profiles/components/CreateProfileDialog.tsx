import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';
import { PROFILE_CATEGORIES } from '../constants/profileCategories';

interface CreateProfileDialogProps {
  onClose: () => void;
  onCreate: (name: string, category: string) => void;
}

export const CreateProfileDialog: React.FC<CreateProfileDialogProps> = ({
  onClose,
  onCreate
}) => {
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
        <h3 style={{ marginTop: 0 }}>Create New Profile</h3>
        <div style={{ display: 'grid', gap: spacing.md, marginBottom: spacing.xl }}>
          <div>
            <label style={{ display: 'block', marginBottom: spacing.xs, fontSize: '0.875rem' }}>Profile Name</label>
            <input
              type="text"
              placeholder="e.g. Technical Documentation Expert"
              style={{ width: '100%', padding: spacing.sm, borderRadius: 4, border: `1px solid ${colors.border.main}`, backgroundColor: colors.background.light, color: colors.text.primary }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: spacing.xs, fontSize: '0.875rem' }}>Category</label>
            <select style={{ width: '100%', padding: spacing.sm, borderRadius: 4, border: `1px solid ${colors.border.main}`, backgroundColor: colors.background.light, color: colors.text.primary }}>
              {PROFILE_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: spacing.md }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={() => onCreate('New Profile', 'Custom')}>Create</Button>
        </div>
      </Card>
    </div>
  );
};
