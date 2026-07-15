export interface Keyframe {
  id: string;
  frame: number;
  value: any;
  interpolation: 'linear' | 'bezier' | 'step';
  easing?: string;
  metadata?: Record<string, any>;
}
