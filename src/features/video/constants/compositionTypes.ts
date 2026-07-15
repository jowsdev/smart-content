export const COMPOSITION_PRESETS = {
  YOUTUBE: { width: 1920, height: 1080, fps: 30 },
  TIKTOK: { width: 1080, height: 1920, fps: 30 },
  INSTAGRAM_REELS: { width: 1080, height: 1920, fps: 30 },
  FACEBOOK: { width: 1200, height: 630, fps: 30 },
  LINKEDIN: { width: 1200, height: 1200, fps: 30 },
  SHORTS: { width: 1080, height: 1920, fps: 30 },
  PODCAST: { width: 1080, height: 1080, fps: 30 },
  ADVERTISEMENT: { width: 1920, height: 1080, fps: 30 },
  PRESENTATION: { width: 1920, height: 1080, fps: 30 },
};

export type CompositionPreset = keyof typeof COMPOSITION_PRESETS;
