import React from 'react';
import { theme } from '../../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, header, footer, className, style, onClick }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.colors.background.paper,
    borderRadius: theme.radius.lg,
    border: `1px solid ${theme.colors.divider}`,
    overflow: 'hidden',
    boxShadow: theme.shadows.md,
    ...style,
  };

  const sectionStyle: React.CSSProperties = {
    padding: theme.spacing.md,
  };

  const headerStyle: React.CSSProperties = {
    ...sectionStyle,
    borderBottom: `1px solid ${theme.colors.divider}`,
    fontWeight: theme.typography.fontWeight.bold,
  };

  const footerStyle: React.CSSProperties = {
    ...sectionStyle,
    borderTop: `1px solid ${theme.colors.divider}`,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className={className} style={cardStyle} onClick={onClick}>
      {header && <div style={headerStyle}>{header}</div>}
      <div style={sectionStyle}>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};

export default Card;
