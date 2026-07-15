export const CAPTION_FORMATS = ['SRT', 'VTT', 'ASS', 'SSA', 'JSON', 'Remotion'] as const;
export type CaptionFormat = typeof CAPTION_FORMATS[number];
