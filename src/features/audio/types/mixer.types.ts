export interface MixerState {
  tracks: Record<string, TrackVolume>;
  masterVolume: number;
  limiter: boolean;
  normalization: boolean;
}

export interface TrackVolume {
  volume: number;
  pan: number;
  mute: boolean;
  solo: boolean;
}
