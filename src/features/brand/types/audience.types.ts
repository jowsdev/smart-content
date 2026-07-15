export interface Audience {
  id: string;
  name: string;
  persona: string;
  age?: string;
  gender?: string;
  location?: string;
  language?: string;
  interests: string[];
  goals: string[];
  painPoints: string[];
  preferredPlatforms: string[];
  metadata: Record<string, any>;
}
