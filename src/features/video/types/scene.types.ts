export interface Scene {
  id: string;
  title: string;
  durationInFrames: number;
  background?: string;
  layers: any[];
  transitions: any[];
  animations: any[];
  audio?: any;
  subtitles?: any;
  notes?: string;
}
