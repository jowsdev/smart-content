import React from 'react';
import { type ButtonProps } from './Button.types';
import { theme } from '../../../styles/theme';
import { Spinner } from '../Spinner';

/**
 * Button component for user actions
 *
 * Supports various variants, sizes, and states like loading.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  danger = false,
  startIcon,
  endIcon,
  className,
  disabled,
  style,
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  const normalizedSize = size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : size;
  const normalizedVariant = danger ? 'danger' : variant;

  // Simplified style mapping using theme tokens
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    borderRadius: theme.radius.md,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.6 : 1,
    transition: 'all 0.2s ease',
    border: '1px solid transparent',
    width: fullWidth ? '100%' : 'auto',
    ...style,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: `${theme.spacing.xs} ${theme.spacing.sm}`, fontSize: theme.typography.fontSize.xs },
    md: { padding: `${theme.spacing.sm} ${theme.spacing.md}`, fontSize: theme.typography.fontSize.sm },
    lg: { padding: `${theme.spacing.md} ${theme.spacing.xl}`, fontSize: theme.typography.fontSize.base },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.primary.contrastText,
    },
    secondary: {
      backgroundColor: theme.colors.secondary.main,
      color: theme.colors.secondary.contrastText,
    },
    outline: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.colors.divider}`,
      color: theme.colors.text.primary,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors.text.primary,
    },
    danger: {
      backgroundColor: theme.colors.error.main,
      color: theme.colors.error.contrastText,
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[normalizedSize],
    ...variantStyles[normalizedVariant],
  };

  return (
    <button
      className={className}
      disabled={isDisabled}
      style={combinedStyles}
      {...props}
    >
      {isLoading && (
        <Spinner
          size="sm"
          color={normalizedVariant === 'outline' || normalizedVariant === 'ghost' ? theme.colors.primary.main : 'white'}
          style={{ marginRight: theme.spacing.xs }}
        />
      )}
      {!isLoading && startIcon && <span style={{ display: 'flex' }}>{startIcon}</span>}
      {children}
      {!isLoading && endIcon && <span style={{ display: 'flex' }}>{endIcon}</span>}
    </button>
  );
};

export default Button;
