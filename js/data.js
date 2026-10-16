// Curated & Ranked repository data for Uday Domadiya
// Ranking based on: stars, originality, technical depth, impact potential, recency

const TOP_PROJECTS = [
  {
    rank: 1,
    name: "AI-Powered-eBook-Generator",
    description: "An AI-powered application that automatically generates fully structured eBooks from any topic. Creates outlines, chapters, subsections and professional PDF output using Google Gemini.",
    language: "Python",
    stars: 1,
    forks: 0,
    tags: ["AI", "Generative", "PDF"],
    url: "https://github.com/udaydomadiya08/AI-Powered-eBook-Generator",
    highlight: "Production-ready generative pipeline",
    architecture: ["Topic Input", "Outline Synthesizer", "Recursive Chapter Expander", "Markdown & Asset Formatter", "ReportLab PDF Engine"],
    keyTech: ["Google Gemini API", "Python ReportLab", "Regex Engine", "Concurrent Generation"],
    challenges: "Enforcing hierarchical coherence across 10+ chapter books with token boundary management and automatic typography layout."
  },
  {
    rank: 2,
    name: "agent.md",
    description: "A plug-and-play skill file that tells any AI agent (Claude, GPT, or any LLM-based system) how to behave safely, reliably, and usefully when operating autonomously.",
    language: "Markdown",
    stars: 1,
    forks: 0,
    tags: ["AI", "Agents", "Standards"],
    url: "https://github.com/udaydomadiya08/agent.md",
    highlight: "Open standard for agent behavior",
    architecture: ["Agent Host Session", "Skill Injection Parser", "Self-Consistency Guardrails", "Deterministic Action Verifier", "Execution Runtime"],
    keyTech: ["Markdown Protocol", "System Prompt Architecture", "Tool Use Guardrails"],
    challenges: "Standardizing cross-model agent personas to eliminate hallucinated tool calls and enforce non-destructive file operations."
  },
  {
    rank: 3,
    name: "Jarvis-AI-Voice-Assistant-for-macOS",
    description: "Advanced AI-powered voice assistant built in Python for macOS. Executes system, web, and communication tasks through natural voice commands using SpeechRecognition.",
    language: "Python",
    stars: 0,
    forks: 1,
    tags: ["AI", "Voice", "Automation"],
    url: "https://github.com/udaydomadiya08/Jarvis-AI-Voice-Assistant-for-macOS",
    highlight: "Full system-level voice control",
    architecture: ["Mic Audio Capture", "Acoustic Feature Extraction", "SpeechRecognition Engine", "Intent Classifier & Dispatcher", "macOS AppleScript / PyObjC"],
    keyTech: ["SpeechRecognition", "PyObjC", "osascript / AppleScript", "pyttsx3 Audio"],
    challenges: "Achieving sub-second voice command dispatch on macOS without high background idle CPU consumption."
  },
  {
    rank: 4,
    name: "SafeGuardian_AI",
    description: "Privacy-First, On-Device Multimodal AI Safety Guardian for Android. Protects users with real-time multimodal analysis without sending data to the cloud.",
    language: "Kotlin",
    stars: 0,
    forks: 0,
    tags: ["Privacy", "Android", "On-Device"],
    url: "https://github.com/udaydomadiya08/SafeGuardian_AI",
    highlight: "On-device multimodal safety",
    architecture: ["CameraX Sensor Feed", "On-Device Neural Model", "Multimodal Risk Scorer", "Safety Interceptor", "Zero-Egress Alert Dispatcher"],
    keyTech: ["Kotlin Native", "Android CameraX", "TFLite / ONNX Mobile", "Jetpack Compose"],
    challenges: "Strict zero-cloud egress guarantee ensuring raw video frames and biometric features never leave hardware memory."
  },
  {
    rank: 5,
    name: "privorai",
    description: "Local Privacy Firewall for LLMs. Guarantees raw user input stays on-device. Hybrid PII detection, context-preserving rewriting, and session-consistent synthetic placeholders.",
    language: "Python",
    stars: 0,
    forks: 0,
    tags: ["Privacy", "LLM", "Security"],
    url: "https://github.com/udaydomadiya08/privorai",
    highlight: "Production privacy layer for AI",
    architecture: ["Raw Prompt Stream", "Hybrid Regex & NER Filter", "Session Tokenizer", "Synthetic Masking Engine", "LLM Proxy", "De-Anonymizer Decoder"],
    keyTech: ["FastAPI", "Hybrid NER / Presidio", "Session Cryptographic Map", "AsyncIO"],
    challenges: "Preserving subtle conversational intent and grammar while stripping all names, IP addresses, credentials, and PII."
  },
  {
    rank: 6,
    name: "TRUST.md",
    description: "A proposed open standard for Human–AI Intent Verification, Transparency, and Trust. Seven principles that make AI systems more trustworthy before they act.",
    language: "Markdown",
    stars: 0,
    forks: 0,
    tags: ["AI", "Standards", "Trust"],
    url: "https://github.com/udaydomadiya08/TRUST.md",
    highlight: "New trust standard for AI",
    architecture: ["Autonomous Agent Plan", "7-Principle Verification", "Intent Signature", "Human Confirmation Gate", "Auditable Execution Log"],
    keyTech: ["Protocol Design", "AI Governance", "Intent Verification Protocol"],
    challenges: "Formulating a deterministic verification framework that scales across autonomous agent architectures."
  },
  {
    rank: 7,
    name: "deep-research-agent",
    description: "AI-powered web research CLI that searches, scrapes, ranks, and synthesizes answers from live web data. Supports local Ollama and API modes — no API keys required for core use.",
    language: "Python",
    stars: 0,
    forks: 0,
    tags: ["AI", "Research", "Agents"],
    url: "https://github.com/udaydomadiya08/deep-research-agent",
    highlight: "Autonomous research pipeline",
    architecture: ["Target Query Input", "Recursive Search Expander", "Concurrent Web Scraper", "Cosine Similarity Ranker", "Ollama / LLM Synthesis"],
    keyTech: ["Python CLI", "Ollama Local LLMs", "BeautifulSoup4 / Async", "Vector Scoring"],
    challenges: "Synthesizing noisy live web text into structured, citation-backed deep-dive reports entirely on local consumer hardware."
  },
  {
    rank: 8,
    name: "Federated-Learning-for-Genomic-Insights",
    description: "Privacy-preserving Federated Learning framework for genomic insights. Multiple clients collaboratively train a shared model without exchanging raw data.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    tags: ["AI", "Privacy", "Healthcare"],
    url: "https://github.com/udaydomadiya08/Federated-Learning-for-Genomic-Insights-A-Privacy-Preserving-Framework",
    highlight: "Privacy-first medical AI",
    architecture: ["Decentralized Clinical Nodes", "Local Model Differential Privacy", "Encrypted Gradient Transport", "FedAvg Aggregator", "Consensus Biomarker Model"],
    keyTech: ["PyTorch", "Differential Privacy", "BioPython", "Federated Averaging"],
    challenges: "Preventing reconstruction and gradient inversion attacks while preserving statistical predictive power on genomic data."
  },
  {
    rank: 9,
    name: "ToxiGraph-GNN-Drug-Toxicity",
    description: "Graph Neural Network framework for drug toxicity prediction. Uses molecular graphs, Morgan fingerprints and RDKit visualization on 378k+ compounds.",
    language: "Python",
    stars: 0,
    forks: 0,
    tags: ["AI", "GNN", "Healthcare"],
    url: "https://github.com/udaydomadiya08/ToxiGraph-A-GNN-Framework-for-Drug-Toxicity-Prediction",
    highlight: "Accelerating drug safety screening",
    architecture: ["SMILES Chemical Sequences", "RDKit Graph Featurizer", "Graph Convolutional Network (GCN)", "Fingerprint Fusion Layer", "Toxicity Classifier"],
    keyTech: ["PyTorch Geometric", "RDKit Chem", "Morgan Molecular Fingerprints", "DeepChem"],
    challenges: "Handling severe class imbalance across 378,000+ molecular compounds with sparse multi-endpoint toxicity labels."
  },
  {
    rank: 10,
    name: "RoomShift_AI",
    description: "AI-powered room transformation and spatial intelligence system. Combines computer vision and generative models for intelligent space understanding.",
    language: "Python",
    stars: 0,
    forks: 0,
    tags: ["AI", "Vision", "Spatial"],
    url: "https://github.com/udaydomadiya08/RoomShift_AI",
    highlight: "Spatial AI experimentation",
    architecture: ["Input Interior Photograph", "Monocular Depth Estimation", "Semantic Space Segmentation", "ControlNet Inpainting", "Photorealistic Render"],
    keyTech: ["PyTorch", "ControlNet Spatial", "OpenCV Vision", "Generative Inpainting"],
    challenges: "Preserving architectural room boundaries and original camera perspective while reimagining furniture and ambient lighting."
  }
];

