const SCHOLAR =
  "https://scholar.google.com/citations?user=4hveYIAAAAAJ&hl=en";
export const VMR_LAB = "https://vantam.github.io/";
export const GITHUB = "https://github.com/kunalagrawal2611";
export const CV_PATH = "/Kunal_Agrawal_CV.pdf";

export const personal = {
  name: "Kunal Agrawal",
  title: "PhD · ML Engineer · Computer Vision & Generative AI",
  headline: "I build AI systems that see, understand, and remember.",
  tagline:
    "PhD researcher at the University of Dayton VMR Lab — shipping computer vision, generative AI, and open-source ML tools for research and industry.",
  email: "kunalagarwal2611@gmail.com",
  phone: "+1 (937) 993-2108",
  location: "Dayton, OH",
  summary:
    "I build AI systems that see, understand, and remember. PhD researcher in computer vision at the University of Dayton (GPA 3.96), working in the Vision & Mixed Reality Lab under Dr. Tam Nguyen. Published across Machine Vision and Applications, SoICT, CISS, and the British Journal of Ophthalmology, with work under review at IEEE TMM and ACM MM. I ship research-grade ML — from SeMemo and SALOCON to AEye and multi-modal valuation pipelines — plus open-source tools in TypeScript, Python, and Kotlin. AWS Certified; open to ML engineering and computer vision research roles.",
  links: {
    scholar: SCHOLAR,
    linkedin: "https://www.linkedin.com/in/kunal-agrawal-phd/",
    github: GITHUB,
    vmrLab: VMR_LAB,
  },
  profile: {
    linkedinUsername: "kunal-agrawal-phd",
    localImage: "/profile.jpg?v=3",
  },
};

export const featuredWork = [
  {
    label: "Ollama Dashboard",
    description:
      "Self-hosted AI coding assistant with agentic tool-use — Next.js, Hono, and local Ollama.",
    href: `${GITHUB}/ollama-dashboard`,
    tag: "Flagship OSS",
  },
  {
    label: "SeMemo",
    description:
      "Generative AI dataset for visual working memory — journal submission at IEEE TMM.",
    href: "#research",
    tag: "IEEE TMM",
  },
  {
    label: "SALOCON",
    description:
      "3,000-image saliency dataset and context-aware detection — under review at ACM MM.",
    href: `${GITHUB}/SALOCON`,
    tag: "ACM MM '26",
  },
];

export const stats = [
  { label: "Publications", value: "12", suffix: "+" },
  { label: "PhD GPA", value: "3.96", suffix: "" },
  { label: "MS GPA", value: "4.00", suffix: "" },
  { label: "AWS Cloud", value: "CP", suffix: "" },
];

export const education = [
  {
    degree: "Ph.D. Computer Science",
    school: "University of Dayton",
    period: "Aug 2024 — May 2027 (Expected)",
    gpa: "3.96",
    focus:
      "Vision & Mixed Reality Lab · Dr. Tam Nguyen — Saliency Detection, Scene Graph Generation, Visual Working Memory, Multi-modal Data Fusion",
    award: "Research and Scholarship Award (Doctoral Student)",
  },
  {
    degree: "M.S. Computer Science",
    school: "University of Dayton",
    period: "Jan 2022 — Dec 2023",
    gpa: "4.00",
    focus: null,
    award: "Outstanding Graduate Student in Computer Science Award",
  },
  {
    degree: "B.E. Information Technology",
    school: "Shri Ramdeobaba College of Engineering and Management, India",
    period: "May 2021",
    gpa: "3.66",
    focus: null,
    award: null,
  },
];

