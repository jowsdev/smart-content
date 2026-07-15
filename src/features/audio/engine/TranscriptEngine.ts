export class TranscriptEngine {
  public format(transcript: any) {
    console.log('Transcript Engine: Formatting results');
    return transcript;
  }
}

export const transcriptEngine = new TranscriptEngine();
