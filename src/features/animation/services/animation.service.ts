import { Animation } from '../types/animation.types';

export const animationService = {
  createAnimation: async (data: Partial<Animation>): Promise<Animation> => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      name: 'Untitled Animation',
      target: 'none',
      property: 'opacity',
      startFrame: 0,
      endFrame: 60,
      duration: 60,
      easing: 'linear',
      keyframes: [],
      metadata: {},
      ...data,
    } as Animation;
  }
};