export const experience = [
  {
    role: "Graduate Research Assistant (PhD)",
    org: "University of Dayton",
    period: "Aug 2024 — Present",
    type: "research" as const,
    highlights: [
      "Advisor: Dr. Tam Nguyen · Vision & Mixed Reality Lab.",
      "Developed the SeMemo dataset using Generative AI to disentangle semantic content from low-level visual features for Visual Working Memory analysis.",
      "Engineered a multi-modal house price prediction framework integrating street-view visual features, interior attributes, and macro-economic data using XGBoost and Neural Networks.",
      "Spearheaded AEye — automated avian monitoring from high-resolution streaming video.",
      "Researched object-level visual attention and saliency detection via Scene Graphs and Kosmos-2 vision-language models.",
    ],
    tags: ["Generative AI", "Multi-modal Fusion", "Scene Graphs", "VWM"],
  },
  {
    role: "AI in Action Job Simulation",
    org: "Vista Equity Partners",
    period: "Jan 2026",
    type: "industry" as const,
    highlights: [
      "Applied Vista's four-part prompt engineering framework to synthesize NPS survey feedback into executive-ready insights, improving output clarity by >50%.",
      "Designed repeatable GenAI workflow automations for news aggregation, data reconciliation, and qualitative insight summarization.",
      "Implemented guardrails and refinement techniques that significantly reduced error rates and increased stakeholder usability.",
    ],
    tags: ["Prompt Engineering", "GenAI", "Workflow Automation"],
  },
  {
    role: "Research Assistant",
    org: "University of Dayton",
    period: "Aug 2023 — Aug 2024",
    type: "research" as const,
    highlights: [
      "Built a deep learning model to detect motorcyclists riding without helmets from Vietnam surveillance video.",
      "Trained on daytime and nighttime footage for lighting robustness; results integrated into a city planning simulator.",
      "Presented at the 2023 University of Dayton Stander Symposium (Computer Science track).",
    ],
    tags: ["Object Detection", "Traffic Safety", "Python"],
  },
  {
    role: "Graduate Research Assistant (Master's)",
    org: "University of Dayton",
    period: "Aug 2022 — Dec 2023",
    type: "research" as const,
    highlights: [
      "Achieved 89% accuracy in traffic video anomaly detection; developed robust cryptocurrency price prediction models.",
      "Boosted overall working efficiency by 20% through advanced ML and data analysis algorithms.",
      "Compiled 10,000 annotated images and 5,000 hours of video for real-time detection model training.",
    ],
    tags: ["Anomaly Detection", "Computer Vision", "Deep Learning"],
  },
  {
    role: "Research Intern",
    org: "Tan Tock Seng Hospital, Singapore",
    period: "June 2022 — July 2022",
    type: "research" as const,
    highlights: [
      "Healthcare data science on three datasets with 2,000+ patients each, extracting diagnostic insights.",
      "Built automated image segmentation tool for Granuloma detection across 60,000+ medical images using ImageJ and R.",
    ],
    tags: ["Healthcare AI", "Medical Imaging", "Segmentation"],
  },
  {
    role: "Student Manager",
    org: "University of Dayton · Dining Services",
    period: "Sep 2021 — Aug 2022",
    type: "operations" as const,
    highlights: [
      "Supervised student workers across daily dining operations and coordinated task assignments.",
      "Managed budget tracking, inventory maintenance, and supply ordering workflows.",
      "Built relationships with students, faculty, and industry professionals.",
    ],
    tags: ["Team Leadership", "Operations", "Budgeting"],
  },
];

