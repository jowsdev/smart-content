export const imagePromptBuilder = {
  build: (basePrompt: string, style: string = 'photorealistic') => {
    return `${basePrompt}, ${style}, high quality, detailed`;
  }
};