const TECH_STACK = [
  { 
    id: "pytorch",
    name: "PyTorch & Deep Learning", 
    category: "AI & ML", 
    icon: "🔥", 
    orbit: 1, 
    level: "Advanced", 
    tag: "AI",
    desc: "Custom neural network training, molecular Graph Neural Networks (GNNs), differential privacy loss formulations, and spatial computer vision.",
    projects: ["ToxiGraph-GNN-Drug-Toxicity", "Federated-Learning-for-Genomic-Insights", "RoomShift_AI"]
  },
  { 
    id: "agents",
    name: "Autonomous Agent Protocols", 
    category: "AI & ML", 
    icon: "🤖", 
    orbit: 1, 
    level: "Core Standard", 
    tag: "AI",
    desc: "Standardizing deterministic agent behavior, safety guardrails, self-consistency protocols, and tool execution loops (agent.md, TRUST.md, AEON).",
    projects: ["agent.md", "TRUST.md", "deep-research-agent", "AEON"]
  },
  { 
    id: "llm",
    name: "LLM Orchestration & RAG", 
    category: "AI & ML", 
    icon: "🧠", 
    orbit: 1, 
    level: "Production", 
    tag: "AI",
    desc: "Google Gemini Flash pipelines, local Ollama models, recursive chapter generation, context retrieval, and structured formatting engines.",
    projects: ["AI-Powered-eBook-Generator", "deep-research-agent", "AutoCodeLoop"]
  },
  { 
    id: "privacy",
    name: "Local Privacy Firewalls", 
    category: "Privacy", 
    icon: "🛡️", 
    orbit: 2, 
    level: "Specialized", 
    tag: "Privacy",
    desc: "Zero-egress LLM proxying, hybrid regex + NER PII redaction, session-consistent synthetic token maps, and client-side safety guardrails.",
    projects: ["privorai", "SafeGuardian_AI", "Federated-Learning-for-Genomic-Insights"]
  },
  { 
    id: "python",
    name: "Python Async & Systems", 
    category: "Backend", 
    icon: "🐍", 
    orbit: 2, 
    level: "Expert", 
    tag: "Python",
    desc: "High-concurrency AsyncIO architectures, FastAPI endpoints, multithreaded PDF generation, system-level macOS AppleScript automation.",
    projects: ["Jarvis-AI-Voice-Assistant-for-macOS", "privorai", "deep-research-agent", "AI-Powered-eBook-Generator"]
  },
  { 
    id: "onnx",
    name: "ONNX & Edge Inference", 
    category: "Systems", 
    icon: "⚡", 
    orbit: 2, 
    level: "Production", 
    tag: "AI",
    desc: "Cross-platform model quantization, hardware acceleration, on-device mobile neural runtimes without cloud dependencies.",
    projects: ["SafeGuardian_AI", "ToxiGraph-GNN-Drug-Toxicity"]
  },
  { 
    id: "kotlin",
    name: "Kotlin & Android Native", 
    category: "Mobile", 
    icon: "📱", 
    orbit: 3, 
    level: "Advanced", 
    tag: "Kotlin",
    desc: "CameraX real-time frame interception, Jetpack Compose, background safety services with zero-egress hardware isolation.",
    projects: ["SafeGuardian_AI"]
  },
  { 
    id: "typescript",
    name: "TypeScript & 3D Web", 
    category: "Frontend", 
    icon: "🌐", 
    orbit: 3, 
    level: "Proficient", 
    tag: "TypeScript",
    desc: "Three.js 3D shaders and particle fields, GSAP scroll-triggered storytelling, reactive Tailwind UI engineering.",
    projects: ["openforce", "omniplex-project-uday"]
  },
  { 
    id: "federated",
    name: "Federated Learning & GNNs", 
    category: "Research", 
    icon: "🧬", 
    orbit: 3, 
    level: "Research", 
    tag: "Privacy",
    desc: "Decentralized consensus training (FedAvg), differential privacy noise injection, and molecular graph toxicity classification.",
    projects: ["Federated-Learning-for-Genomic-Insights", "ToxiGraph-GNN-Drug-Toxicity"]
  }
];

