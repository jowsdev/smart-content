export interface Timeline {
  id: string;
  zoom: number;
  scrollLeft: number;
  scrollTop: number;
  currentTimeInFrames: number;
  selection: {
    trackIds: string[];
    clipIds: string[];
  };
  markers: any[];
}
