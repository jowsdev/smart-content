import { TrackType } from '../constants/trackTypes';

export interface Track {
  id: string;
  name: string;
  type: TrackType;
  index: number;
  isHidden: boolean;
  isLocked: boolean;
  clips: Clip[];
}

export interface Clip {
  id: string;
  trackId: string;
  startFrame: number;
  durationInFrames: number;
  assetId: string;
  type: TrackType;
}
