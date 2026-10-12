# Spec: AI & Data Science Roadmap Page (`/roadmap`)

## Objective
Create a dedicated `/roadmap` page for `cv.abbakkio.dev` that provides an interactive, beautifully formatted 3-year, 9-trimester trajectory (2025–2028). The roadmap synchronizes university Mathematical & Computational Science (MCS) STEM courses with the industry-standard AI and Data Scientist curriculum from roadmap.sh, spotlighting Azat's unique Quantum Physics & Quantum Computing electives track.

The page serves two audiences:
1. **Azat (Personal Tracking)**: An operational study guide showing what practical tools, frameworks, and milestones to execute alongside academic terms.
2. **Employers / Visitors**: Visual proof of deliberate technical rigor, foundational mathematical depth, and specialized Quantum + AI differentiation.

---

## Tech Stack
- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (~6.0)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom CSS tokens in `src/index.css`
- **Icons**: `lucide-react`
- **Routing**: Zero-dependency browser history navigation supporting both path (`/roadmap`) and hash fallback (`#roadmap`) with window event dispatching and back-to-home support.

---

## Commands
```bash
Dev:   npm run dev
Build: npm run build
Lint:  npm run lint
```

---

## Code Style & Conventions
- **TypeScript**: Strict typing, no `any`, explicit interfaces for all data structures.
- **Components**: Functional components with TypeScript interfaces (`interface TermCardProps`).
- **Tailwind v4**: Use established palette tokens (`bg-[#faf9f7]`, `dark:bg-[#0a0a0a]`, `text-[#ff5c00]`, `border-[#e2ddd5]`, `dark:border-[#1f1f1f]`).
- **Example Snippet**:
```tsx
export interface TermData {
  id: string
  termNumber: number
  year: number
  credits: number
  status: 'in-progress' | 'upcoming' | 'completed'
  uniCourses: { code: string; title: string; category: 'math' | 'cs' | 'hpc' | 'quantum' }[]
  selfStudyTrack: { category: string; skills: string[]; tools: string[] }
  milestoneProject: { title: string; description: string; tags: string[] }
}
```

---

## Testing & Verification Strategy
- **Type Checking & Build**: `npm run build` (`tsc -b && vite build`) to enforce zero compilation or typing regressions.
- **Linting**: `npm run lint` (`oxlint`) to maintain code cleanliness.
- **Manual UX Verification**:
  1. Responsive viewport testing (mobile dock vs desktop side dock).
  2. Route switching (`/`, `/roadmap`, `#roadmap`).
  3. Theme switching (dark & light mode contrast).
  4. Tab filtering (All, Year 1, Year 2, Year 3).

---
```
src/
├── App.tsx                     # Main view controller supporting '/' and '/roadmap' views
├── components/
│   ├── FloatingNav.tsx         # Updated dock navigation with Roadmap link and back trigger
│   ├── Roadmap/
│   │   ├── RoadmapPage.tsx     # Main single-column container for the roadmap
│   │   ├── RoadmapHeader.tsx   # Title, overview, status badges, and filter tabs
│   │   ├── TermCard.tsx        # Individual trimester card with 3-column/3-tier visual split
│   │   └── QuantumCallout.tsx  # Dedicated highlight card for Quantum + AI intersection
├── data/
│   └── roadmapData.ts          # Type-safe curriculum data for all 9 terms + metadata
docs/
├── intent/
│   └── ai-data-science-roadmap.md # Confirmed statement of intent
└── specs/
    └── SPEC-ai-data-science-roadmap.md # This specification document
```

---

## 9-Trimester Curriculum Mapping

### Year 1: Foundations (Math, Core CS, & Python Data Stack)

#### Term 1 (Status: Active / In Progress)
- **University STEM Courses**:
  - Introduction to Programming (CS 2155 - Python / C++)
  - Information & Communication Technologies (ICT 1105)
  - Calculus 1 (MATH 1115 / MA 1 1202)
  - Linear Algebra (MATH 2125 / LA 1201)
- **Parallel AI Self-Study (roadmap.sh)**:
  - Python for Data Science: NumPy arrays, vectorization, Pandas, Polars
  - Development tools: Git CLI, Linux shell, environment management (uv / conda)
  - Mathematics in code: Computational Linear Algebra with NumPy & Matplotlib
- **Term Milestone Project**:
  - *Interactive Numerical Linear Algebra & Data Exploration Suite*: Custom linear transform visualizer & exploratory data analysis engine.

#### Term 2 (Status: Upcoming)
- **University STEM Courses**:
  - Object-Oriented Programming (CS 2155 OOP)
  - Analytic Geometry (AG 2025)
  - Discrete Mathematics (DM 2207)
