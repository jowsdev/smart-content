export class PromptCompiler {
  public compile(prompt: string, variables: Record<string, any>) {
    let compiled = prompt;
    for (const [key, value] of Object.entries(variables)) {
      compiled = compiled.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }
    return compiled;
  }
}

export const promptCompiler = new PromptCompiler();
