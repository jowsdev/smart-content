export class StyleEngine {
  public applyStyle(caption: any, style: any) {
    console.log(`Style Engine: Applying ${style.name} to caption ${caption.id}`);
    return { ...caption, styleId: style.id };
  }
}

export const styleEngine = new StyleEngine();
