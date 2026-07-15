export interface PlayerState {
  isPlaying: boolean;
  currentFrame: number;
  fps: number;
  durationInFrames: number;
  volume: number;
  isMuted: boolean;
  playbackSpeed: number;
}

export interface PlayerConfig {
  autoPlay: boolean;
  loop: boolean;
  controls: boolean;
}
