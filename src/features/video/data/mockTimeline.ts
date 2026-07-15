import { Timeline } from '../types/timeline.types';

export const mockTimeline: Timeline = {
  id: 'mock-timeline-1',
  zoom: 1,
  scrollLeft: 0,
  scrollTop: 0,
  currentTimeInFrames: 0,
  selection: {
    trackIds: [],
    clipIds: [],
  },
  markers: [],
};
