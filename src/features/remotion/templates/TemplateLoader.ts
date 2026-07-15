export class TemplateLoader {
  public async load(templateId: string) {
    console.log(`Remotion Templates: Loading ${templateId}`);
    return {
      id: templateId,
      name: 'Modern YouTube Intro',
      config: {},
    };
  }
}
