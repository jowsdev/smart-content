export const IMAGE_MODELS = {
  OPENAI: ['dall-e-3', 'dall-e-2'],
  GEMINI: ['imagen-2', 'imagen-3'],
  FLUX: ['flux-pro', 'flux-dev'],
  SD: ['sd-xl-1.0', 'sd-3.0'],
  IDEOGRAM: ['ideogram-2.0'],
};

export const GENERATION_OPERATIONS = [
  'Generate', 'Edit', 'Inpaint', 'Outpaint', 'Upscale',
  'Remove Background', 'Generate Variants', 'Style Transfer',
  'Image To Image', 'Text To Image'
] as const;
