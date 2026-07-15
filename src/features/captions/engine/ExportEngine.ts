export class ExportEngine {
  public exportAsSrt(_captions: any[]) {
    console.log('Export Engine: Generating SRT string');
    return '';
  }
}

export const exportEngine = new ExportEngine();
