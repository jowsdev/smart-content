import React from 'react';
import { theme } from '../../../styles/theme';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Spinner component for loading states
 */
const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color, className, style }) => {
  const sizes = {
    sm: '16px',
    md: '32px',
    lg: '48px',
  };

  const spinnerStyle: React.CSSProperties = {
    width: sizes[size],
    height: sizes[size],
    border: `3px solid ${theme.colors.divider}`,
    borderTop: `3px solid ${color || theme.colors.primary.main}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    ...style,
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className={className} style={spinnerStyle} />
    </>
  );
};

export default Spinner;
