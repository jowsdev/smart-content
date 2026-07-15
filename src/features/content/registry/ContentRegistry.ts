import type { ContentTemplate } from '../types/content.types';

class ContentRegistry {
  private static instance: ContentRegistry;
  private templates: Map<string, ContentTemplate> = new Map();

  private constructor() {
    this.register({
      id: 't-blog-post',
      name: 'Blog Post Template',
      description: 'Standard structure for SEO blog posts.',
      fields: [
        { id: 'f-title', name: 'Title', type: 'text', required: true },
        { id: 'f-keywords', name: 'Keywords', type: 'text', required: false }
      ]
    });
  }

  public static getInstance(): ContentRegistry {
    if (!ContentRegistry.instance) {
      ContentRegistry.instance = new ContentRegistry();
    }
    return ContentRegistry.instance;
  }

  register(template: ContentTemplate) {
    this.templates.set(template.id, template);
  }

  getTemplate(id: string) {
    return this.templates.get(id);
  }

  getAllTemplates() {
    return Array.from(this.templates.values());
  }
}

export const contentRegistry = ContentRegistry.getInstance();