- **Parallel AI Self-Study (roadmap.sh)**:
  - Relational Databases & SQL (PostgreSQL, DuckDB)
  - Data Wrangling, Cleaning, & Validation (Pydantic, Great Expectations)
  - Advanced Data Visualization (Plotly, Seaborn)
  - Clean architecture & OOP for modular ML pipelines
- **Term Milestone Project**:
  - *Automated ETL & Analytical Data Warehouse*: Ingesting multi-source datasets into DuckDB/PostgreSQL with automated validation and interactive dashboards.

#### Term 3 (Status: Upcoming)
- **University STEM Courses**:
  - Algorithms and Data Structures (CS 2055 ASD 1205)
  - Calculus 2 (MATH 1215 / MA 2 1203)
  - Ordinary Differential Equations (ODE 1111)
  - Educational Practice (UP SIS 1211)
- **Parallel AI Self-Study (roadmap.sh)**:
  - Classical Machine Learning: Scikit-Learn foundations (Supervised vs Unsupervised)
  - Optimization from scratch: Loss functions, Gradient Descent, and backprop intuition using Calculus 2 derivatives
  - Algorithmic efficiency: Time/space profiling for data transformations
- **Term Milestone Project**:
  - *First-Principles ML Engine*: Implementing Gradient Descent, Logistic Regression, and Decision Trees from scratch in pure NumPy, benchmarked against Scikit-Learn.

---

### Year 2: Acceleration (High Performance, Classical/Quantum Physics, & Deep Learning)

#### Term 4 (Status: Upcoming)
- **University STEM Courses**:
  - Parallelization of Algorithms (PA)
  - Heterogeneous Parallelization (HP - GPU/CUDA fundamentals, OpenMP)
  - Calculus 3 (Multivariable Calculus - MA 3)
  - Probability and Statistics (ViS 2212)
- **Parallel AI Self-Study (roadmap.sh)**:
  - Advanced Ensemble Methods: XGBoost, LightGBM, CatBoost
  - Probability Theory & Bayesian Inference for ML
  - Feature Engineering & Hyperparameter Optimization (Optuna)
  - Parallel Data Processing (Dask, Ray, vectorized multiprocessing)
- **Term Milestone Project**:
  - *Parallelized Feature Engineering & Competitive ML Pipeline*: End-to-end model training workflow with distributed cross-validation and Bayesian hyperparameter search.

#### Term 5 (Status: Upcoming)
- **University STEM Courses**:
  - Distributed Computing (DC 3224)
  - Parallel Processing Practices (PPP 2025)
  - Computational Mathematics (VM 2205)
  - Numerical Methods for Differential Equations (ChM DU)
  - Partial Differential Equations (DU ChP)
  - **Physics: Classical and Fluid Mechanics (PhCFM)** *(Quantum / Physics Track Foundation)*
- **Parallel AI Self-Study (roadmap.sh)**:
  - PyTorch Fundamentals: Tensors, computation graphs, Autograd, Dataset/DataLoader
  - Deep Learning Foundations: Multi-layer Perceptrons, CNNs, optimization (AdamW)
  - Physics-Informed ML: Introduction to Physics-Informed Neural Networks (PINNs)
- **Term Milestone Project**:
  - *Physics-Informed Neural Network (PINN) Solver*: Training a PyTorch network to solve dynamic ODEs/PDEs (e.g. damped pendulum, fluid flow) alongside numerical methods.

#### Term 6 (Status: Upcoming)
- **University STEM Courses**:
  - Introduction to Machine Learning and AI (IMLAI)
  - **Physics: Quantum Mechanics (PhQM)** *(Quantum Elective Track)*
  - Computational Linear Algebra and Iterative Methods (CLAIM)
  - Stochastic Processes (SP 2025)
  - Introduction to Optimization Theory (IOTh)
  - Industrial Practice (PP 2305)
- **Parallel AI Self-Study (roadmap.sh)**:
  - Deep Learning Architectures: Transformers, Self-Attention mechanisms, Embeddings
  - **Quantum Computing Foundations**: Qubits, Bloch sphere, quantum logic gates, PennyLane / Qiskit SDKs
  - Convex Optimization and iterative solvers in ML
- **Term Milestone Project**:
  - *Transformer Attention Visualizer & Quantum Circuit State Explorer*: Minimal self-attention mechanism built from scratch + PennyLane quantum gate simulation.

---

### Year 3: Specialization & Mastery (Quantum AI, LLMs, MLOps, & Capstone)

#### Term 7 (Status: Upcoming)
- **University STEM Courses**:
  - Machine Learning for Computational Science (MLCS)
  - **Introduction to Quantum Computing (IQC)** *(Quantum Elective Track)*
  - High Performance Computing (VV 3110)
  - Computational Fluid Mechanics (CFM)
  - Advanced Optimization (AO 2025)
  - Research Methods and Tools
