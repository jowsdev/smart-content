import React from 'react';
import type { Profile } from '../types/profile.types';
import { Card } from '../../../components/ui/Card';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface ProfileSidebarProps {
  profile: Profile;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  profile,
  activeSection,
  onSectionChange
}) => {
  const sections = [
    { id: 'general', label: 'General Info' },
    { id: 'agents', label: 'Agents' },
    { id: 'workflows', label: 'Workflows' },
    { id: 'prompts', label: 'Prompts' },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'templates', label: 'Templates' },
    { id: 'providers', label: 'Providers & Models' },
    { id: 'variables', label: 'Variables' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <Card padding="none" style={{ width: 250, height: 'fit-content' }}>
      <div style={{ padding: spacing.md, borderBottom: `1px solid ${colors.border.light}` }}>
        <h4 style={{ margin: 0 }}>Editor</h4>
        <p style={{ margin: 0, fontSize: '0.75rem', color: colors.text.muted }}>{profile.name}</p>
      </div>
      <nav style={{ padding: spacing.xs }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: `${spacing.sm} ${spacing.md}`,
              backgroundColor: activeSection === section.id ? colors.primary.light + '22' : 'transparent',
              color: activeSection === section.id ? colors.primary.main : colors.text.primary,
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: activeSection === section.id ? 600 : 400,
              fontSize: '0.875rem'
            }}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </Card>
  );
};
