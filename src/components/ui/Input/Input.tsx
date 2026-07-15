import React, { useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

/**
 * Standard text input component
 */
const Input: React.FC<InputProps> = ({ label, helperText, error, style, id, ...props }) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
    width: '100%',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: error ? theme.colors.error.main : theme.colors.text.primary,
  };

  const inputStyle: React.CSSProperties = {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    border: `1px solid ${error ? theme.colors.error.main : theme.colors.divider}`,
    backgroundColor: theme.colors.background.surface,
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.base,
    outline: 'none',
    ...style,
  };

  const helperStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xs,
    color: error ? theme.colors.error.main : theme.colors.text.secondary,
  };

  return (
    <div style={containerStyle}>
      {label && <label htmlFor={inputId} style={labelStyle}>{label}</label>}
      <input id={inputId} style={inputStyle} {...props} />
      {helperText && <span style={helperStyle}>{helperText}</span>}
    </div>
  );
};

export default Input;
