# Implementation Plan: AI & Data Science Roadmap Page

## 1. Objective & Scope
Implement the `/roadmap` page on `cv.abbakkio.dev` based on [SPEC-ai-data-science-roadmap.md](file:///Users/azatmadiyev/resume.abbakkio.dev/docs/specs/SPEC-ai-data-science-roadmap.md), linking the 9-trimester Mathematical & Computational Science degree with roadmap.sh's AI and Data Scientist tracks.

## 2. Component Architecture & Data Flow
1. **Data Layer (`src/data/roadmapData.ts`)**:
   - Central source of truth for all 9 trimesters.
   - Types: `TermData`, `CourseItem`, `SelfStudyTrack`, `MilestoneProject`, `CurriculumMetadata`.
   - Content: Accurate university STEM course codes, parallel self-study skills/tools from roadmap.sh, and milestone projects.
2. **Routing & Navigation (`src/App.tsx` & `src/components/FloatingNav.tsx`)**:
   - Zero-dependency client-side history navigation supporting `/roadmap` and hash navigation (`#roadmap`).
   - Listen for `popstate` and dispatch custom route change events.
   - Add a Roadmap navigation button (using `Map` or `Compass` from `lucide-react`) in `FloatingNav.tsx`.
   - Add a "Back to Resume" button in the roadmap view.
3. **UI Components (`src/components/Roadmap/`)**:
   - `RoadmapPage.tsx`: Single-column layout matching the portfolio (`max-w-[980px] mx-auto`, grid pattern, borders).
   - `RoadmapHeader.tsx`: Title, degree badge, overview, quick statistics, and Year 1 / Year 2 / Year 3 filter tabs.
   - `QuantumCallout.tsx`: Explanatory badge/card explaining the strategic choice of the Quantum physics & computing electives track.
   - `TermCard.tsx`: Individual trimester card with:
     - Header: Term number, Year, Credits count, Status indicator (`In Progress` with pulsing emerald dot vs `Upcoming`).
     - University STEM Core (Math / CS / HPC / Quantum badges).
     - Parallel AI & Data Science Stack (roadmap.sh tools & competencies).
     - Milestone Project (concrete hands-on project).
4. **Verification & Build**:
   - Run `oxlint` for linting.
   - Run `npm run build` (`tsc -b && vite build`) to ensure type safety and production bundling.
   - Verify dark and light themes, responsive mobile dock, and route switching.

## 3. Risks & Mitigations
- **Risk**: Page refresh on `/roadmap` in a static dev server might yield 404 if not redirected.
  - *Mitigation*: Vite dev server natively serves `index.html` for SPA routes; supporting both `pathname === '/roadmap'` and `#roadmap` guarantees zero 404s anywhere.
- **Risk**: Visual clutter from dense curriculum information.
  - *Mitigation*: Clear 3-column or responsive 3-section card layout with distinct icons, color-coded badges, and clean spacing matching the existing portfolio.
