export class MetadataEngine {
  public async extract(file: File) {
    console.log(`Metadata Engine: Extracting from ${file.name}`);
    return { size: file.size, type: file.type };
  }
}

export const metadataEngine = new MetadataEngine();
