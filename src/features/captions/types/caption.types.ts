import { CaptionWord } from './word.types';

export interface Caption {
  id: string;
  language: string;
  startTime: number; // ms
  endTime: number; // ms
  text: string;
  words: CaptionWord[];
  styleId: string;
  animations: string[]; // Animation IDs
  metadata: Record<string, any>;
}
