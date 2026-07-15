export const EASING_TYPES = [
  'linear',
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'spring',
  'bounce',
  'elastic',
  'expo',
  'back',
  'circ',
  'custom'
] as const;

export type EasingType = typeof EASING_TYPES[number];
