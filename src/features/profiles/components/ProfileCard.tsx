import React from 'react';
import type { ProfileSummary } from '../types/profile.types';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface ProfileCardProps {
  profile: ProfileSummary;
  onOpen: (id: string) => void;
  onDuplicate: (id: string) => void;
  onExport: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onOpen,
  onDuplicate,
  onExport: _onExport,
  onDelete
}) => {
  return (
    <Card padding="large" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.sm }}>
        <Badge variant="outline">{profile.category}</Badge>
        {profile.favorite && <span title="Favorite" style={{ color: colors.warning.main }}>★</span>}
      </div>

      <h3 style={{ margin: `0 0 ${spacing.xs} 0`, color: colors.text.primary }}>{profile.name}</h3>
      <p style={{
        margin: `0 0 ${spacing.md} 0`,
        color: colors.text.secondary,
        fontSize: '0.875rem',
        flexGrow: 1
      }}>
        {profile.description}
      </p>

      <div style={{ display: 'flex', gap: spacing.sm, marginBottom: spacing.md, flexWrap: 'wrap' }}>
        <Badge variant="secondary">{profile.agentCount} Agents</Badge>
        <Badge variant="secondary">{profile.workflowCount} Workflows</Badge>
        {profile.preferredProvider && <Badge variant="primary">{profile.preferredProvider}</Badge>}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: spacing.md,
        borderTop: `1px solid ${colors.border.light}`
      }}>
        <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>
          Updated: {new Date(profile.updatedAt).toLocaleDateString()}
        </div>
        <div style={{ display: 'flex', gap: spacing.xs }}>
          <Button variant="ghost" size="small" onClick={() => onOpen(profile.id)}>Open</Button>
          <Button variant="ghost" size="small" onClick={() => onDuplicate(profile.id)}>Dup</Button>
          <Button variant="ghost" size="small" onClick={() => onDelete(profile.id)}>Del</Button>
        </div>
      </div>
    </Card>
  );
};
