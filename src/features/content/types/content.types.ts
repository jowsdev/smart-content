export interface ContentTemplate {
  id: string;
  name: string;
  description: string;
  fields: TemplateField[];
}

export interface TemplateField {
  id: string;
  name: string;
  type: 'text' | 'longtext' | 'select';
  required: boolean;
}
