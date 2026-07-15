export interface SceneVariable {
  id: string;
  name: string;
  type: 'text' | 'image' | 'color' | 'number';
  defaultValue: any;
}
