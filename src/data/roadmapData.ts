export type CourseCategory = 'math' | 'cs' | 'hpc' | 'quantum' | 'practice'

export interface UniCourse {
  code: string
  title: string
  category: CourseCategory
  isHighlight?: boolean
  description?: string
}

export interface MilestoneProject {
  title: string
  description: string
  deliverable: string
  tags: string[]
}

export interface TermData {
  id: string
  termNumber: number
  year: number
  title: string
  credits: number
  status: 'in-progress' | 'upcoming' | 'completed'
  focusTheme: string
  uniCourses: UniCourse[]
  selfStudySkills: string[]
  keyTools: string[]
  milestoneProject: MilestoneProject
  quantumBridge?: {
    concept: string
    connection: string
  }
}

export interface RoadmapMetadata {
  degreeTitle: string
  degreeCode: string
  period: string
  universityYear: number
  currentTerm: number
  targetRole: string
  quantumSpecialization: string
}

export const ROADMAP_METADATA: RoadmapMetadata = {
  degreeTitle: 'Bachelor of Science in Mathematical & Computational Science',
  degreeCode: '6B06107',
  period: '2025–2028',
  universityYear: 1,
  currentTerm: 1,
  targetRole: 'AI & Data Scientist',
  quantumSpecialization: 'Quantum Computing & Physics-Informed Machine Learning',
}

