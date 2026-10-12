# Task List: AI & Data Science Roadmap

- [x] Task 1: Create type-safe data model and 9-trimester curriculum dataset
  - Acceptance: `src/data/roadmapData.ts` contains all 9 terms with university STEM courses, roadmap.sh competencies, quantum highlights, and milestone projects.
  - Verify: TypeScript compiles without errors.
  - Files: `src/data/roadmapData.ts`

- [x] Task 2: Create Roadmap UI components
  - Acceptance: `src/components/Roadmap/` contains `RoadmapPage.tsx`, `RoadmapHeader.tsx`, `QuantumCallout.tsx`, and `TermCard.tsx` styled to match the main portfolio's theme.
  - Verify: Components render cleanly with dark/light mode and year filtering.
  - Files: `src/components/Roadmap/*`

- [x] Task 3: Implement client-side routing and integrate with FloatingNav
  - Acceptance: Navigating to `/roadmap` or `#roadmap` displays the roadmap; clicking the dock icon or back button transitions smoothly.
  - Verify: History state updates without page reload; dock displays active state.
  - Files: `src/App.tsx`, `src/components/FloatingNav.tsx`

- [x] Task 4: Lint, build, and verify
  - Acceptance: Zero TypeScript or lint errors, production build succeeds.
  - Verify: `npm run lint` and `npm run build` exit code 0.
  - Files: All touched files
