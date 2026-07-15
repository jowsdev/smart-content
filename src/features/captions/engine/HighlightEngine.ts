export class HighlightEngine {
  public getActiveWordIndex(words: any[], currentTimeMs: number) {
    return words.findIndex(w => currentTimeMs >= w.startTime && currentTimeMs <= w.endTime);
  }
}

export const highlightEngine = new HighlightEngine();