export const publications = {
  underReview: [
    {
      title: "SALOCON: Salient Object Detection in Context",
      venue: "ACM International Conference on Multimedia (ACM MM), 2026",
      status: "Under Review",
      authors: "K. Agrawal et al.",
      links: [
        { label: "Scholar", url: SCHOLAR },
        { label: "VMR Lab", url: VMR_LAB },
      ],
    },
    {
      title: "Semantic Matters in Short-Term Image Memorability",
      venue: "IEEE Transactions on Multimedia (IEEE TMM)",
      status: "Under Review",
      authors: "K. Agrawal et al.",
      links: [
        { label: "Scholar", url: SCHOLAR },
        { label: "VMR Lab", url: VMR_LAB },
      ],
    },
    {
      title: "Furniture Matters in House Price Valuation",
      venue: "Informatica, 2026",
      status: "Under Review",
      authors: "A. Yousif, K. Agrawal et al.",
      links: [{ label: "Scholar", url: SCHOLAR }],
    },
    {
      title: "AEye2: Hybrid Day-Night Avian Monitoring",
      venue: "Informatica, 2026",
      status: "Under Review",
      authors: "K. Jamale, K. Agrawal et al.",
      links: [{ label: "Scholar", url: SCHOLAR }],
    },
    {
      title: "House Price Prediction via Attribute, Visual, and Economic Features",
      venue: "International Symposium on Information and Communication Technology (SoICT), 2025",
      status: "To Appear",
      authors: "A. Yousif, K. Agrawal et al.",
      links: [{ label: "Scholar", url: SCHOLAR }],
    },
    {
      title: "AEye: Avian Monitoring from Streaming Videos",
      venue: "International Symposium on Information and Communication Technology (SoICT), 2025",
      status: "To Appear",
      authors: "K. Jamale, K. Agrawal et al.",
      links: [{ label: "Scholar", url: SCHOLAR }],
    },
  ],
  published: [
    {
      title: "Dietary omega-3 polyunsaturated fatty acids as a protective factor of myopia",
      venue: "British Journal of Ophthalmology, 2025",
      status: "Published",
      authors: "X. J. Zhang et al., K. Agrawal",
      links: [
        { label: "DOI", url: "https://doi.org/10.1136/bjo-2024-326872" },
        { label: "Scholar", url: SCHOLAR },
      ],
    },
    {
      title: "Towards safer roads: benchmarking object detection models in complex weather scenarios",
      venue: "Machine Vision and Applications, 2025",
      status: "Published",
      authors: "B. T. Tran-Le et al., K. Agrawal",
      links: [
        { label: "DOI", url: "https://doi.org/10.1007/s00138-025-01709-5" },
        { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10646898" },
      ],
    },
    {
      title: "Motorcycle Helmet Detection Benchmarking",
      venue: "International Symposium on Information and Communication Technology, 2024",
      status: "Published",
      authors: "K. Agrawal et al.",
      links: [
        { label: "DOI", url: "https://doi.org/10.1007/978-981-96-4282-3_17" },
        { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10599372" },
      ],
    },
    {
      title: "Motion Analysis in Static Images",
      venue: "International Symposium on Information and Communication Technology, 2024",
      status: "Published",
      authors: "K. Agrawal et al.",
      links: [
        { label: "DOI", url: "https://doi.org/10.1007/978-981-96-4282-3_16" },
        { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10599368" },
      ],
    },
    {
      title: "Image de-photobombing benchmark",
      venue: "Multimedia Tools and Applications, 2024",
      status: "Published",
      authors: "V. S. Patel, K. Agrawal et al.",
      links: [
        { label: "DOI", url: "https://doi.org/10.1007/s11042-024-19102-1" },
        {
          label: "Springer",
          url: "https://link.springer.com/article/10.1007/s11042-024-19102-1",
        },
      ],
    },
    {
      title: "A comprehensive analysis of object detectors in adverse weather conditions",
      venue: "58th Annual Conference on Information Sciences and Systems (CISS), 2024",
      status: "Published",
      authors: "V. S. Patel, K. Agrawal et al.",
      links: [
        { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10521809" },
        { label: "NSF PAR", url: "https://par.nsf.gov/biblio/10521809" },
      ],
    },
  ],
};

export const teaching = [
  {
    role: "Graduate Teaching Assistant / Lead Instructor",
    org: "University of Dayton",
    period: "Aug 2025 — Present",
    highlights: [
      "Sole instructor for hands-on Python lab sessions for undergraduate and graduate CS students.",
      "Designed lab materials, problem sets, and assessment rubrics from scratch.",
      "Delivered lectures from Python fundamentals through ML implementation; supported PyTorch/OpenCV projects via office hours.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "University of Dayton",
    period: "May 2023 — Aug 2023",
    highlights: [
      "Supported Python and algorithms instruction during lab sessions and office hours.",
      "Designed supplementary coding exercises reinforcing lecture content.",
      "Evaluated submissions and delivered structured feedback on logic and code quality.",
    ],
  },
  {
    role: "Academic Service & Mentorship",
    org: "University of Dayton",
    period: "Jan 2024 — Present",
    highlights: [
      "Peer reviewer for international CV and ML conferences — evaluating rigor, novelty, and reproducibility.",
      "Mentored junior graduate students in experimental design, PyTorch/OpenCV implementation, and the publication pipeline.",
    ],
  },
];

export const leadership = [
  {
    role: "President",
    org: "Rotaract Club of RCOEM",
    period: "Jun 2019 — May 2020",
    location: "Nagpur, India",
    highlights: [
      "Led 250 members across community service, fundraising, and outreach programs.",
      "Established partnerships with 13 external organizations and sponsors.",
      "Delivered 27 community events spanning healthcare, education, and poverty alleviation.",
    ],
  },
  {
    role: "Joint Secretary",
    org: "Rotaract Club of Nagpur",
    period: "Jun 2020 — May 2021",
    location: "Nagpur, India",
    highlights: [
      "Managed club records, correspondence, and member database on the executive board.",
      "Coordinated logistics for fundraisers, workshops, and community service events.",
      "Led new member recruitment and onboarding.",
    ],
  },
];

export const skills = {
  "AI & Machine Learning": [
    "Generative AI",
    "Prompt Engineering",
    "LLMs (Kosmos-2)",
    "Saliency Detection",
    "Scene Graph Generation",
    "Multi-modal Data Fusion",
    "Deep Learning",
    "XGBoost",
  ],
  "Computer Vision": [
    "Image Memorability Analysis",
    "Object Detection (Adverse Weather)",
    "Image Restoration",
    "Motion Analysis",
    "Seam Carving",
  ],
  "Programming Languages": [
    "Python (PyTorch, TensorFlow, Keras, OpenCV)",
    "C",
    "C++",
    "MATLAB",
    "Java",
    "SQL",
    "R",
    "Kotlin",
  ],
  "Tools & Infrastructure": [
    "AWS (EC2, S3, RDS)",
    "Linux",
    "LaTeX",
    "Android Studio",
    "Git",
    "Tableau",
    "ImageJ (Fiji)",
  ],
};

export const certificationsFeatured = [
  "AWS Certified Cloud Practitioner",
  "Cisco Data Analytics Essentials",
  "Microsoft Technology Associate (MTA): Cloud & Networking Fundamentals",
];

export const certificationsMore = [
  "AWS Fundamentals: Going Cloud-Native (AWS / Coursera)",
  "AWS S3 Basics (Coursera)",
  "Algorithmic Toolbox (UC San Diego / Coursera)",
  "Kotlin for Java Developers (JetBrains / Coursera)",
];

export type ResearchProject = {
  id: string;
  group: string;
  label: string;
  subtitle: string;
  description: string;
  stack: string[];
  metric: string;
  details: {
    role: string;
    org: string;
    period: string;
    status?: string;
    highlights: string[];
    publication?: string;
    links?: { label: string; url: string }[];
  };
};

export const researchAreas: ResearchProject[] = [
  {
    id: "salocon",
    group: "Doctoral research",
    label: "SALOCON",
    subtitle: "Salient Object Detection in Context",
    description:
      "Object-level saliency detection using scene context, Scene Graphs, and Kosmos-2 — with a 3,000-image SALOCON dataset released on GitHub.",
    stack: ["PyTorch", "Scene Graphs", "Kosmos-2", "Saliency"],
    metric: "ACM MM '26",
    details: {
      role: "PhD Researcher",
      org: "University of Dayton · Vision & Mixed Reality Lab",
      period: "2024 — Present",
      status: "Under Review",
      publication: "SALOCON: Salient Object Detection in Context — ACM MM, 2026",
      highlights: [
        "Leverages Scene Graphs and Kosmos-2 for object-level visual attention modeling.",
        "Released SALOCON dataset: 3,000 RGB images with paired binary ground-truth masks.",
        "Part of the VMR Lab publication pipeline under Dr. Tam Nguyen.",
      ],
      links: [
        { label: "Dataset", url: `${GITHUB}/SALOCON` },
        { label: "Scholar", url: SCHOLAR },
        { label: "VMR Lab", url: VMR_LAB },
      ],
    },
  },
  {
    id: "sememo",
    group: "Doctoral research",
    label: "SeMemo",
    subtitle: "Visual Working Memory Dataset",
    description:
      "Generative AI pipeline to disentangle semantic content from low-level visual features, evaluated via a change-detection paradigm for VWM analysis.",
    stack: ["Generative AI", "VWM", "Change Detection"],
    metric: "IEEE TMM",
    details: {
      role: "PhD Researcher",
      org: "University of Dayton · Vision & Mixed Reality Lab",
      period: "2024 — Present",
      status: "Under Review",
      publication:
        "Semantic Matters in Short-Term Image Memorability — IEEE Transactions on Multimedia (IEEE TMM)",
      highlights: [
        "Built with Generative AI to separate semantic content from low-level visual features.",
        "Evaluates human memory fidelity through a change-detection experimental paradigm.",
        "Journal submission at IEEE Transactions on Multimedia (IEEE TMM).",
      ],
      links: [
        { label: "Scholar", url: SCHOLAR },
        { label: "VMR Lab", url: VMR_LAB },
      ],
    },
  },
  {
    id: "aeye",
    group: "Doctoral research",
    label: "AEye / AEye2",
    subtitle: "Avian Monitoring System",
    description:
      "Automated day-night avian monitoring from high-resolution streaming video, including hybrid detection for continuous field deployment.",
    stack: ["Computer Vision", "Streaming", "OpenCV"],
    metric: "SoICT '25",
    details: {
      role: "PhD Researcher",
      org: "University of Dayton · Vision & Mixed Reality Lab",
      period: "2024 — Present",
      status: "To Appear / Under Review",
      publication:
        "AEye (SoICT 2025, To Appear) · AEye2: Hybrid Day-Night Avian Monitoring (Informatica 2026, Under Review)",
      highlights: [
        "Processes high-resolution streaming video for automated avian population monitoring.",
        "AEye2 extends coverage with hybrid day-night detection for continuous deployment.",
        "Designed for ecological monitoring and conservation field applications.",
      ],
      links: [{ label: "Scholar", url: SCHOLAR }],
    },
  },
  {
    id: "multimodal",
    group: "Doctoral research",
    label: "House Price ML",
    subtitle: "Multi-modal Valuation",
    description:
      "Fuses street-view visuals, interior attributes, furniture signals, and macro-economic data through XGBoost and neural networks for property valuation.",
    stack: ["XGBoost", "Multi-modal", "Neural Nets"],
    metric: "3+ Modalities",
    details: {
      role: "PhD Researcher",
      org: "University of Dayton",
      period: "2024 — Present",
      status: "Under Review / To Appear",
      publication:
        "House Price Prediction via Attribute, Visual, and Economic Features (SoICT 2025) · Furniture Matters in House Price Valuation (Informatica 2026)",
      highlights: [
        "Integrates street-view imagery, interior attributes, and macro-economic indicators.",
        "Compares XGBoost and neural network architectures for valuation accuracy.",
        "Explores how visual and semantic housing features affect market price prediction.",
      ],
      links: [{ label: "Scholar", url: SCHOLAR }],
    },
  },
  {
    id: "traffic-anomaly",
    group: "Master's research",
    label: "Traffic Anomaly Detection",
    subtitle: "Video Surveillance CV",
    description:
      "Real-time traffic video anomaly detection reaching 89% accuracy, with supporting dataset curation of 10,000 annotated images and 5,000 hours of footage.",
    stack: ["Deep Learning", "Video CV", "Anomaly Detection"],
    metric: "89% Acc.",
    details: {
      role: "Graduate Research Assistant (MS)",
      org: "University of Dayton",
      period: "Aug 2022 — Dec 2023",
      highlights: [
        "Achieved 89% accuracy on traffic video anomaly detection in real-world surveillance settings.",
        "Curated 10,000 annotated images and 5,000 hours of video for model training.",
        "Optimized ML pipelines to boost overall research workflow efficiency by 20%.",
      ],
    },
  },
  {
    id: "crypto-prediction",
    group: "Master's research",
    label: "Crypto Price Prediction",
    subtitle: "Time-series ML",
    description:
      "Robust cryptocurrency price forecasting models with optimized ML pipelines that improved research workflow efficiency by 20%.",
    stack: ["ML", "Time Series", "Python"],
    metric: "Forecasting",
    details: {
      role: "Graduate Research Assistant (MS)",
      org: "University of Dayton",
      period: "Aug 2022 — Dec 2023",
      highlights: [
        "Developed robust forecasting models for cryptocurrency price movement.",
        "Applied advanced feature engineering and model selection for time-series data.",
        "Ran alongside traffic CV work as part of the master's research portfolio.",
      ],
    },
  },
  {
    id: "ttsh-analytics",
    group: "Healthcare AI",
    label: "TTSH Clinical Analytics",
    subtitle: "Tan Tock Seng Hospital",
    description:
      "Healthcare data science across three patient cohorts (2,000+ patients each), extracting diagnostic insights from multi-source clinical datasets.",
    stack: ["Healthcare AI", "R", "Data Science"],
    metric: "3 Datasets",
    details: {
      role: "Research Intern",
      org: "Tan Tock Seng Hospital, Singapore",
      period: "June — July 2022",
      highlights: [
        "Analyzed three distinct clinical datasets with 2,000+ patients each.",
        "Extracted diagnostic insights from multi-source healthcare records.",
        "Applied statistical and data science methods in a hospital research setting.",
      ],
    },
  },
  {
    id: "granuloma",
    group: "Healthcare AI",
    label: "Granuloma Segmentation",
    subtitle: "Medical Imaging Pipeline",
    description:
      "Automated granuloma detection and segmentation across 60,000+ medical images using ImageJ (Fiji) and R with streamlined clinical data workflows.",
    stack: ["ImageJ", "Segmentation", "Medical Imaging"],
    metric: "60k+ Images",
    details: {
      role: "Research Intern",
      org: "Tan Tock Seng Hospital, Singapore",
      period: "June — July 2022",
      highlights: [
        "Built automated segmentation tooling for granuloma detection at scale.",
        "Processed 60,000+ medical images using ImageJ (Fiji) and R.",
        "Streamlined clinical data workflows for faster diagnostic review.",
      ],
    },
  },
  {
    id: "adverse-weather",
    group: "Published systems",
    label: "Adverse Weather Detection",
    subtitle: "Autonomous Driving Benchmark",
    description:
      "Comprehensive benchmarking of object detectors under rain, fog, and snow — published at CISS 2024 and extended in Machine Vision and Applications.",
    stack: ["Object Detection", "Benchmarking", "YOLO"],
    metric: "CISS '24",
    details: {
      role: "Research Contributor",
      org: "University of Dayton · VMR Lab",
      period: "2023 — 2025",
      status: "Published",
      publication:
        "A comprehensive analysis of object detectors in adverse weather conditions (CISS 2024) · Towards safer roads: benchmarking object detection models in complex weather scenarios (MVA 2025)",
      highlights: [
        "Benchmarked multiple object detectors under rain, fog, and snow conditions.",
        "Established evaluation protocols for safety-critical autonomous driving scenarios.",
        "Extended initial CISS findings into a journal publication with broader model coverage.",
      ],
      links: [
        { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10521809" },
        { label: "DOI", url: "https://doi.org/10.1007/s00138-025-01709-5" },
      ],
    },
  },
  {
    id: "helmet-detection",
    group: "Published systems",
    label: "Helmet Detection Benchmark",
    subtitle: "Road Safety CV",
    description:
      "Motorcycle helmet detection benchmarking framework for safety-critical traffic monitoring and compliance analysis.",
    stack: ["Object Detection", "Benchmark", "SoICT"],
    metric: "SoICT '24",
    details: {
      role: "Lead Author",
      org: "University of Dayton",
      period: "2024",
      status: "Published",
      publication:
        "Motorcycle Helmet Detection Benchmarking — International Symposium on Information and Communication Technology, 2024",
      highlights: [
        "Created a benchmarking framework for helmet compliance in traffic monitoring.",
        "Released MHDD dataset with color/grayscale splits and fog, rain, and snow augmentations.",
        "Supports road safety research and automated enforcement applications.",
      ],
      links: [
        { label: "Dataset", url: `${GITHUB}/Motorcycle-Helmet-Detection-Dataset--MHDD-` },
        { label: "DOI", url: "https://doi.org/10.1007/978-981-96-4282-3_17" },
        { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10599372" },
      ],
    },
  },
  {
    id: "de-photobombing",
    group: "Published systems",
    label: "De-photobombing Benchmark",
    subtitle: "Image Restoration",
    description:
      "Image de-photobombing benchmark dataset and evaluation pipeline for photobomber removal and scene restoration research.",
    stack: ["Image Restoration", "Benchmark", "Deep Learning"],
    metric: "MTA '24",
    details: {
      role: "Co-author",
      org: "University of Dayton · VMR Lab",
      period: "2024",
      status: "Published",
      publication: "Image de-photobombing benchmark — Multimedia Tools and Applications, 2024",
      highlights: [
        "Introduced a benchmark dataset for photobomber removal and scene restoration.",
        "Standardized evaluation for image inpainting and restoration methods.",
        "Released resources for reproducible comparison across restoration models.",
      ],
      links: [
        { label: "DOI", url: "https://doi.org/10.1007/s11042-024-19102-1" },
        {
          label: "Springer",
          url: "https://link.springer.com/article/10.1007/s11042-024-19102-1",
        },
      ],
    },
  },
  {
    id: "motion-static",
    group: "Published systems",
    label: "Motion in Static Images",
    subtitle: "Implicit Motion Analysis",
    description:
      "Motion analysis framework for static images — detecting and reasoning about implied movement without explicit video sequences.",
    stack: ["Motion Analysis", "Computer Vision", "SoICT"],
    metric: "SoICT '24",
    details: {
      role: "Lead Author",
      org: "University of Dayton",
      period: "2024",
      status: "Published",
      publication:
        "Motion Analysis in Static Images — International Symposium on Information and Communication Technology, 2024",
      highlights: [
        "Reasons about implied motion in still photographs without video input.",
        "Released MISS dataset with color/grayscale splits and motion vs. non-motion labels.",
        "Contributes to scene understanding beyond traditional video-based motion analysis.",
      ],
      links: [
        { label: "Dataset", url: `${GITHUB}/Motion-Illusion-in-Static-Scene--MISS-` },
        { label: "DOI", url: "https://doi.org/10.1007/978-981-96-4282-3_16" },
        { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10599368" },
      ],
    },
  },
  {
    id: "vista-genai",
    group: "Industry",
    label: "Vista GenAI Workflows",
    subtitle: "AI in Action Simulation",
    description:
      "Prompt-engineering framework for NPS synthesis and executive insights (>50% clarity gain), plus repeatable GenAI automations with guardrails.",
    stack: ["Prompt Engineering", "GenAI", "Automation"],
    metric: "Vista '26",
    details: {
      role: "AI in Action Participant",
      org: "Vista Equity Partners (Remote)",
      period: "Jan 2026",
      highlights: [
        "Applied Vista's four-part prompt framework (Ask, Context, Examples, Desired Output) to NPS synthesis.",
        "Improved clarity and relevance of GenAI outputs by more than 50%.",
        "Built repeatable automations for news aggregation, reconciliation, and insight summarization with guardrails.",
      ],
    },
  },
  {
    id: "ollama-dashboard",
    group: "Open source",
    label: "Ollama Dashboard",
    subtitle: "Local AI Coding Assistant",
    description:
      "Self-hosted Claude-Code-style assistant with agentic tool-use — file I/O, shell, git, web fetch — built on Next.js 15, Hono, and local Ollama models.",
    stack: ["Next.js", "TypeScript", "Hono", "Ollama"],
    metric: "Shipped",
    details: {
      role: "Creator & Maintainer",
      org: "Personal open-source project",
      period: "2025 — Present",
      highlights: [
        "Streaming chat with multi-turn agentic tool loop (up to 10 turns).",
        "Integrated tools: file read/write/list, shell commands, git ops, and web fetching.",
        "Dark-themed UI with markdown rendering and a visual file explorer.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}/ollama-dashboard` }],
    },
  },
  {
    id: "resume-evaluator",
    group: "Open source",
    label: "Resume Evaluator",
    subtitle: "AI Resume Scoring Web App",
    description:
      "Browser-friendly FastAPI wrapper around HackerRank's open-source Hiring Agent — upload a PDF resume and view structured scoring in the browser.",
    stack: ["Python", "FastAPI", "LLM", "Ollama"],
    metric: "Web App",
    details: {
      role: "Creator",
      org: "Personal open-source project",
      period: "2026 — Present",
      highlights: [
        "Web UI and API layer on top of interviewstreet/hiring-agent scoring pipeline.",
        "Supports Ollama (local) or Google Gemini as LLM backends.",
        "Drag-and-drop PDF upload with optional GitHub profile enrichment.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}/resume-evaluator` }],
    },
  },
  {
    id: "timesheet-tracker",
    group: "Open source",
    label: "Timesheet Tracker",
    subtitle: "Android Productivity App",
    description:
      "Kotlin Android app for project-based time tracking — clock in/out, manual entries, history, and release APK builds.",
    stack: ["Kotlin", "Android", "Gradle"],
    metric: "Android",
    details: {
      role: "Creator",
      org: "Personal open-source project",
      period: "2025 — Present",
      highlights: [
        "Multi-project timesheet management with clock-in/out workflows.",
        "Manual entry editing and daily history views.",
        "Signed release APK build pipeline via Gradle.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}/timesheet-tracker` }],
    },
  },
  {
    id: "healthy-heart",
    group: "Open source",
    label: "Healthy Heart",
    subtitle: "Mobile Health Utility",
    description:
      "Java Android app to help users calm elevated heart rates and locate nearby hospitals during health emergencies.",
    stack: ["Java", "Android"],
    metric: "Android",
    details: {
      role: "Creator",
      org: "University of Dayton · Personal project",
      period: "2025",
      highlights: [
        "Heart-rate calming guidance for users under stress.",
        "Nearby hospital lookup for elevated heart-rate scenarios.",
        "Built as a practical mobile health utility application.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}/Healthy_Heart` }],
    },
  },
  {
    id: "chronic-disease",
    group: "Open source",
    label: "Chronic Disease Prediction",
    subtitle: "Deep Learning + UI",
    description:
      "Deep learning classifier for chronic disease risk with an interactive UI for interpreting model predictions.",
    stack: ["Python", "Deep Learning", "UI"],
    metric: "ML App",
    details: {
      role: "Creator",
      org: "Personal open-source project",
      period: "2024",
      highlights: [
        "Trained DL model to predict chronic disease likelihood from input features.",
        "Built a user-facing interface for accessible prediction output.",
        "End-to-end ML prototype from training through deployment UI.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}/Chronic-Disease-Prediction` }],
    },
  },
  {
    id: "fake-news",
    group: "Open source",
    label: "Fake News Detection",
    subtitle: "NLP Classification Model",
    description:
      "Trained deep learning model for fake news detection with inference-ready weights (training code archived separately).",
    stack: ["Python", "Deep Learning", "NLP"],
    metric: "Classifier",
    details: {
      role: "Creator",
      org: "Personal open-source project",
      period: "2020 — 2024",
      highlights: [
        "Binary classifier for misinformation detection in news text.",
        "Model trained in 2020; repository hosts inference-ready artifacts.",
        "Early NLP project demonstrating text classification workflows.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}/Fake-News-Detection` }],
    },
  },
  {
    id: "dental-insurance",
    group: "Open source",
    label: "Dental Insurance Automation",
    subtitle: "Spring Boot + AWS",
    description:
      "Spring Boot APIs automating dental insurance claim verification steps, integrated into a web app hosted on AWS.",
    stack: ["Spring Boot", "Java", "AWS"],
    metric: "Backend",
    details: {
      role: "Creator",
      org: "Personal open-source project",
      period: "2024",
      highlights: [
        "REST APIs for automated claim verification workflow steps.",
        "Web application integration for end-to-end claim processing.",
        "Deployed using AWS cloud services with sanitized test data in repo.",
      ],
      links: [
        { label: "GitHub", url: `${GITHUB}/Dental-Insurance-Claim-Automation` },
      ],
    },
  },
];
