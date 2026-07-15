export interface Scene {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: number;
  background?: string;
  layers: string[]; // Layer IDs
  animations: string[]; // Animation IDs
  transitions: string[]; // Transition IDs
  variables: Record<string, any>;
  assets: string[]; // Asset IDs
  audio?: any;
  captions?: any;
  notes?: string;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}
