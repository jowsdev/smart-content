import React, { type ReactNode } from 'react';
import { theme } from '../../../styles/theme';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Component to show when there is no content to display
 */
const EmptyState: React.FC<EmptyStateProps> = ({ title, description, icon, action, className, style }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xxl,
    textAlign: 'center',
    backgroundColor: theme.colors.background.paper,
    borderRadius: theme.radius.lg,
    border: `2px dashed ${theme.colors.divider}`,
    gap: theme.spacing.md,
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '3rem',
    color: theme.colors.text.secondary,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    maxWidth: '400px',
    margin: 0,
  };

  return (
    <div className={className} style={containerStyle}>
      {icon && <div style={iconStyle}>{icon}</div>}
      <h3 style={titleStyle}>{title}</h3>
      {description && <p style={descriptionStyle}>{description}</p>}
      {action && <div style={{ marginTop: theme.spacing.md }}>{action}</div>}
    </div>
  );
};

export default EmptyState;
