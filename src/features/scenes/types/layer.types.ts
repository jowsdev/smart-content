export type LayerType =
  | 'text' | 'image' | 'video' | 'audio' | 'shape'
  | 'chart' | 'map' | 'code' | 'svg' | 'lottie'
  | 'caption' | 'voice' | 'music' | 'logo' | 'custom';

export interface Layer {
  id: string;
  type: LayerType;
  name: string;
  visible: boolean;
  locked: boolean;
  startFrame: number;
  endFrame: number;
  zIndex: number;
  properties: Record<string, any>;
  animations: string[]; // Animation IDs
  assetId?: string;
  metadata: Record<string, any>;
}
