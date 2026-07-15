# Architecture Review

## Scope

This review covers the current React/Vite/TypeScript project structure under `src`, with emphasis on architecture, maintainability, scalability, performance, React patterns, typing quality, async flow, registries, adapters, engines, services, hooks, and feature boundaries.

## Executive Summary

The codebase uses a consistent feature-first layout and has a useful vocabulary of `components`, `types`, `hooks`, `services`, `engine`, and `registry` folders. However, many modules are still scaffold-like placeholders, feature boundaries are porous, and domain concepts are duplicated between features. The highest-impact architectural improvements are to formalize dependency direction, consolidate duplicated domain models into shared contracts, split the large profile editor, and replace singleton registries with dependency-injected or context-provided interfaces.

## Scores

| Area | Score |
| --- | ---: |
| Architecture | 62 / 100 |
| Maintainability | 58 / 100 |
| Scalability | 55 / 100 |
| React Best Practices | 60 / 100 |

## Findings

### Critical

1. **Feature boundaries are not enforced.** `profiles` imports registries from `agents`, `workflows`, `prompts`, `providers`, `knowledge`, and `content`; `remotion` imports `video` composition types; `conversation` imports from `ai`. This creates implicit compile-time coupling between feature domains.
   - **Impact:** Refactors in one feature can break unrelated features; domain ownership is unclear.
   - **Recommendation:** Introduce shared domain contracts under `src/features/*/types` only when owned by a shared platform feature, or move truly cross-cutting contracts into `src/shared`/`src/core`. Depend on interfaces instead of concrete registries.

2. **Profiles acts as an orchestration hub without a boundary abstraction.** The profile editor directly coordinates agents, workflows, prompts, providers, knowledge, and content registries.
   - **Impact:** The profile feature is difficult to test and scale; UI components know too much about unrelated domains.
   - **Recommendation:** Introduce a profile composition service or facade that returns profile editing options and hides registry implementations.

### High

3. **Domain types are duplicated across adjacent features.** Examples include video/remotion composition types, multiple execution/animation/prompt/provider types, and collection concepts in assets/knowledge.
   - **Impact:** Drift between duplicated types will cause adapters and services to disagree.
   - **Recommendation:** Pick a single owning feature for each domain contract and map at boundaries. For Remotion, use adapter DTOs instead of importing video internals directly.

4. **Registry singletons are overused.** Registries expose mutable global state via static singleton instances.
   - **Impact:** Harder isolation in tests, hidden state across screens, and limited support for multiple workspaces/projects.
   - **Recommendation:** Keep registry interfaces but move implementations behind provider/context or service constructors. Use immutable snapshots for UI reads.

5. **Engines, services, and adapters are inconsistently separated.** Several engines and services are placeholders with overlapping responsibilities.
   - **Impact:** Developers cannot predict whether business logic belongs in `engine`, `service`, `adapter`, or `registry`.
   - **Recommendation:** Define layering rules: components -> hooks -> services/use-cases -> engines/domain logic -> adapters/infrastructure. Registries should only resolve known implementations, not perform workflows.

6. **`ProfileEditor.tsx` is too large.** It is the only file currently exceeding 180 lines and combines layout, orchestration, registry access, forms, mapping, and presentation.
   - **Impact:** High cognitive load and high re-render risk.
   - **Recommendation:** Split into sections (`AgentBindingsSection`, `KnowledgeSection`, `ProviderSettingsSection`, `VariablesSection`) and move registry lookups to a hook/facade.

### Medium

7. **Barrel exports are inconsistent.** Some features expose index files while many consumers still import deep internals.
   - **Impact:** Public API boundaries are unclear.
   - **Recommendation:** Standardize each feature `index.ts` as the only public import surface. Enforce with lint rules for cross-feature imports.

8. **React components build inline object styles on every render.** Many components define style objects inside render functions and pass them to child components.
   - **Impact:** Prevents memoized children from benefiting and increases render churn in large lists.
   - **Recommendation:** Hoist static styles, memoize derived styles, or migrate repeated styling to CSS modules/design-system primitives.

9. **Async services lack consistent error contracts.** Several services return placeholder values or throw raw errors.
   - **Impact:** UI error states will be inconsistent and retry behavior will be hard to implement.
   - **Recommendation:** Adopt a common `Result<T, E>` or typed error model for service boundaries and async hooks.

10. **Type quality is uneven.** Some areas use strong discriminated unions while others still use `any`, broad `Record<string, any>`, or placeholder DTOs.
    - **Impact:** Domain contracts are difficult to trust and public API evolution is risky.
    - **Recommendation:** Replace `any` at boundary types first, especially AI, rendering, captions, and MCP metadata.

11. **No architectural cycle/dependency guard exists.** The project currently has no automated rule preventing cross-feature dependency drift or circular imports.
    - **Impact:** Architecture can regress silently.
    - **Recommendation:** Add a dependency graph check in CI using a tool such as dependency-cruiser or madge, configured around feature boundaries.

### Low

12. **Several files contain placeholder implementations with unused parameters.** These are acceptable during scaffolding but create noise.
    - **Impact:** Lint and TypeScript checks become less trustworthy.
    - **Recommendation:** Prefix intentionally unused parameters with `_` and keep strict unused checks enabled.

13. **Naming conventions mix domain and implementation terms.** Examples include `engine`, `service`, `registry`, and `manager` with overlapping meanings.
    - **Impact:** New contributors need to inspect implementation details before placing code.
    - **Recommendation:** Document naming rules and use code owners/review checklist to keep new files consistent.

14. **Feature-level mock data is scattered.** Mock data exists per feature with no common testing/mocking convention.
    - **Impact:** Test setup and demo state will diverge.
    - **Recommendation:** Move long-lived fixture factories to a shared test utilities area while keeping feature-specific examples near the feature.

## Safe Improvements Applied

- Restored strict unused local/parameter checks while keeping the previous build-compatible module syntax setting.
- Removed or prefixed currently unused locals, imports, and placeholder parameters.
- Preserved the public component and feature APIs introduced in the previous commit.
- Added this review as a durable architecture baseline for follow-up work.

## Technical Debt Report

| Debt Item | Severity | Remediation |
| --- | --- | --- |
| Cross-feature concrete imports | Critical | Define feature public APIs and enforce dependency rules. |
| Profile editor orchestration in UI | Critical | Extract facade/hook and split sections. |
| Duplicated composition/render concepts | High | Establish owned shared contracts and adapter mappings. |
| Singleton mutable registries | High | Introduce injectable registry interfaces/providers. |
| Placeholder services/engines | High | Define service vs engine responsibilities and replace stubs incrementally. |
| Inline styling everywhere | Medium | Consolidate repeated styles into design-system primitives. |
| Weak `any` metadata contracts | Medium | Replace boundary `any` with typed metadata schemas. |
| No dependency graph CI guard | Medium | Add dependency-cruiser/madge configuration. |
| Inconsistent barrels | Medium | Export public feature APIs through `index.ts`; block deep imports across features. |
| Sparse automated tests | Medium | Add unit tests around registries, services, hooks, and adapters. |