- **Parallel AI Self-Study (roadmap.sh)**:
  - Generative AI & Large Language Models: Hugging Face ecosystem, Tokenization
  - RAG Systems: Chunking, dense vector retrieval, Vector Databases (Qdrant/Chroma), Rerankers
  - Quantum Algorithms: Grover's search, Quantum Fourier Transform basics
- **Term Milestone Project**:
  - *Production-Ready RAG Agent for Scientific Research Papers*: High-performance vector search engine with reranking and LLM synthesis.

#### Term 8 (Status: Upcoming)
- **University STEM Courses**:
  - Deep and Reinforcement Learning (GOOP 3210)
  - **Quantum Programming (QP 2025)** *(Quantum Elective Track)*
  - Mathematical Population Biology / Cloud Computing
  - Computational Geometry / Decision Theory
  - Monte-Carlo Methods (MMC)
- **Parallel AI Self-Study (roadmap.sh)**:
  - **Quantum Machine Learning (QML)**: Variational Quantum Classifiers (VQC), Quantum Neural Networks (QNN) using PennyLane
  - Reinforcement Learning: Policy gradients, PPO, Gymnasium environments
  - MLOps Core: Docker containerization, FastAPI serving, MLflow experiment tracking, CI/CD testing for ML
- **Term Milestone Project**:
  - *Hybrid Quantum-Classical Neural Network with MLOps Packaging*: A containerized, API-accessible PennyLane + PyTorch hybrid model tracked with MLflow.

#### Term 9 (Status: Upcoming)
- **University STEM Courses**:
  - Writing Diploma Work (Project) & Defense / Comprehensive Examination
  - Undergraduate Practice & Internship
- **Parallel AI Self-Study (roadmap.sh)**:
  - Systems & Serving: Model quantization (GGUF, AWQ), vLLM / ONNX Runtime, latency profiling
  - Advanced Capstone Architecture & Open Source Contribution
  - Technical Interview Mastery: ML System Design, Algorithms, Probability & Stats
- **Term Milestone Project**:
  - *Undergraduate Thesis & Flagship AI/QML System*: Deployed, production-grade application or reproducible research benchmark with public code, docs, and live demo.

---

## Visual Design & UI Specifications
- **Theme**: Inherits dark (`#0a0a0a`) and light (`#faf9f7`) modes seamlessly.
- **Accents**: `#ff5c00` for primary status and active highlights, emerald for "In Progress", neutral borders (`#e2ddd5` / `#1f1f1f`).
- **Layout**: Single-column container (`max-w-[980px] mx-auto`) with subtle grid pattern background, matching the main portfolio.
- **Header Section**:
  - Title: "AI & Data Science Roadmap"
  - Subtitle: "Bachelor of Science in Mathematical & Computational Science (2025–2028)"
  - Legend & Status Indicators: Term 1 (In Progress), Terms 2–9 (Planned).
  - Quick Year Tabs: All Years, Year 1, Year 2, Year 3.
  - Specialization Card: Highlights the Quantum Physics & Computing Elective Edge.
- **Term Card Anatomy**:
  - Header: Term number, Year, Credits, Status badge (`Active / In Progress` or `Upcoming`).
  - Section A: 🏛️ **University MCS Core** (Mathematics, CS, Quantum Physics courses).
  - Section B: ⚡ **Parallel AI & Data Stack** (roadmap.sh competencies, libraries, tools).
  - Section C: 🛠️ **Term Milestone Project** (Hands-on artifact to synthesize both tracks).
- **Navigation Dock**:
  - Added Roadmap icon to `FloatingNav` for instantaneous switching between Portfolio and Roadmap.
  - Floating back-to-home button at the top/dock of the roadmap page.

---

## Boundaries
- **Always**:
  - Keep all data strictly type-safe in `src/data/roadmap.ts`.
  - Exclude humanities and non-STEM general education courses.
  - Preserve dark/light theme persistence and smooth transitions.
  - Verify zero TypeScript or linting errors with `npm run build`.
- **Ask First**:
  - Adding heavy external NPM packages (keep bundle lean).
- **Never**:
  - Break the existing main resume page or floating nav behavior.
  - Hardcode fragile external API dependencies.

---

## Success Criteria
1. Navigating to `/roadmap` (or `#roadmap`, or clicking the Roadmap icon in the dock) renders the full roadmap page.
2. Clicking "Back to Portfolio" or the User icon returns to the main portfolio without a hard page reload.
3. Term 1 displays "Active / In Progress", and Terms 2–9 display "Upcoming".
4. Year filter tabs dynamically filter the list of terms.
5. All 9 terms accurately display their university STEM courses, parallel roadmap.sh skills, and milestone projects.
6. The Quantum Physics & Computing track is clearly called out and contextualized.
7. `npm run build` succeeds with zero errors.
