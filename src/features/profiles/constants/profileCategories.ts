export const PROFILE_CATEGORIES = [
  'Blog Writing',
  'SEO',
  'Social Media',
  'Video Creation',
  'Podcast',
  'Marketing',
  'Advertising',
  'Email Marketing',
  'Translation',
  'E-commerce',
  'Branding',
  'Documentation',
  'Education',
  'Research',
  'Custom'
] as const;

export type ProfileCategory = typeof PROFILE_CATEGORIES[number];
