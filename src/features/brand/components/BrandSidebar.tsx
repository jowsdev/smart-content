import React from 'react';
import { Card } from '../../../components/ui/Card';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface BrandSidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export const BrandSidebar: React.FC<BrandSidebarProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'identity', label: 'Identity & Voice' },
    { id: 'audience', label: 'Audience' },
    { id: 'products', label: 'Products & Services' },
    { id: 'variables', label: 'Global Variables' },
    { id: 'assets', label: 'Assets' },
    { id: 'seo', label: 'SEO' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'preview', label: 'Context Preview' },
  ];

  return (
    <Card padding="none" style={{ height: 'fit-content', position: 'sticky', top: 0 }}>
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
