export interface ProfileOption {
  id: string;
  name: string;
  description?: string;
}

export interface ProfileProviderOption extends ProfileOption {
  models: ProfileOption[];
}

export interface ProfileCompositionReadModel {
  agents: ProfileOption[];
  workflows: ProfileOption[];
  prompts: ProfileOption[];
  knowledgeCollections: ProfileOption[];
  providers: ProfileProviderOption[];
  templates: ProfileOption[];
}

export interface ProfileCompositionFacade {
  getComposition(): ProfileCompositionReadModel;
  findAgent(id: string): ProfileOption | undefined;
  findWorkflow(id: string): ProfileOption | undefined;
  findPrompt(id: string): ProfileOption | undefined;
  findKnowledgeCollection(id: string): ProfileOption | undefined;
  findProvider(id: string): ProfileProviderOption | undefined;
  findTemplate(id: string): ProfileOption | undefined;
}