const ALL_REPOS = [
  // Top 10 first
  ...TOP_PROJECTS.map(p => ({
    name: p.name,
    description: p.description,
    language: p.language === "Markdown" ? "Other" : p.language,
    stars: p.stars,
    forks: p.forks,
    url: p.url,
    tags: p.tags,
    category: p.tags.includes("Privacy") ? "Privacy" : (p.tags.includes("AI") || p.tags.includes("Agents") ? "AI" : "Other")
  })),

  // Remaining important repos
  {
    name: "openforce",
    description: "Modern JavaScript project focused on force and interaction systems.",
    language: "JavaScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/openforce",
    tags: ["JS"], category: "Other"
  },
  {
    name: "AEON",
    description: "Adaptive Execution Orchestration Network — advanced agent coordination and execution framework.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/AEON",
    tags: ["AI", "Agents"], category: "AI"
  },
  {
    name: "Adaptive-Execution-Orchestration-Network",
    description: "Network for adaptive task execution and orchestration across distributed agents.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/Adaptive-Execution-Orchestration-Network",
    tags: ["AI", "Agents"], category: "AI"
  },
  {
    name: "teach_me_skill",
    description: "Skill teaching and knowledge transfer system for AI agents.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/teach_me_skill",
    tags: ["AI"], category: "AI"
  },
  {
    name: "FactoryIQ",
    description: "Intelligent factory and industrial AI system for process optimization.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/FactoryIQ",
    tags: ["AI", "Industrial"], category: "AI"
  },
  {
    name: "autotrading",
    description: "Automated trading system and strategy experimentation platform.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/autotrading",
    tags: ["Finance", "AI"], category: "AI"
  },
  {
    name: "documentools",
    description: "Document processing and intelligent tools suite.",
    language: "JavaScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/documentools",
    tags: ["Tools"], category: "Other"
  },
  {
    name: "github_Rank",
    description: "GitHub repository ranking and discovery system.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/github_Rank",
    tags: ["Tools"], category: "Other"
  },
  {
    name: "update_top500_githubrepos",
    description: "Automated system to track and update top 500 GitHub repositories.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/update_top500_githubrepos",
    tags: ["Tools"], category: "Other"
  },
  {
    name: "ytplayer",
    description: "YouTube player and media handling utilities.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/ytplayer",
    tags: ["Media"], category: "Other"
  },
  {
    name: "yt-transformer",
    description: "YouTube content transformation and processing pipeline.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/yt-transformer",
    tags: ["Media", "AI"], category: "AI"
  },
  {
    name: "ytdownloader",
    description: "Clean and efficient YouTube downloader tool.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/ytdownloader",
    tags: ["Media"], category: "Other"
  },
  {
    name: "universal-scraper",
    description: "Flexible universal web scraping framework.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/universal-scraper",
    tags: ["Scraping"], category: "Other"
  },
  {
    name: "united-agents",
    description: "Multi-agent collaboration and coordination system.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/united-agents",
    tags: ["AI", "Agents"], category: "AI"
  },
  {
    name: "ai-scientific-research",
    description: "AI tools and pipelines for scientific research acceleration.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/ai-scientific-research",
    tags: ["AI", "Research"], category: "AI"
  },
  {
    name: "image-scraper",
    description: "Intelligent image scraping and collection tool.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/image-scraper",
    tags: ["Scraping"], category: "Other"
  },
  {
    name: "annual_report-extractor",
    description: "Extractor for NSE listed company annual reports — useful for training and analysis.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/annual_report-extractor",
    tags: ["Finance", "Data"], category: "Other"
  },
  {
    name: "basic-edits",
    description: "Basic video and media editing utilities.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/basic-edits",
    tags: ["Media"], category: "Other"
  },
  {
    name: "easy-claw",
    description: "Simplified claw / automation helper scripts.",
    language: "Shell",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/easy-claw",
    tags: ["Tools"], category: "Other"
  },
  {
    name: "alex_assistant",
    description: "Personal AI assistant project.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/alex_assistant",
    tags: ["AI"], category: "AI"
  },
  {
    name: "ai_finance",
    description: "AI-Driven Financial Statement Analysis & Fraud Detection System.",
    language: "JavaScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/ai_finance",
    tags: ["AI", "Finance"], category: "AI"
  },
  {
    name: "ai_portfolio",
    description: "AI-Powered Portfolio Optimization & Risk Intelligence System.",
    language: "JavaScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/ai_portfolio",
    tags: ["AI", "Finance"], category: "AI"
  },
  {
    name: "mars-sim",
    description: "Mars simulation and exploration systems.",
    language: "TypeScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/mars-sim",
    tags: ["Simulation"], category: "Other"
  },
  {
    name: "bioaegis-production",
    description: "Biological / bio-security production systems.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/bioaegis-production",
    tags: ["Bio", "AI"], category: "AI"
  },
  {
    name: "vantix",
    description: "Advanced AI experimentation platform.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/vantix",
    tags: ["AI"], category: "AI"
  },
  {
    name: "aicaptionvideos",
    description: "AI-powered video captioning system.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/aicaptionvideos",
    tags: ["AI", "Media"], category: "AI"
  },
  {
    name: "fictic",
    description: "Creative AI and generation experiments.",
    language: "Jupyter Notebook",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/fictic",
    tags: ["AI", "Creative"], category: "AI"
  },
  {
    name: "credserv-mvp",
    description: "Credential and service management MVP.",
    language: "TypeScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/credserv-mvp",
    tags: ["Backend"], category: "Other"
  },
  {
    name: "ai-video-editor",
    description: "AI Video Editing Style Learning System — learns editing styles and applies them.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/ai-video-editor",
    tags: ["AI", "Media"], category: "AI"
  },
  {
    name: "mailmate",
    description: "Intelligent email companion and automation.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/mailmate",
    tags: ["Productivity"], category: "Other"
  },
  {
    name: "safecity_dashboard",
    description: "AI-powered dashboard for real-time and historical safety insights using public datasets.",
    language: "JavaScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/safecity_dashboard",
    tags: ["AI", "Safety"], category: "AI"
  },
  {
    name: "VIDEOYT",
    description: "YouTube video processing and generation tools.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/VIDEOYT",
    tags: ["Media"], category: "Other"
  },
  {
    name: "nasaspaceapp",
    description: "NASA Space Apps Challenge related project.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/nasaspaceapp",
    tags: ["Space", "AI"], category: "AI"
  },
  {
    name: "auto-video-song-generator",
    description: "Creates song videos from audio input and can upload to YouTube automatically.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/auto-video-song-generator",
    tags: ["Media", "Automation"], category: "Other"
  },
  {
    name: "AI-Powered-eCourse-Generator",
    description: "AI-driven tool that generates structured eCourses from any topic.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/-AI-Powered-eCourse-Generator",
    tags: ["AI", "Education"], category: "AI"
  },
  {
    name: "AutoCodeLoop",
    description: "Intelligent coding assistant that writes, executes, and debugs code in a continuous loop until success.",
    language: "Python",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/AutoCodeLoop",
    tags: ["AI", "Coding"], category: "AI"
  },
  {
    name: "omniplex-project-uday",
    description: "Omniplex — multi-modal and multi-agent project exploration.",
    language: "TypeScript",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/omniplex-project-uday",
    tags: ["AI"], category: "AI"
  },
  {
    name: "nfsMW2005_MAC",
    description: "Need for Speed Most Wanted 2005 related tools for macOS.",
    language: "Shell",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/nfsMW2005_MAC",
    tags: ["Gaming"], category: "Other"
  },
  {
    name: "GTA-VICE-CITY-AND-COUNTER-STRIKE-CZ-1.6-",
    description: "Game-related projects and modifications.",
    language: "C++",
    stars: 0, forks: 0,
    url: "https://github.com/udaydomadiya08/GTA-VICE-CITY-AND-COUNTER-STRIKE-CZ-1.6-",
    tags: ["Gaming"], category: "Other"
  }
];

