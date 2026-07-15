import React, { type ReactNode } from 'react';
import { theme } from '../../../styles/theme';

export type BadgeVariant = 'success' | 'warning' | 'info' | 'error' | 'default';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Badge component for labels and statuses
 */
const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className, style }) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'success':
        return { backgroundColor: theme.colors.success.main, color: theme.colors.success.contrastText };
      case 'warning':
        return { backgroundColor: theme.colors.warning.main, color: theme.colors.warning.contrastText };
      case 'info':
        return { backgroundColor: theme.colors.info.main, color: theme.colors.info.contrastText };
      case 'error':
        return { backgroundColor: theme.colors.error.main, color: theme.colors.error.contrastText };
      default:
        return { backgroundColor: theme.colors.secondary.main, color: theme.colors.secondary.contrastText };
    }
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.full,
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.bold,
    ...getVariantStyles(),
    ...style,
  };

  return (
    <span className={className} style={badgeStyle}>
      {children}
    </span>
  );
};

export default Badge;
