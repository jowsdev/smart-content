export interface RemotionComposition {
  id: string;
  width: number;
  height: number;
  fps: number;
  durationInFrames: number;
  component: React.ComponentType<any>;
  defaultProps?: any;
}

export interface RemotionSequence {
  from: number;
  durationInFrames: number;
  name: string;
}
