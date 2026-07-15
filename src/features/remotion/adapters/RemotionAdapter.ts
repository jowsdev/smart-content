import type { Composition } from '../../../shared/domain/composition.types';

export interface RemotionAdapter {
  initialize(): Promise<void>;
  compile(composition: Composition): Promise<any>;
  load(id: string): Promise<void>;
  play(): void;
  pause(): void;
  seek(frame: number): void;
  render(compositionId: string, settings: any): Promise<string>;
  cancel(renderId: string): void;
  dispose(): void;
}
