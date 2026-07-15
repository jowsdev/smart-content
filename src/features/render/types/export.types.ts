export type ExportFormat =
  | 'MP4'
  | 'MOV'
  | 'WEBM'
  | 'GIF'
  | 'PNG_SEQUENCE'
  | 'JPEG_SEQUENCE'
  | 'AUDIO_ONLY'
  | 'JSON'
  | 'CUSTOM';

export type Resolution = '480p' | '720p' | '1080p' | '1440p' | '4k' | 'custom';

export interface ExportSettings {
  format: ExportFormat;
  bitrate?: number;
  codec?: string;
  crf?: number;
  preset?: string;
  audioEnabled: boolean;
  metadata: Record<string, any>;
}

export interface ExportResult {
  id: string;
  jobId: string;
  url: string;
  size: number;
  checksum: string;
  createdAt: string;
}