export const ROADMAP_TERMS: TermData[] = [
  // ==========================================
  // YEAR 1
  // ==========================================
  {
    id: 'term-1',
    termNumber: 1,
    year: 1,
    title: 'Term 1: Foundations of Programming & Continuous Math',
    credits: 28,
    status: 'in-progress',
    focusTheme: 'Python Data Fundamentals & Computational Linear Algebra',
    uniCourses: [
      {
        code: 'CS 2155',
        title: 'Introduction to Programming',
        category: 'cs',
        description: 'Algorithmic thinking, memory, primitives, and structured problem solving in Python & C++.',
      },
      {
        code: 'ICT 1105',
        title: 'Information & Communication Technologies',
        category: 'cs',
        description: 'Computer architecture, networking essentials, operating system fundamentals.',
      },
      {
        code: 'MATH 1115 / MA 1 1202',
        title: 'Calculus 1',
        category: 'math',
        isHighlight: true,
        description: 'Limits, continuity, single-variable differential and integral calculus.',
      },
      {
        code: 'MATH 2125 / LA 1201',
        title: 'Linear Algebra',
        category: 'math',
        isHighlight: true,
        description: 'Vector spaces, matrices, determinants, eigenvalues & eigenvectors, linear transformations.',
      },
    ],
    selfStudySkills: [
      'Python for Data Science (NumPy, vectorization, Pandas, Polars)',
      'Developer Environment: Linux CLI, Git workflows, uv package manager',
      'Computational Linear Algebra in Python (Matrix decompositions, projections, coordinate spaces)',
      'Scientific plotting & visualization with Matplotlib',
    ],
    keyTools: ['Python 3.12+', 'NumPy', 'Pandas', 'Polars', 'Git', 'Jupyter Lab', 'Matplotlib'],
    milestoneProject: {
      title: 'Numerical Linear Algebra & Data Exploration Engine',
      description: 'An interactive CLI & visualization suite implementing custom matrix operations, eigen-decompositions, and data transformations from scratch in NumPy, benchmarked against real datasets.',
      deliverable: 'Tested Python package with visual notebooks and performance benchmarks.',
      tags: ['NumPy', 'Linear Algebra', 'Polars', 'EDA'],
    },
  },
  {
    id: 'term-2',
    termNumber: 2,
    year: 1,
    title: 'Term 2: Software Engineering & Discrete Structures',
    credits: 29,
    status: 'upcoming',
    focusTheme: 'Relational Data, ETL Pipelines & Clean OOP Architecture',
    uniCourses: [
      {
        code: 'CS 2155 OOP',
        title: 'Object-Oriented Programming',
        category: 'cs',
        description: 'Polymorphism, inheritance, encapsulation, design patterns, and clean code principles.',
      },
      {
        code: 'AG 2025',
        title: 'Analytic Geometry',
        category: 'math',
        description: 'Coordinate systems, vectors in 2D/3D, conic sections, quadric surfaces in Euclidean space.',
      },
      {
        code: 'DM 2207',
        title: 'Discrete Mathematics',
        category: 'math',
        isHighlight: true,
        description: 'Set theory, combinatorics, graph theory, propositional logic, and proof techniques.',
      },
    ],
    selfStudySkills: [
      'Relational Databases & SQL (PostgreSQL, DuckDB, query optimization)',
      'Data Wrangling & Validation (Pydantic, Great Expectations)',
      'Interactive Data Visualization (Plotly, Seaborn)',
      'Clean OOP Architecture for Machine Learning pipelines and data loaders',
    ],
    keyTools: ['PostgreSQL', 'DuckDB', 'SQL', 'Pydantic', 'Plotly', 'Seaborn'],
    milestoneProject: {
      title: 'Automated ETL & Analytical Data Warehouse',
      description: 'An automated pipeline ingesting messy open-data streams into DuckDB & PostgreSQL, featuring schema validation, automated reporting, and interactive dashboards.',
      deliverable: 'Containerized data ingestion engine with automated tests and analytics dashboard.',
      tags: ['DuckDB', 'PostgreSQL', 'ETL', 'Plotly', 'Data Engineering'],
    },
  },
  {
    id: 'term-3',
    termNumber: 3,
    year: 1,
    title: 'Term 3: Algorithms & Continuous Dynamical Systems',
    credits: 28,
    status: 'upcoming',
    focusTheme: 'First-Principles Machine Learning & Optimization from Math',
    uniCourses: [
      {
        code: 'CS 2055 ASD 1205',
        title: 'Algorithms and Data Structures',
        category: 'cs',
        isHighlight: true,
        description: 'Sorting, trees, graphs, dynamic programming, asymptotic analysis (Big-O).',
      },
      {
        code: 'MATH 1215 / MA 2 1203',
        title: 'Calculus 2',
        category: 'math',
        isHighlight: true,
        description: 'Integration techniques, infinite series, Taylor polynomials, parametric equations.',
      },
      {
        code: 'ODE 1111',
        title: 'Ordinary Differential Equations',
        category: 'math',
        isHighlight: true,
        description: 'First and second-order ODEs, systems of linear differential equations, Laplace transforms.',
      },
      {
        code: 'UP SIS 1211',
        title: 'Educational Practice',
        category: 'practice',
        description: 'Applied computing practicum and algorithmic problem solving.',
      },
    ],
    selfStudySkills: [
      'Classical Machine Learning fundamentals with Scikit-Learn',
      'Loss function derivation & Gradient Descent optimizer from scratch using Calculus 2 derivatives',
      'Supervised learning: Linear/Logistic Regression, Decision Trees, Random Forests',
      'Model evaluation: Cross-validation, bias-variance tradeoff, ROC-AUC, PR curves',
    ],
    keyTools: ['Scikit-Learn', 'SciPy', 'Joblib', 'Optuna', 'Git Actions'],
    milestoneProject: {
      title: 'First-Principles Machine Learning Engine from Scratch',
      description: 'Building Gradient Descent, Logistic Regression, and Decision Trees in pure Python/NumPy from mathematical equations, then validating accuracy against Scikit-Learn implementations.',
      deliverable: 'Open-source library with comprehensive test coverage and documentation.',
      tags: ['Scikit-Learn', 'First-Principles', 'Calculus', 'Algorithms'],
    },
  },

  // ==========================================
  // YEAR 2
  // ==========================================
  {
    id: 'term-4',
    termNumber: 4,
    year: 2,
    title: 'Term 4: Parallel Architectures & Multivariable Statistics',
    credits: 27,
    status: 'upcoming',
    focusTheme: 'Advanced Ensembles, Distributed Features & Bayesian Inference',
    uniCourses: [
      {
        code: 'PA',
        title: 'Parallelization of Algorithms',
        category: 'hpc',
        isHighlight: true,
        description: 'Thread concurrency, shared memory models, parallel algorithmic patterns, Amdahl’s law.',
      },
      {
        code: 'HP',
        title: 'Heterogeneous Parallelization',
        category: 'hpc',
        isHighlight: true,
        description: 'GPU hardware architecture, SIMD/SIMT concepts, CUDA basics, OpenMP/MPI.',
      },
      {
        code: 'MA 3',
        title: 'Calculus 3 (Multivariable Calculus)',
        category: 'math',
        isHighlight: true,
        description: 'Partial derivatives, gradients, Jacobian & Hessian matrices, multiple integrals, vector fields.',
      },
      {
        code: 'ViS 2212',
        title: 'Probability and Statistics',
        category: 'math',
        isHighlight: true,
        description: 'Random variables, probability distributions, central limit theorem, hypothesis testing.',
      },
    ],
    selfStudySkills: [
      'Gradient Boosting algorithms: XGBoost, LightGBM, CatBoost',
      'Bayesian inference & probabilistic programming basics',
      'Automated hyperparameter optimization with Optuna',
      'Parallel data processing and feature pipelines with Dask and Ray',
    ],
    keyTools: ['XGBoost', 'LightGBM', 'CatBoost', 'Optuna', 'Dask', 'CUDA Basics'],
    milestoneProject: {
      title: 'High-Throughput Distributed Feature Engineering & ML Pipeline',
      description: 'A competitive Kaggle-grade machine learning pipeline with parallel feature extraction across CPU threads, Bayesian hyperparameter search, and ensemble blending.',
      deliverable: 'Production training script with automated validation benchmarks and metric logging.',
      tags: ['XGBoost', 'Optuna', 'Dask', 'Statistics', 'Parallel Computing'],
    },
  },
  {
    id: 'term-5',
    termNumber: 5,
    year: 2,
    title: 'Term 5: Computational Physics & Distributed Systems',
    credits: 30,
    status: 'upcoming',
    focusTheme: 'PyTorch Deep Learning & Physics-Informed Neural Networks (PINNs)',
    uniCourses: [
      {
        code: 'PhCFM',
        title: 'Physics: Classical and Fluid Mechanics',
        category: 'quantum',
        isHighlight: true,
        description: 'Lagrangian & Hamiltonian mechanics, conservation laws, Navier-Stokes and fluid dynamics principles.',
      },
      {
        code: 'DC 3224',
        title: 'Distributed Computing',
        category: 'hpc',
        description: 'Distributed consensus, cluster communication, MapReduce, fault-tolerant network topologies.',
      },
      {
        code: 'PPP 2025',
        title: 'Parallel Processing Practices',
        category: 'hpc',
        description: 'Practical High-Performance Computing (HPC), MPI clusters, profiling bottlenecks.',
      },
      {
        code: 'VM 2205',
        title: 'Computational Mathematics',
        category: 'math',
        description: 'Numerical approximation, floating-point error analysis, interpolation, quadrature.',
      },
      {
        code: 'ChM DU',
        title: 'Numerical Methods for Differential Equations',
        category: 'math',
        isHighlight: true,
        description: 'Euler, Runge-Kutta, finite difference methods (FDM) for boundary value problems.',
      },
      {
        code: 'DU ChP',
        title: 'Partial Differential Equations',
        category: 'math',
        isHighlight: true,
        description: 'Wave equation, heat equation, Laplace equation, separation of variables, Fourier transforms.',
      },
    ],
    selfStudySkills: [
      'PyTorch Deep Learning Core: Tensors, Autograd graph, custom Modules, Datasets/DataLoaders',
      'Deep learning building blocks: MLPs, Convolutional Neural Networks (CNNs), modern regularizers',
      'Physics-Informed Machine Learning: Encoding PDE constraints directly into PyTorch loss functions',
      'Experiment tracking with Weights & Biases',
    ],
    keyTools: ['PyTorch', 'TorchVision', 'Wandb', 'SciPy', 'PINNs'],
    milestoneProject: {
      title: 'Physics-Informed Neural Network (PINN) Dynamical Solver',
      description: 'Training a PyTorch neural network to solve non-linear differential equations (e.g. Navier-Stokes fluid slice or harmonic oscillator) by penalizing PDE residuals, evaluated against classical Runge-Kutta methods.',
      deliverable: 'Interactive simulation notebook comparing PINN predictions with numerical PDE solvers.',
      tags: ['PyTorch', 'PINNs', 'Fluid Mechanics', 'Differential Equations'],
    },
    quantumBridge: {
      concept: 'Classical & Fluid Mechanics as Foundation for Quantum Physics',
      connection: 'Lagrangian and Hamiltonian formulations learned here are the direct mathematical bedrock for quantum state operators, wavefunctions, and Hamiltonian simulation in quantum computing.',
    },
  },
  {
    id: 'term-6',
    termNumber: 6,
    year: 2,
    title: 'Term 6: Quantum Mechanics & Deep Learning Architectures',
    credits: 28,
    status: 'upcoming',
    focusTheme: 'Transformers, Modern Optimization & Quantum Mechanics Foundations',
    uniCourses: [
      {
        code: 'IMLAI',
        title: 'Introduction to Machine Learning and AI',
        category: 'cs',
        isHighlight: true,
        description: 'Formal academic machine learning: probabilistic models, SVMs, neural networks, clustering.',
      },
      {
        code: 'PhQM',
        title: 'Physics: Quantum Mechanics',
        category: 'quantum',
        isHighlight: true,
        description: 'Schrödinger equation, wavefunctions, quantum state vectors, Hilbert spaces, observable operators, spin.',
      },
      {
        code: 'CLAIM',
        title: 'Computational Linear Algebra & Iterative Methods',
        category: 'math',
        isHighlight: true,
        description: 'Krylov subspace methods, GMRES, Conjugate Gradient, sparse matrix decompositions.',
      },
      {
        code: 'SP 2025',
        title: 'Stochastic Processes',
        category: 'math',
        isHighlight: true,
        description: 'Markov chains, Poisson processes, Brownian motion, martingale theory, stochastic differential equations.',
      },
      {
        code: 'IOTh',
        title: 'Introduction to Optimization Theory',
        category: 'math',
        isHighlight: true,
        description: 'Convex sets, Lagrange duality, KKT conditions, gradient and Newton methods.',
      },
      {
        code: 'PP 2305',
        title: 'Industrial Practice',
        category: 'practice',
        description: 'Industry software internship or computational lab research project.',
      },
    ],
    selfStudySkills: [
      'Deep Learning Architectures: Transformers, Scaled Dot-Product Attention, Multi-Head Attention',
      'Quantum Computing Foundations: Qubits, superposition, entanglement, Pauli matrices, PennyLane & Qiskit',
      'Convex optimization techniques applied to machine learning loss surfaces',
      'Stochastic calculus intuition for modern diffusion and generative models',
    ],
    keyTools: ['PyTorch', 'PennyLane', 'Qiskit', 'Hugging Face', 'Matplotlib'],
    milestoneProject: {
      title: 'Attention Transformer from Scratch & Quantum Circuit State Explorer',
      description: 'Implementing an encoder-decoder attention mechanism from pure PyTorch tensor operations alongside a PennyLane simulator modeling quantum entanglement (Bell states) and measurement collapse.',
      deliverable: 'Dual-module repository demonstrating self-attention visualization and quantum circuit execution.',
      tags: ['Transformers', 'PyTorch', 'PennyLane', 'Quantum Mechanics', 'Hilbert Space'],
    },
    quantumBridge: {
      concept: 'Hilbert Space & Quantum Superposition in Code',
      connection: 'The linear algebra of Hilbert spaces and Hermitian operators studied in PhQM maps directly to quantum gate operations in Qiskit and parameterized quantum circuits in PennyLane.',
    },
  },

  // ==========================================
  // YEAR 3
  // ==========================================
  {
    id: 'term-7',
    termNumber: 7,
    year: 3,
    title: 'Term 7: Quantum Computing & High-Performance LLMs',
    credits: 30,
    status: 'upcoming',
    focusTheme: 'Production RAG, Vector Databases & Quantum Algorithms',
    uniCourses: [
      {
        code: 'IQC',
        title: 'Introduction to Quantum Computing',
        category: 'quantum',
        isHighlight: true,
        description: 'Quantum gates, quantum circuits, quantum teleportation, Deutsch-Jozsa, Grover search algorithm.',
      },
      {
        code: 'MLCS',
        title: 'Machine Learning for Computational Science',
        category: 'cs',
        isHighlight: true,
        description: 'Surrogate modeling, scientific ML, data assimilation, inverse problems.',
      },
      {
        code: 'VV 3110',
        title: 'High Performance Computing',
        category: 'hpc',
        isHighlight: true,
        description: 'Supercomputing clusters, multi-node scaling, InfiniBand, GPU accelerated computing.',
      },
      {
        code: 'CFM',
        title: 'Computational Fluid Mechanics',
        category: 'hpc',
        description: 'Navier-Stokes discretization, finite volume methods, turbulent flow modeling.',
      },
      {
        code: 'AO 2025',
        title: 'Advanced Optimization',
        category: 'math',
        description: 'Nonlinear programming, proximal gradient methods, interior-point methods.',
      },
      {
        code: 'MiII 3222',
        title: 'Research Methods and Tools',
        category: 'practice',
        description: 'Scientific methodology, experimental design, technical literature review.',
      },
    ],
    selfStudySkills: [
      'Generative AI & LLM Systems: Fine-tuning, prompt engineering, Tokenization algorithms',
      'Advanced RAG (Retrieval-Augmented Generation): Semantic chunking, reranking, hybrid search',
      'Vector Databases & Indexing (Qdrant, Chroma, HNSW algorithms)',
      'Quantum Algorithm Implementations in PennyLane and Qiskit',
    ],
    keyTools: ['Hugging Face', 'Qdrant', 'LangChain', 'LlamaIndex', 'PennyLane', 'Qiskit'],
    milestoneProject: {
      title: 'Production Scientific Research RAG System with Vector Search',
      description: 'An intelligent retrieval system for scientific and technical papers featuring hybrid keyword/dense vector search, cross-encoder reranking, and GPU-accelerated local LLM synthesis.',
      deliverable: 'FastAPI service with interactive frontend and automated evaluation metrics.',
      tags: ['LLMs', 'RAG', 'Qdrant', 'Vector Search', 'HPC'],
    },
    quantumBridge: {
      concept: 'Quantum Search & Algorithmic Speedup',
      connection: 'Analyzing how Grover search and Quantum Phase Estimation exploit constructive interference to deliver quadratic speedups, establishing the theoretical boundaries of quantum computational advantage.',
    },
  },
  {
    id: 'term-8',
    termNumber: 8,
    year: 3,
    title: 'Term 8: Quantum Programming & Deep Reinforcement Learning',
    credits: 25,
    status: 'upcoming',
    focusTheme: 'Quantum Machine Learning (QML), Reinforcement Learning & MLOps',
    uniCourses: [
      {
        code: 'QP 2025',
        title: 'Quantum Programming',
        category: 'quantum',
        isHighlight: true,
        description: 'Quantum programming languages, noisy intermediate-scale quantum (NISQ) devices, error mitigation.',
      },
      {
        code: 'GOOP 3210',
        title: 'Deep and Reinforcement Learning',
        category: 'cs',
        isHighlight: true,
        description: 'Deep Q-Networks (DQN), Policy Gradients, PPO, Actor-Critic, Gymnasium environments.',
      },
      {
        code: 'MPB / OV 3222',
        title: 'Cloud Computing / Population Biology',
        category: 'hpc',
        description: 'Cloud infrastructure (AWS/GCP), container orchestration, scalable data pipelines.',
      },
      {
        code: 'CGNM / DT',
        title: 'Computational Geometry & Decision Theory',
        category: 'math',
        description: 'Convex hulls, Voronoi diagrams, Delaunay triangulations, Bayesian decision theory.',
      },
      {
        code: 'MMC',
        title: 'Monte-Carlo Methods',
        category: 'math',
        isHighlight: true,
        description: 'Markov Chain Monte Carlo (MCMC), Metropolis-Hastings, Gibbs sampling, importance sampling.',
      },
    ],
    selfStudySkills: [
      'Quantum Machine Learning (QML): Variational Quantum Classifiers (VQC), Quantum Neural Networks (QNN)',
      'Reinforcement Learning implementations: PPO and Actor-Critic in PyTorch',
      'Production MLOps: Docker containerization, FastAPI serving, MLflow experiment tracking',
      'CI/CD workflows and automated model validation in GitHub Actions',
    ],
    keyTools: ['PennyLane', 'PyTorch', 'MLflow', 'Docker', 'FastAPI', 'Gymnasium'],
    milestoneProject: {
      title: 'Hybrid Quantum-Classical Neural Network (QNN) with MLOps Packaging',
      description: 'A hybrid PennyLane + PyTorch classifier that pipes classical feature vectors through a parameterized quantum circuit layer, containerized with Docker, tracked with MLflow, and served via FastAPI.',
      deliverable: 'Complete end-to-end MLOps repository with CI/CD pipeline, Docker container, and API benchmarks.',
      tags: ['Quantum ML', 'PennyLane', 'PyTorch', 'MLOps', 'Docker', 'FastAPI'],
    },
    quantumBridge: {
      concept: 'Variational Quantum Circuits as Neural Network Layers',
      connection: 'Parameter shift rules and quantum gradients allow quantum circuits to be trained via backpropagation alongside classical PyTorch neural networks—creating genuine Quantum Neural Networks.',
    },
  },
  {
    id: 'term-9',
    termNumber: 9,
    year: 3,
    title: 'Term 9: Thesis Defense, Systems Optimization & Production Capstone',
    credits: 20,
    status: 'upcoming',
    focusTheme: 'Flagship Capstone, Model Serving Optimization & Career Launch',
    uniCourses: [
      {
        code: 'DIPLOMA',
        title: 'Writing Diploma Work (Project) and Defence / Comprehensive Examination',
        category: 'practice',
        isHighlight: true,
        description: 'Undergraduate thesis defense synthesizing Mathematical & Computational Science with applied AI/Quantum computing.',
      },
      {
        code: 'PP 3307',
        title: 'Undergraduate Practice',
        category: 'practice',
        description: 'Final degree practicum and thesis research implementation.',
      },
      {
        code: 'PP 3306',
        title: 'Industrial Practice / Internship',
        category: 'practice',
        description: 'Industry engineering or research laboratory internship.',
      },
    ],
    selfStudySkills: [
      'High-Performance Model Serving: vLLM, ONNX Runtime, TensorRT-LLM',
      'Model Compression & Quantization: AWQ, GPTQ, GGUF, FP8 / INT4 inference',
      'AI System Design: Designing distributed, scalable ML architectures for enterprise scale',
      'Technical Interview Mastery: Data structures & algorithms, ML system design, math/prob foundations',
    ],
    keyTools: ['vLLM', 'ONNX', 'Triton', 'TensorRT', 'Docker', 'Kubernetes Basics'],
    milestoneProject: {
      title: 'Flagship Production AI / QML Capstone & Bachelor Thesis',
      description: 'A comprehensive, production-deployed system uniting mathematical foundations, deep learning, and quantum optimization or scientific machine learning with a live web demo and open-source codebase.',
      deliverable: 'Defended Bachelor Thesis + live deployed web application + published technical research paper/report.',
      tags: ['Diploma Thesis', 'Production AI', 'ONNX', 'Quantum ML', 'Fullstack ML'],
    },
  },
]
