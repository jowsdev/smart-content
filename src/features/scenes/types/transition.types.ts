export interface Transition {
  id: string;
  type: string;
  duration: number;
  config: Record<string, any>;
}
