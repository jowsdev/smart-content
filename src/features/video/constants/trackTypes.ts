export type TrackType =
  | 'video'
  | 'audio'
  | 'text'
  | 'image'
  | 'shape'
  | 'caption'
  | 'voice'
  | 'music'
  | 'sfx'
  | 'overlay'
  | 'effect'
  | 'camera'
  | 'custom';

export const TRACK_TYPES: TrackType[] = [
  'video', 'audio', 'text', 'image', 'shape', 'caption', 'voice', 'music', 'sfx', 'overlay', 'effect', 'camera', 'custom'
];
