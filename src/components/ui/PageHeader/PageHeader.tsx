import React, { type ReactNode } from 'react';
import { theme } from '../../../styles/theme';

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Header component for pages
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title, description, actions, className, style }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.xl,
    gap: theme.spacing.md,
    ...style,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.h2,
    fontWeight: theme.typography.fontWeight.bold,
    margin: 0,
    color: theme.colors.text.primary,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  };

  return (
    <div className={className} style={containerStyle}>
      <div>
        <h1 style={titleStyle}>{title}</h1>
        {description && <p style={descriptionStyle}>{description}</p>}
      </div>
      {actions && <div style={{ display: 'flex', gap: theme.spacing.sm }}>{actions}</div>}
    </div>
  );
};

export default PageHeader;
