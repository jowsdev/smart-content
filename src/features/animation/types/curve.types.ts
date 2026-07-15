export interface Curve {
  id: string;
  points: { x: number; y: number }[];
  type: 'bezier' | 'cubic' | 'linear';
}
