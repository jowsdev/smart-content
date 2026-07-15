export const ANIMATABLE_PROPERTIES = [
  'opacity',
  'translateX',
  'translateY',
  'scale',
  'rotate',
  'width',
  'height',
  'borderRadius',
  'color',
  'backgroundColor',
  'borderColor',
  'blur',
  'shadow',
  'letterSpacing',
  'lineHeight',
  'stroke',
  'fill',
  'path',
  'custom'
] as const;

export type AnimatableProperty = typeof ANIMATABLE_PROPERTIES[number];
