export interface Easing {
  id: string;
  name: string;
  type: 'function' | 'bezier' | 'spring';
  value: any;
}
