export interface CaptionWord {
  id: string;
  text: string;
  startTime: number;
  endTime: number;
  confidence: number;
  highlight: boolean;
  metadata?: Record<string, any>;
}
