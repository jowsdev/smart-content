export type AnimationType = 'in' | 'out' | 'loop' | 'custom';

export interface Animation {
  id: string;
  type: AnimationType;
  name: string;
  durationInFrames: number;
  properties: Record<string, any>;
}
