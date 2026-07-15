export interface Transcript {
  id: string;
  segments: TranscriptSegment[];
  words: TranscriptWord[];
  timestamps: boolean;
  language: string;
  confidence: number;
  metadata: Record<string, any>;
}

export interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
  speaker?: string;
}

export interface TranscriptWord {
  word: string;
  start: number;
  end: number;
  confidence: number;
}