const RESUME_JOURNEY = [
  {
    period: "Apr 2026 – Jun 2026",
    role: "Finance & Strategy Intern",
    organization: "AMI Life Science",
    category: "industry",
    badge: "M&A Valuation Pipeline",
    metric: "3-5 Days ➔ < 2 Minutes",
    description: "Built the automated acquisition-target valuation engine for pharmaceutical M&A screening, replacing a multi-day manual valuation process with an end-to-end Python pipeline.",
    highlights: [
      "Integrated 4 core data sources: SEC EDGAR & NSE XBRL, corporate annual reports via BM25 + Gemini hybrid retrieval, and Yahoo Finance API.",
      "Engineered auto-population of 301 financial metrics per company with algorithmic confidence scoring.",
      "Achieved 100% field coverage across benchmark test companies, slashing valuation processing time from 3–5 days to under 2 minutes (delivered production v16 with complete documentation)."
    ],
    tech: ["Python", "Google Gemini API", "BM25 Retrieval", "SEC EDGAR", "NSE XBRL", "Corporate Valuation"]
  },
  {
    period: "2025 – 2027",
    role: "MBA in Finance (Major) & Digital Transformation & Analytics (Minor)",
    organization: "Institute of Management, Nirma University (IMNU)",
    category: "education",
    badge: "76.60% Aggregate",
    metric: "Finance + Analytics",
    description: "Postgraduate specialization combining quantitative corporate finance, M&A strategy, and computational analytics.",
    highlights: [
      "Specialized in corporate valuation, financial market structures, algorithmic investment analysis, and digital strategy.",
      "Minor in Digital Transformation & Analytics, bridging quantitative financial strategy with automated machine learning systems."
    ],
    tech: ["Corporate Valuation", "Financial Modeling", "M&A Strategy", "Digital Transformation", "Analytics"]
  },
  {
    period: "Jul 2025 – Aug 2025",
    role: "AI Developer Intern",
    organization: "Kodacy",
    category: "industry",
    badge: "Predictive ML Engineering",
    metric: "Real-World ML",
    description: "Developed and implemented machine learning models on real-world datasets for predictive classification and regression tasks.",
    highlights: [
      "Built and calibrated predictive models using Python, scikit-learn, TensorFlow, and pandas.",
      "Engineered feature transformations, performed hyperparameter optimization, and evaluated model accuracy against production benchmarks."
    ],
    tech: ["Python", "TensorFlow", "scikit-learn", "pandas", "Model Optimization"]
  },
  {
    period: "2022 – 2025",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Institute of Technology, Nirma University",
    category: "education",
    badge: "79.60% Aggregate",
    metric: "Systems & Algorithms",
    description: "Undergraduate degree in Computer Science Engineering with intensive focus on distributed systems, neural networks, and algorithmic problem solving.",
    highlights: [
      "Graduated with 79.60% aggregate, building foundational depth in data structures, algorithms, operating systems, and AI frameworks.",
      "Built flagship academic research projects including ToxiGraph GNN framework, Federated Genomic Learning, and Jarvis AI voice control for macOS."
    ],
    tech: ["Data Structures & Algorithms", "Operating Systems", "Neural Networks", "Distributed Systems"]
  },
  {
    period: "Oct 2024",
    role: "Exoplanet Detection AI Model",
    organization: "NASA Space Apps Challenge",
    category: "research",
    badge: "Astrophysical AI",
    metric: "NASA Exoplanet Transit Data",
    description: "Created a machine learning classification model to detect and classify prospective exoplanets using NASA's deep astrophysical transit telemetry.",
    highlights: [
      "Preprocessed light curve photometry signals from NASA observational databases.",
      "Built neural classifiers to distinguish true planetary transit dips from false positives and stellar noise."
    ],
    tech: ["NASA Observational Data", "Python", "Deep Learning", "Transit Photometry"]
  },
  {
    period: "Feb 2024",
    role: "Multimodal Research Synthesizer",
    organization: "MINeD Hackathon",
    category: "research",
    badge: "Hackathon Builder",
    metric: "Multimodal Synthesis",
    description: "Built an autonomous AI model that ingests dense scientific research papers and automatically synthesizes structured PowerPoint slide decks (PPT) and voice summaries.",
    highlights: [
      "Extracted core theorems, methodology, and empirical results from complex PDF scientific papers.",
      "Generated professional presentation slides and synthesized audio voice summaries during rapid hackathon development."
    ],
    tech: ["Multimodal LLMs", "Document Parsing", "Text-to-Speech", "Automated Slide Synthesis"]
  }
];



