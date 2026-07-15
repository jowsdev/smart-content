import React from 'react';
import { theme } from '../../../styles/theme';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Avatar component to represent users
 */
const Avatar: React.FC<AvatarProps> = ({ src, alt, name, size = 'md', className, style }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const normalizedSize = size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : size;

  const sizes = {
    sm: '24px',
    md: '40px',
    lg: '64px',
  };

  const avatarStyle: React.CSSProperties = {
    width: sizes[normalizedSize],
    height: sizes[normalizedSize],
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontSize: normalizedSize === 'sm' ? theme.typography.fontSize.xs : theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.secondary.contrastText,
    ...style,
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={className}
        style={{ ...avatarStyle, objectFit: 'cover' }}
      />
    );
  }

  return (
    <div className={className} style={avatarStyle}>
      {name ? getInitials(name) : '?'}
    </div>
  );
};

export default Avatar;
