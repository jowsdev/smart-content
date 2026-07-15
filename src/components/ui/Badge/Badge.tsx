import React, { type ReactNode } from 'react';
import { theme } from '../../../styles/theme';

export type BadgeVariant = 'success' | 'warning' | 'info' | 'error' | 'default' | 'primary' | 'secondary' | 'outline';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
}

/**
 * Badge component for labels and statuses
 */
const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className, style, size = 'md' }) => {
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
      case 'primary':
        return { backgroundColor: theme.colors.primary.main, color: theme.colors.primary.contrastText };
      case 'secondary':
        return { backgroundColor: theme.colors.secondary.main, color: theme.colors.secondary.contrastText };
      case 'outline':
        return { backgroundColor: 'transparent', color: theme.colors.text.primary, border: `1px solid ${theme.colors.divider}` };
      default:
        return { backgroundColor: theme.colors.secondary.main, color: theme.colors.secondary.contrastText };
    }
  };

  const normalizedSize = size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : size;
  const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
    sm: { fontSize: theme.typography.fontSize.xs, padding: `${theme.spacing.xs} ${theme.spacing.sm}` },
    md: { fontSize: theme.typography.fontSize.xs, padding: `${theme.spacing.xs} ${theme.spacing.sm}` },
    lg: { fontSize: theme.typography.fontSize.sm, padding: `${theme.spacing.sm} ${theme.spacing.md}` },
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    ...sizeStyles[normalizedSize],
    borderRadius: theme.radius.full,
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
