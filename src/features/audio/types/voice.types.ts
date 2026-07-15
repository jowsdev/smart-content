export interface Voice {
  id: string;
  name: string;
  provider: string;
  language: string;
  gender: 'male' | 'female' | 'non-binary';
  accent?: string;
  style?: string;
  emotion?: string;
  sampleRate: number;
  preview: string;
  favorite: boolean;
  metadata: Record<string, any>;
}