const MASTER_IDEAS = [
  {
    "id": "idea-1",
    "rank": 1,
    "title": "AEON — Efficient AI Computing Architecture",
    "shortTitle": "AEON",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Research / Engineering",
    "description": "Develop an AI architecture that improves computational efficiency through adaptive routing, reusable representations, inexpensive probes, and selective execution. The goal is to obtain more useful output from less computation, memory, energy, and latency.",
    "potential": "Targets the core cost and energy constraints of increasingly capable AI systems. Maximizes inference efficiency against strong state-of-the-art baselines.",
    "cluster": "Core Breakthroughs",
    "x": 320,
    "y": 100,
    "magnitude": 10,
    "color": "#fbbf24"
  },
  {
    "id": "idea-2",
    "rank": 2,
    "title": "Cogneeum — An Anti-Attention Social Platform",
    "shortTitle": "Cogneeum",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Social Technology",
    "description": "A text-first social platform designed around meaningful contributions rather than addiction, vanity metrics, endless scrolling, and personal-image competition. AI helps identify low-value or non-contributing posts while supporting constructive discussion.",
    "potential": "A revolutionary human-centered model for online communities, healthier digital interaction, and attention-respecting technology.",
    "cluster": "Core Breakthroughs",
    "x": 220,
    "y": 150,
    "magnitude": 9,
    "color": "#fbbf24"
  },
  {
    "id": "idea-3",
    "rank": 3,
    "title": "Adaptive Heterogeneous Computational Router",
    "shortTitle": "Adaptive Router",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Computing Research",
    "description": "An intelligent computational routing system that directs tasks to the most suitable execution path or hardware resource, balancing accuracy, energy consumption, memory, latency, and computational cost.",
    "potential": "Faster, cheaper computation across AI inference, scientific workloads, and mixed hardware environments.",
    "cluster": "Core Breakthroughs",
    "x": 380,
    "y": 170,
    "magnitude": 9,
    "color": "#fbbf24"
  },
  {
    "id": "idea-4",
    "rank": 4,
    "title": "SenseWear — Discreet Hearing Enhancement",
    "shortTitle": "SenseWear",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Hardware / Accessibility",
    "description": "A compact, earbud-like hearing-enhancement device that amplifies and processes useful speech directly in the ear, without a phone intermediary or the conventional behind-the-ear appearance. Emphasizes affordability, comfort, and discreet industrial design.",
    "potential": "More accessible hearing assistance via direct on-device acoustic filtering, breaking stigma and cost barriers.",
    "cluster": "Core Breakthroughs",
    "x": 160,
    "y": 220,
    "magnitude": 8,
    "color": "#fbbf24"
  },
  {
    "id": "idea-5",
    "rank": 5,
    "title": "RoomShift AI — Spatial Change Intelligence",
    "shortTitle": "RoomShift AI",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Spatial & Robotics",
    "description": "Analyze two phone recordings of the same indoor space, construct a shared spatial representation, identify objects or regions that were added, removed, or moved, and explain the differences in natural language.",
    "potential": "Robotics, indoor 3D mapping, property inspection, automated inventory tracking, and ambient spatial understanding.",
    "cluster": "Core Breakthroughs",
    "x": 270,
    "y": 250,
    "magnitude": 8,
    "color": "#fbbf24"
  },
  {
    "id": "idea-6",
    "rank": 6,
    "title": "SafeGuardian AI / Preventive Intelligence",
    "shortTitle": "SafeGuardian AI",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "AI Safety & Prevention",
    "description": "An AI-based protection concept that seeks to identify warning signs and potential risks before they become serious incidents, rather than responding only after harm occurs. Incorporates proactive risk detection and intervention.",
    "potential": "Next-generation digital safety, proactive threat detection, and preventive assistance with privacy-first on-device execution.",
    "cluster": "Core Breakthroughs",
    "x": 350,
    "y": 260,
    "magnitude": 8,
    "color": "#fbbf24"
  },
  {
    "id": "idea-7",
    "rank": 7,
    "title": "Human Brain Pattern Intelligence",
    "shortTitle": "Brain Pattern AI",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Neuroscience / AI",
    "description": "Investigate whether machine learning can infer useful information about human mental states from neural signals, behavioral patterns, facial muscle activity, or other observable signals, researching datasets and limits of indirect thought inference.",
    "potential": "Breakthrough assistive communication and neuroscience research for motor-impaired individuals.",
    "cluster": "Core Breakthroughs",
    "x": 440,
    "y": 210,
    "magnitude": 8,
    "color": "#fbbf24"
  },
  {
    "id": "idea-8",
    "rank": 8,
    "title": "Federated AI for Longevity Research",
    "shortTitle": "Federated Longevity",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Biomedical Research",
    "description": "Explore privacy-preserving collaborative machine learning across longevity, aging, genomics, epigenetics, and cellular datasets, allowing institutions to develop shared models without centralizing all sensitive patient data.",
    "potential": "Accelerates collaborative aging research, cellular biomarker discovery, and clinical trials while strictly preserving institutional privacy.",
    "cluster": "Core Breakthroughs",
    "x": 430,
    "y": 130,
    "magnitude": 8,
    "color": "#fbbf24"
  },
  {
    "id": "idea-9",
    "rank": 9,
    "title": "Rent Anything — Universal Rental Marketplace",
    "shortTitle": "Rent Anything",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "Marketplace / Business",
    "description": "A platform where anyone can rent items from other people or businesses. The platform connects owners and renters and earns revenue through commissions, platform fees, or advertising, subject to trust, insurance, logistics, and dispute resolution.",
    "potential": "Maximizes utilization of underused high-value physical assets and creates decentralized income opportunities for owners.",
    "cluster": "Core Breakthroughs",
    "x": 180,
    "y": 290,
    "magnitude": 8,
    "color": "#fbbf24"
  },
  {
    "id": "idea-10",
    "rank": 10,
    "title": "Intent-First AI Trust Framework / TrustAI",
    "shortTitle": "TrustAI",
    "category": "core",
    "categoryLabel": "Core Breakthrough",
    "type": "AI Reliability & Standards",
    "description": "A framework for making AI workflows more dependable by emphasizing user intent, evidence verification, traceability, and controlled execution. Check AI outputs and actions against reliable sources and explicit objectives.",
    "potential": "Essential auditing and safety protocol for autonomous agents operating in business, research, and high-consequence enterprise workflows.",
    "cluster": "Core Breakthroughs",
    "x": 310,
    "y": 180,
    "magnitude": 8,
    "color": "#fbbf24"
  },
  {
    "id": "idea-11",
    "rank": 11,
    "title": "Theory Calculator — Beyond Conventional Calculation",
    "shortTitle": "Theory Calculator",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Mathematics / Research",
    "description": "A proposed calculator and mathematical exploration system distinguishing verified numerical computation from theoretical or symbolic reasoning. Makes advanced calculations accessible without presenting conjectures as proven results.",
    "potential": "Bridges symbolic computer algebra and rigorous formal verification for mathematicians and students.",
    "cluster": "Deep Computing",
    "x": 120,
    "y": 350,
    "magnitude": 7,
    "color": "#38bdf8"
  },
  {
    "id": "idea-12",
    "rank": 12,
    "title": "Quantum-Security Research",
    "shortTitle": "Quantum Security",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Cryptography",
    "description": "Investigate cryptographic systems designed to withstand quantum-capable attackers, compare established post-quantum algorithms, and evaluate security assumptions, implementation risks, and possible architectures.",
    "potential": "Prepares critical digital infrastructure for the post-RSA quantum computing transition.",
    "cluster": "Deep Computing",
    "x": 200,
    "y": 370,
    "magnitude": 7,
    "color": "#38bdf8"
  },
  {
    "id": "idea-13",
    "rank": 13,
    "title": "Randomized Encryption Algorithm Concept",
    "shortTitle": "Randomized Encryption",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Cryptography Research",
    "description": "Explore an encryption scheme inspired by randomness, with the goal of making unauthorized decryption computationally infeasible, evaluating formal security bounds and entropy guarantees.",
    "potential": "Investigates mathematical boundaries between pseudo-random entropy injection and provable ciphertext security.",
    "cluster": "Deep Computing",
    "x": 110,
    "y": 430,
    "magnitude": 6,
    "color": "#38bdf8"
  },
  {
    "id": "idea-14",
    "rank": 14,
    "title": "OpenWindow OS — An Open Desktop Operating System",
    "shortTitle": "OpenWindow OS",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Systems / OS Architecture",
    "description": "Build a Windows-inspired desktop operating-system experience with a bootable prototype, system architecture, build pipeline, and emulator-based validation. An independently engineered desktop environment rather than merely reskinning a desktop.",
    "potential": "Independent desktop platform free from Big Tech surveillance and bloatware.",
    "cluster": "Deep Computing",
    "x": 180,
    "y": 460,
    "magnitude": 7,
    "color": "#38bdf8"
  },
  {
    "id": "idea-15",
    "rank": 15,
    "title": "Private, Resource-Efficient Local AI",
    "shortTitle": "Local AI Engine",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Edge AI Systems",
    "description": "Run useful AI models locally on constrained hardware, reducing dependence on paid APIs while improving privacy, memory efficiency, inference speed, and practical accessibility.",
    "potential": "Democratizes intelligent compute without subscription lock-in or telemetry leaks.",
    "cluster": "Deep Computing",
    "x": 260,
    "y": 420,
    "magnitude": 7,
    "color": "#38bdf8"
  },
  {
    "id": "idea-16",
    "rank": 16,
    "title": "Vantix — Automated Digital Product Creation",
    "shortTitle": "Vantix",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Generative Automation",
    "description": "A platform concept for automatically creating educational courses, ebooks, PDFs, and videos using AI, reducing the manual effort required to turn knowledge into digital products.",
    "potential": "Autonomous knowledge synthesis from raw unstructured domain notes into publication-ready multimedia.",
    "cluster": "Deep Computing",
    "x": 310,
    "y": 360,
    "magnitude": 7,
    "color": "#38bdf8"
  },
  {
    "id": "idea-17",
    "rank": 17,
    "title": "EXTRCAT — Institutional Valuation Intelligence",
    "shortTitle": "EXTRCAT Valuation",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Quantitative Finance",
    "description": "An automated valuation framework combining discounted cash flow, comparable-company analysis, net asset value, Monte Carlo simulation, trusted financial data, and rigorous validation for acquisition screening.",
    "potential": "Delivers institutional-grade investment screening in seconds rather than multi-day manual spreadsheet cycles.",
    "cluster": "Deep Computing",
    "x": 280,
    "y": 490,
    "magnitude": 8,
    "color": "#38bdf8"
  },
  {
    "id": "idea-18",
    "rank": 18,
    "title": "Autonomous Dynamic Portfolio Intelligence Engine",
    "shortTitle": "Dynamic Portfolio",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Quantitative Investment",
    "description": "A quantitative investment system exploring adaptive strategy selection, market-state estimation, news-sensitive risk controls, and portfolio execution with paper/live trading integration.",
    "potential": "Self-adapting quantitative asset allocator responding in real-time to macro volatility shifts.",
    "cluster": "Deep Computing",
    "x": 220,
    "y": 540,
    "magnitude": 7,
    "color": "#38bdf8"
  },
  {
    "id": "idea-19",
    "rank": 19,
    "title": "AEGIS — AI Security Infrastructure",
    "shortTitle": "AEGIS Security",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Cybersecurity & AI",
    "description": "A security-oriented software project represented by an AEGIS-Core prototype, enforcing verification and guardrails for autonomous agents against prompt injection and tool abuse.",
    "potential": "Crucial runtime containment firewall for autonomous multi-agent toolchains.",
    "cluster": "Deep Computing",
    "x": 140,
    "y": 520,
    "magnitude": 7,
    "color": "#38bdf8"
  },
  {
    "id": "idea-20",
    "rank": 20,
    "title": "Evidence-Driven AI Research and Validation",
    "shortTitle": "Evidence AI Validation",
    "category": "deep-tech",
    "categoryLabel": "Deep Computing",
    "type": "Methodology & Standards",
    "description": "A recurring research principle across projects: turn ambitious technical claims into testable hypotheses, reproducible experiments, baselines, ablations, and evidence-backed reports.",
    "potential": "Establishes scientific rigor and reproducibility in modern AI experimentation.",
    "cluster": "Deep Computing",
    "x": 320,
    "y": 450,
    "magnitude": 6,
    "color": "#38bdf8"
  },
  {
    "id": "idea-21",
    "rank": 21,
    "title": "YTTransformer — AI-Powered Video Creation",
    "shortTitle": "YTTransformer",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "Video Automation",
    "description": "A desktop application that turns a topic into a video workflow using AI-generated scripts, YouTube clip discovery, transcript and timestamp matching, clip trimming, synthetic narration, and audio mixing.",
    "potential": "Cuts long-form video production from days to minutes with automated footage alignment.",
    "cluster": "Software & Automation",
    "x": 420,
    "y": 370,
    "magnitude": 7,
    "color": "#34d399"
  },
  {
    "id": "idea-22",
    "rank": 22,
    "title": "YTPlayer — Narration-Synchronized Clip Player",
    "shortTitle": "YTPlayer",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "Desktop Media App",
    "description": "A cross-platform desktop application that plays selected YouTube clips in sequence to accompany AI-generated narration.",
    "potential": "Enables instant live audio-visual presentation assembly without rendering monolithic MP4 files.",
    "cluster": "Software & Automation",
    "x": 480,
    "y": 350,
    "magnitude": 6,
    "color": "#34d399"
  },
  {
    "id": "idea-23",
    "rank": 23,
    "title": "Cross-Platform YouTube Downloader",
    "shortTitle": "YT Downloader",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "Developer Utility",
    "description": "A free, open-source command-line and desktop GUI tool for downloading YouTube videos, designed to operate without a dedicated backend server.",
    "potential": "Zero-telemetry client-side media extraction for researchers, educators, and offline archivists.",
    "cluster": "Software & Automation",
    "x": 460,
    "y": 420,
    "magnitude": 6,
    "color": "#34d399"
  },
  {
    "id": "idea-24",
    "rank": 24,
    "title": "MailMate — AI Email Intelligence",
    "shortTitle": "MailMate",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "Productivity AI",
    "description": "An AI email-management application concept with inbox summarization, priority classification, explanations of importance, and suggested action items.",
    "potential": "Solves email overload by transforming unorganized inboxes into an actionable executive summary.",
    "cluster": "Software & Automation",
    "x": 400,
    "y": 470,
    "magnitude": 6,
    "color": "#34d399"
  },
  {
    "id": "idea-25",
    "rank": 25,
    "title": "OpenForce — Metadata-Driven CRM",
    "shortTitle": "OpenForce CRM",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "Enterprise Software",
    "description": "A CRM engineering project with configurable custom objects, typed fields, relationships, dynamic forms, record management, multi-tenant isolation, role-based access control, and automated tests.",
    "potential": "Open, modular enterprise alternative to costly Salesforce licenses for modern growth teams.",
    "cluster": "Software & Automation",
    "x": 500,
    "y": 480,
    "magnitude": 7,
    "color": "#34d399"
  },
  {
    "id": "idea-26",
    "rank": 26,
    "title": "Automated YouTube Channel Management",
    "shortTitle": "Channel Automation",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "API Automation",
    "description": "An automation system for video publishing, playlists, metadata optimization, and channel analytics through the YouTube Data API.",
    "potential": "Enables hands-free multi-channel publication pipelines with automated SEO tagging.",
    "cluster": "Software & Automation",
    "x": 560,
    "y": 410,
    "magnitude": 6,
    "color": "#34d399"
  },
  {
    "id": "idea-27",
    "rank": 27,
    "title": "AI Portfolio Website Builder",
    "shortTitle": "AI Portfolio Builder",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "Web Automation",
    "description": "A concept for generating a personal portfolio website from a user's input, producing a customized web presence with automatically generated HTML, CSS, and JavaScript.",
    "potential": "Turns developer GitHub profiles and resumes into high-aesthetic interactive web experiences instantly.",
    "cluster": "Software & Automation",
    "x": 580,
    "y": 470,
    "magnitude": 6,
    "color": "#34d399"
  },
  {
    "id": "idea-28",
    "rank": 28,
    "title": "Autonomous AI Workflow Platform",
    "shortTitle": "Autonomous Workflows",
    "category": "software",
    "categoryLabel": "Software Products",
    "type": "Orchestration Engine",
    "description": "A broader automation direction connecting AI models, tools, and application workflows to execute multi-step tasks with minimal manual intervention.",
    "potential": "Bridges multi-modal foundational models with real desktop and web APIs for true hands-off productivity.",
    "cluster": "Software & Automation",
    "x": 510,
    "y": 550,
    "magnitude": 7,
    "color": "#34d399"
  },
  {
    "id": "idea-29",
    "rank": 29,
    "title": "Clara Explains",
    "shortTitle": "Clara Explains",
    "category": "business",
    "categoryLabel": "Business & Platforms",
    "type": "Digital Media",
    "description": "A faceless AI-assisted educational YouTube channel covering technology, science, finance, health, and motivation.",
    "potential": "High-margin digital education brand powered by automated scripting, narration, and editing workflows.",
    "cluster": "Platforms & Ventures",
    "x": 670,
    "y": 380,
    "magnitude": 6,
    "color": "#fb7185"
  },
  {
    "id": "idea-30",
    "rank": 30,
    "title": "AI Digital Knowledge Business",
    "shortTitle": "Knowledge Business",
    "category": "business",
    "categoryLabel": "Business & Platforms",
    "type": "Commercial Platform",
    "description": "Create and monetize courses, ebooks, videos, and memberships through AI-assisted content production and distribution.",
    "potential": "Scalable content monetization engine leveraging automated multi-format publishing.",
    "cluster": "Platforms & Ventures",
    "x": 740,
    "y": 360,
    "magnitude": 6,
    "color": "#fb7185"
  },
  {
    "id": "idea-31",
    "rank": 31,
    "title": "Universal Rental Economy",
    "shortTitle": "Rental Economy",
    "category": "business",
    "categoryLabel": "Business & Platforms",
    "type": "Marketplace Expansion",
    "description": "The Rent Anything concept expanded into a trust-based marketplace for underutilized physical assets with insurance and dispute guarantees.",
    "potential": "Creates a circular peer-to-peer asset sharing economy reducing waste and financial barriers.",
    "cluster": "Platforms & Ventures",
    "x": 800,
    "y": 420,
    "magnitude": 7,
    "color": "#fb7185"
  },
  {
    "id": "idea-32",
    "rank": 32,
    "title": "Automated Creator Studio",
    "shortTitle": "Creator Studio",
    "category": "business",
    "categoryLabel": "Business & Platforms",
    "type": "Creative SaaS",
    "description": "A unified workflow for scripts, narration, footage selection, video editing, thumbnails, and publishing across YouTube, TikTok, and Instagram.",
    "potential": "All-in-one content creation cockpit reducing studio overhead by 90%.",
    "cluster": "Platforms & Ventures",
    "x": 710,
    "y": 450,
    "magnitude": 6,
    "color": "#fb7185"
  },
  {
    "id": "idea-33",
    "rank": 33,
    "title": "Personal Work Portfolio Hub",
    "shortTitle": "Work Portfolio Hub",
    "category": "business",
    "categoryLabel": "Business & Platforms",
    "type": "Professional Platform",
    "description": "A centralized website connecting projects, GitHub repositories, research, demonstrations, professional profiles, and publications.",
    "potential": "Reinvents developer identity beyond flat static resumes into dynamic, interactive proof-of-work hubs.",
    "cluster": "Platforms & Ventures",
    "x": 660,
    "y": 520,
    "magnitude": 6,
    "color": "#fb7185"
  },
  {
    "id": "idea-34",
    "rank": 34,
    "title": "AI-Assisted Research Publishing",
    "shortTitle": "Research Publishing",
    "category": "business",
    "categoryLabel": "Business & Platforms",
    "type": "Academic Tooling",
    "description": "Use automation to produce structured research reports, evidence dossiers, technical documentation, and reproducible experiment summaries.",
    "potential": "Accelerates scientific dissemination by turning messy research lab notebooks into formatted whitepapers.",
    "cluster": "Platforms & Ventures",
    "x": 760,
    "y": 510,
    "magnitude": 6,
    "color": "#fb7185"
  },
  {
    "id": "idea-35",
    "rank": 35,
    "title": "Subvocal / Silent-Speech Intelligence",
    "shortTitle": "Subvocal Speech",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Biomedical Interface",
    "description": "Investigate whether subtle facial muscle signals, subvocal activity, or neural signals can support communication without audible speech.",
    "potential": "Enables private, inaudible digital interaction and speech restoration for individuals with vocal fold trauma.",
    "cluster": "Frontier Science",
    "x": 560,
    "y": 150,
    "magnitude": 7,
    "color": "#c084fc"
  },
  {
    "id": "idea-36",
    "rank": 36,
    "title": "Brain–Computer Interface Cap",
    "shortTitle": "BCI Wearable Cap",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Neurotechnology",
    "description": "Explore a wearable interface for acquiring brain signals and connecting them to computational systems for assistive or experimental applications.",
    "potential": "Non-invasive neuro-control for devices, synthetic telepathy research, and accessibility.",
    "cluster": "Frontier Science",
    "x": 630,
    "y": 100,
    "magnitude": 7,
    "color": "#c084fc"
  },
  {
    "id": "idea-37",
    "rank": 37,
    "title": "Longevity and Biological Immortality Research",
    "shortTitle": "Biological Immortality",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Cellular & Aging Biology",
    "description": "Overarching ambition to investigate aging mechanisms, cellular rejuvenation, and whether biological lifespan can be substantially extended. Long-term research direction.",
    "potential": "Tackles fundamental causes of senescent decay and systemic organ degradation.",
    "cluster": "Frontier Science",
    "x": 720,
    "y": 80,
    "magnitude": 8,
    "color": "#c084fc"
  },
  {
    "id": "idea-38",
    "rank": 38,
    "title": "Scientific AI for Chemical Toxicity",
    "shortTitle": "Chemical Toxicity AI",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Computational Biology / GNN",
    "description": "Apply machine learning to chemical datasets to predict mutagenicity or toxicity, using molecular features, graph neural networks, and rigorous evaluation (ToxiGraph).",
    "potential": "Accelerates pharmaceutical drug candidate screening while eliminating unnecessary animal testing.",
    "cluster": "Frontier Science",
    "x": 640,
    "y": 190,
    "magnitude": 7,
    "color": "#c084fc"
  },
  {
    "id": "idea-39",
    "rank": 39,
    "title": "AI-Powered Financial Intelligence",
    "shortTitle": "Financial Intelligence",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "FinTech / Capital Markets",
    "description": "Build tools that combine financial statement analysis, company screening, valuation methods, and decision-support workflows.",
    "potential": "Empowers retail and boutique investors with automated algorithmic fundamentals analysis.",
    "cluster": "Frontier Science",
    "x": 580,
    "y": 240,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-40",
    "rank": 40,
    "title": "RAG Agent Infrastructure",
    "shortTitle": "RAG Infrastructure",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Information Retrieval",
    "description": "Investigate retrieval-augmented generation architectures, vector database selection, source-grounded responses, and efficient knowledge retrieval for AI agents.",
    "potential": "Eliminates LLM hallucinations through strict semantic grounding in verified corporate corpora.",
    "cluster": "Frontier Science",
    "x": 710,
    "y": 180,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-41",
    "rank": 41,
    "title": "AI Agent Skills and Prompt Engineering",
    "shortTitle": "Agent Protocols",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Agent Architecture",
    "description": "Formalize reusable prompting methods and agent skills so AI systems can execute complex tasks more reliably and consistently.",
    "potential": "Provides foundational standardization for modular tool execution across disparate LLM agents.",
    "cluster": "Frontier Science",
    "x": 780,
    "y": 130,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-42",
    "rank": 42,
    "title": "Automated Technical Research Pipeline",
    "shortTitle": "Research Pipeline",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Scientific Workflows",
    "description": "A reusable system for turning research questions into literature reviews, technical proposals, experiments, validation reports, and project handoffs.",
    "potential": "Compresses research lifecycles by automating tedious literature synthesis and protocol generation.",
    "cluster": "Frontier Science",
    "x": 850,
    "y": 110,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-43",
    "rank": 43,
    "title": "AI-Powered Portfolio and Project Presentation",
    "shortTitle": "Presentation Engine",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Showcase Systems",
    "description": "Automatically transform code repositories, project documentation, research results, and demonstrations into polished portfolio entries.",
    "potential": "Ensures technical innovators spend time building rather than formatting showcase decks.",
    "cluster": "Frontier Science",
    "x": 860,
    "y": 190,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-44",
    "rank": 44,
    "title": "Accessible AI on Low-Cost Hardware",
    "shortTitle": "Low-Cost Hardware AI",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Edge Computing",
    "description": "Reduce the hardware barrier to AI by optimizing inference and building practical local systems for devices with limited RAM, energy, and processing power.",
    "potential": "Brings neural compute to developing regions, Raspberry Pis, and low-cost consumer electronics.",
    "cluster": "Frontier Science",
    "x": 760,
    "y": 250,
    "magnitude": 7,
    "color": "#c084fc"
  },
  {
    "id": "idea-45",
    "rank": 45,
    "title": "VR Gaming With Existing Consumer Hardware",
    "shortTitle": "Consumer VR Gaming",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Immersive Tech",
    "description": "Explore low-cost ways to use a smartphone, headset, and computer for immersive gaming without expensive dedicated equipment.",
    "potential": "Eliminates the $1,000+ hardware threshold for spatial gaming adoption.",
    "cluster": "Frontier Science",
    "x": 830,
    "y": 270,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-46",
    "rank": 46,
    "title": "AI-Generated Educational Media",
    "shortTitle": "Educational Media",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "EdTech",
    "description": "Automatically create short educational videos with scripts, synthetic voices, visuals, and platform-ready metadata.",
    "potential": "Personalized visual learning modules tailored to individual student learning curves.",
    "cluster": "Frontier Science",
    "x": 920,
    "y": 160,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-47",
    "rank": 47,
    "title": "AI for Scientific and Mathematical Exploration",
    "shortTitle": "Math Exploration AI",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Scientific Computing",
    "description": "Develop tools that help investigate mathematical hypotheses and scientific questions while separating computed results, approximations, conjectures, and proven statements.",
    "potential": "Assists researchers in discovering mathematical conjectures and finding symbolic proofs.",
    "cluster": "Frontier Science",
    "x": 900,
    "y": 240,
    "magnitude": 6,
    "color": "#c084fc"
  },
  {
    "id": "idea-48",
    "rank": 48,
    "title": "Sustainable, Accessible Technology",
    "shortTitle": "Sustainable Tech",
    "category": "frontier",
    "categoryLabel": "Frontier Science",
    "type": "Engineering Philosophy",
    "description": "A recurring design philosophy across hardware and software concepts: maximize useful output while minimizing cost, energy, compute, and unnecessary complexity.",
    "potential": "Core guiding ethos ensuring technologies remain environmentally sustainable and universally accessible.",
    "cluster": "Frontier Science",
    "x": 950,
    "y": 100,
    "magnitude": 7,
    "color": "#c084fc"
  },
  {
    "id": "idea-49",
    "rank": 49,
    "title": "Preventive Intelligence System",
    "shortTitle": "Preventive Blueprint",
    "category": "frameworks",
    "categoryLabel": "Research Blueprints",
    "type": "Documented Blueprint",
    "description": "A documented public concept and technical blueprint for using AI to identify potential risks proactively and support earlier intervention.",
    "potential": "Defines proactive threat classification methodologies before real-world catastrophic failure triggers.",
    "cluster": "Research Blueprints",
    "x": 870,
    "y": 380,
    "magnitude": 7,
    "color": "#fb923c"
  },
  {
    "id": "idea-50",
    "rank": 50,
    "title": "Intent-First AI Trust Framework",
    "shortTitle": "Trust Blueprint",
    "category": "frameworks",
    "categoryLabel": "Research Blueprints",
    "type": "Technical Blueprint",
    "description": "A research and technical blueprint focused on making AI workflows follow user intent, verify evidence, and produce more accountable outputs.",
    "potential": "Provides rigorous formalization for agent accountability and verifiable output proofs.",
    "cluster": "Research Blueprints",
    "x": 950,
    "y": 360,
    "magnitude": 7,
    "color": "#fb923c"
  },
  {
    "id": "idea-51",
    "rank": 51,
    "title": "Adaptive Computational Routing Research",
    "shortTitle": "Adaptive Routing Research",
    "category": "frameworks",
    "categoryLabel": "Research Blueprints",
    "type": "Research Proposal",
    "description": "A research proposal for selecting computation paths adaptively to balance efficiency and output quality across heterogeneous execution environments.",
    "potential": "Algorithmic foundation for mixed hardware scheduling across CPU, GPU, NPU, and cloud accelerators.",
    "cluster": "Research Blueprints",
    "x": 900,
    "y": 450,
    "magnitude": 7,
    "color": "#fb923c"
  },
  {
    "id": "idea-52",
    "rank": 52,
    "title": "AEON Learned-Invariant & Structural Routing Experiments",
    "shortTitle": "AEON Invariants",
    "category": "frameworks",
    "categoryLabel": "Research Blueprints",
    "type": "Technical Experiments",
    "description": "A series of technical experiments exploring learned invariants, structural routing, latent state, counterfactual control, memory affordances, and cheap-probe strategies within AEON.",
    "potential": "Empirical verification of selective execution savings on deep neural architectures.",
    "cluster": "Research Blueprints",
    "x": 980,
    "y": 440,
    "magnitude": 7,
    "color": "#fb923c"
  },
  {
    "id": "idea-53",
    "rank": 53,
    "title": "Maximum-Efficiency AI Architecture",
    "shortTitle": "Max-Efficiency Vision",
    "category": "frameworks",
    "categoryLabel": "Research Blueprints",
    "type": "Architectural Vision",
    "description": "A broader architectural vision for improving AI capability per unit of computation through efficient model design, routing, reuse, and execution.",
    "potential": "Long-term theoretical roadmap toward green, ubiquitous superintelligence.",
    "cluster": "Research Blueprints",
    "x": 930,
    "y": 530,
    "magnitude": 8,
    "color": "#fb923c"
  }
];

