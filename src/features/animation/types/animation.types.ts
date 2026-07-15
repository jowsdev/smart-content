export interface Animation {
  id: string;
  name: string;
  target: string;
  property: string;
  startFrame: number;
  endFrame: number;
  duration: number;
  delay?: number;
  loop?: boolean;
  direction?: 'normal' | 'reverse' | 'alternate';
  easing: string;
  keyframes: string[]; // Keyframe IDs
  metadata: Record<string, any>;
}
