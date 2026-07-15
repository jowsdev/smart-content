# Architecture Migration Report

## Goal

Refactor toward the target dependency flow without adding product features:

`UI -> Hooks -> Facades -> Application Services -> Domain Engines -> Repositories -> Adapters -> Infrastructure`

## Completed Migration

### Feature Public APIs and Dependency Direction

- Removed detected cross-feature imports under `src/features`.
- Moved shared composition contracts to `src/shared/domain/composition.types.ts`.
- Preserved the existing `src/features/video/types/composition.types.ts` public import path by re-exporting the shared composition contract.
- Updated Remotion modules to depend on the shared composition contract rather than the Video feature.

### Profile Feature Isolation

- Removed registry imports from `ProfileEditor.tsx`.
- Introduced a profile composition port at `src/features/profiles/ports/profileComposition.types.ts`.
- Introduced a profile composition facade at `src/features/profiles/facades/profileComposition.facade.ts`.
- Updated `ProfileEditor` to consume the facade interface instead of concrete registries.
- Kept `ProfileEditor` backward-compatible by making the facade prop optional and providing a default facade.

### Conversation Feature Isolation

- Removed the Conversation engine's direct dependency on the AI feature barrel.
- Introduced `ConversationAIExecutor` as a conversation-owned port.
- Updated `MessageRouter` to depend on the port and a local default executor, allowing future infrastructure adapters to be injected without changing router consumers.

### Strictness and Maintainability

- Preserved strict unused local/parameter checks.
- Kept the project buildable after the architecture refactor.

## Remaining Work

### High Priority

1. Add a dependency-boundary check to CI so cross-feature imports cannot regress.
2. Split `ProfileEditor.tsx` into section components and move read-model assembly into a hook/facade composition layer.
3. Replace singleton registries with injected repository/facade implementations.
4. Define repository interfaces for profile composition data and wire infrastructure adapters at app composition root.

### Medium Priority

1. Consolidate additional duplicated domain contracts into shared domain modules only when they are truly cross-cutting.
2. Standardize feature `index.ts` files as public API surfaces.
3. Introduce typed error/result contracts for async services and hooks.
4. Replace inline styling hotspots with design-system primitives or memoized style factories.

## Validation

- TypeScript application check passes.
- Production build passes.
- Lint passes.
- A custom dependency scan reports zero relative cross-feature imports under `src/features`.
