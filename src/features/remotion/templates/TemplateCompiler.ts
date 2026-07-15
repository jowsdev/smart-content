export class TemplateCompiler {
  public compile(template: any, data: any) {
    console.log('Remotion Templates: Compiling with user data');
    return {
      ...template,
      compiledData: data,
    };
  }
}
