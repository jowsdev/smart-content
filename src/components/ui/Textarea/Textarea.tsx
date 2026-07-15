import React, { type TextareaHTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

/**
 * Multi-line text input component
 */
const Textarea: React.FC<TextareaProps> = ({ label, helperText, error, style, ...props }) => {
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

  const textareaStyle: React.CSSProperties = {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    border: `1px solid ${error ? theme.colors.error.main : theme.colors.divider}`,
    backgroundColor: theme.colors.background.surface,
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.base,
    minHeight: '100px',
    outline: 'none',
    resize: 'vertical',
    ...style,
  };

  const helperStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xs,
    color: error ? theme.colors.error.main : theme.colors.text.secondary,
  };

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <textarea style={textareaStyle} {...props} />
      {helperText && <span style={helperStyle}>{helperText}</span>}
    </div>
  );
};

export default Textarea;
