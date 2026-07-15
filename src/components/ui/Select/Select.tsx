import React, { useId, type SelectHTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  helperText?: string;
  error?: boolean;
  placeholder?: string;
}

/**
 * Standard dropdown selection component
 */
const Select: React.FC<SelectProps> = ({ options, label, helperText, error, style, id, placeholder, ...props }) => {
  const generatedId = useId();
  const selectId = id || generatedId;

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

  const selectStyle: React.CSSProperties = {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    border: `1px solid ${error ? theme.colors.error.main : theme.colors.divider}`,
    backgroundColor: theme.colors.background.surface,
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.base,
    outline: 'none',
    appearance: 'none',
    ...style,
  };

  const helperStyle: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xs,
    color: error ? theme.colors.error.main : theme.colors.text.secondary,
  };

  return (
    <div style={containerStyle}>
      {label && <label htmlFor={selectId} style={labelStyle}>{label}</label>}
      <select id={selectId} style={selectStyle} {...props}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <span style={helperStyle}>{helperText}</span>}
    </div>
  );
};

export default Select;
