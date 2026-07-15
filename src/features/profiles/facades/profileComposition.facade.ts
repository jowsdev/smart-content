import type {
  ProfileCompositionFacade,
  ProfileCompositionReadModel,
  ProfileOption,
  ProfileProviderOption,
} from '../ports/profileComposition.types';

const EMPTY_COMPOSITION: ProfileCompositionReadModel = {
  agents: [],
  workflows: [],
  prompts: [],
  knowledgeCollections: [],
  providers: [],
  templates: [],
};

const findById = <T extends ProfileOption>(items: T[], id: string): T | undefined => {
  return items.find((item) => item.id === id);
};

export class DefaultProfileCompositionFacade implements ProfileCompositionFacade {
  constructor(private readonly composition: ProfileCompositionReadModel = EMPTY_COMPOSITION) {}

  getComposition(): ProfileCompositionReadModel {
    return this.composition;
  }

  findAgent(id: string): ProfileOption | undefined {
    return findById(this.composition.agents, id);
  }

  findWorkflow(id: string): ProfileOption | undefined {
    return findById(this.composition.workflows, id);
  }

  findPrompt(id: string): ProfileOption | undefined {
    return findById(this.composition.prompts, id);
  }

  findKnowledgeCollection(id: string): ProfileOption | undefined {
    return findById(this.composition.knowledgeCollections, id);
  }

  findProvider(id: string): ProfileProviderOption | undefined {
    return findById(this.composition.providers, id);
  }

  findTemplate(id: string): ProfileOption | undefined {
    return findById(this.composition.templates, id);
  }
}

export const defaultProfileCompositionFacade = new DefaultProfileCompositionFacade();