const CONSTELLATION_LINES = [
  [
    "idea-1",
    "idea-2"
  ],
  [
    "idea-1",
    "idea-3"
  ],
  [
    "idea-1",
    "idea-8"
  ],
  [
    "idea-2",
    "idea-4"
  ],
  [
    "idea-3",
    "idea-5"
  ],
  [
    "idea-3",
    "idea-6"
  ],
  [
    "idea-3",
    "idea-7"
  ],
  [
    "idea-5",
    "idea-9"
  ],
  [
    "idea-6",
    "idea-10"
  ],
  [
    "idea-10",
    "idea-1"
  ],
  [
    "idea-8",
    "idea-7"
  ],
  [
    "idea-11",
    "idea-12"
  ],
  [
    "idea-12",
    "idea-13"
  ],
  [
    "idea-13",
    "idea-14"
  ],
  [
    "idea-14",
    "idea-19"
  ],
  [
    "idea-12",
    "idea-15"
  ],
  [
    "idea-15",
    "idea-16"
  ],
  [
    "idea-15",
    "idea-17"
  ],
  [
    "idea-17",
    "idea-18"
  ],
  [
    "idea-17",
    "idea-20"
  ],
  [
    "idea-21",
    "idea-22"
  ],
  [
    "idea-21",
    "idea-23"
  ],
  [
    "idea-23",
    "idea-24"
  ],
  [
    "idea-23",
    "idea-25"
  ],
  [
    "idea-22",
    "idea-26"
  ],
  [
    "idea-25",
    "idea-27"
  ],
  [
    "idea-25",
    "idea-28"
  ],
  [
    "idea-29",
    "idea-30"
  ],
  [
    "idea-30",
    "idea-31"
  ],
  [
    "idea-29",
    "idea-32"
  ],
  [
    "idea-32",
    "idea-33"
  ],
  [
    "idea-32",
    "idea-34"
  ],
  [
    "idea-35",
    "idea-36"
  ],
  [
    "idea-36",
    "idea-37"
  ],
  [
    "idea-35",
    "idea-38"
  ],
  [
    "idea-38",
    "idea-39"
  ],
  [
    "idea-38",
    "idea-40"
  ],
  [
    "idea-37",
    "idea-41"
  ],
  [
    "idea-41",
    "idea-42"
  ],
  [
    "idea-42",
    "idea-43"
  ],
  [
    "idea-40",
    "idea-44"
  ],
  [
    "idea-44",
    "idea-45"
  ],
  [
    "idea-43",
    "idea-46"
  ],
  [
    "idea-46",
    "idea-47"
  ],
  [
    "idea-42",
    "idea-48"
  ],
  [
    "idea-49",
    "idea-50"
  ],
  [
    "idea-49",
    "idea-51"
  ],
  [
    "idea-50",
    "idea-52"
  ],
  [
    "idea-51",
    "idea-52"
  ],
  [
    "idea-51",
    "idea-53"
  ],
  [
    "idea-1",
    "idea-15"
  ],
  [
    "idea-7",
    "idea-35"
  ],
  [
    "idea-3",
    "idea-21"
  ],
  [
    "idea-28",
    "idea-33"
  ],
  [
    "idea-44",
    "idea-49"
  ],
  [
    "idea-34",
    "idea-49"
  ]
];
