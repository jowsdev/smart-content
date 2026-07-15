import type { ExportFormat } from '../types/export.types';
import type { Resolution as JobResolution } from '../types/renderJob.types';

export const EXPORT_FORMATS: ExportFormat[] = [
  'MP4',
  'MOV',
  'WEBM',
  'GIF',
  'PNG_SEQUENCE',
  'JPEG_SEQUENCE',
  'AUDIO_ONLY',
  'JSON',
];

export const COMMON_RESOLUTIONS: JobResolution[] = [
  { width: 854, height: 480, label: '480p' },
  { width: 1280, height: 720, label: '720p' },
  { width: 1920, height: 1080, label: '1080p' },
  { width: 2560, height: 1440, label: '1440p' },
  { width: 3840, height: 2160, label: '4K' },
  { width: 7680, height: 4320, label: '8K' },
];
