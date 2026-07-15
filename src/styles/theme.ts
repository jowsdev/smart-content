import { colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { typography } from './typography';

export const theme = {
  colors,
  spacing,
  radius,
  shadows,
  typography,
  sizes: {
    headerHeight: '64px',
    sidebarWidth: '250px',
  },
} as const;

export type Theme = typeof theme;
