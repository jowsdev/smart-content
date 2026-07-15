export interface AudioTrack {
  id: string;
  type: 'voice' | 'music' | 'effect' | 'ambience' | 'commentary';
  assetId: string;
  startTime: number;
  endTime: number;
  volume: number;
  mute: boolean;
  solo: boolean;
  effects: any[];
  metadata: Record<string, any>;
}
