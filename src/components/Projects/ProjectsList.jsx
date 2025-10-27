const ProjectsList = [
  {
    name: 'MedTrain Kenya',
    category: 'Hospital e-learning',
    timeline: '2024 | Production',
    images: [
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1580281657521-3a545a4e3364?auto=format&fit=crop&w=900&q=80'
    ],
    description: "Kenya's leading hospital e-learning platform for Ministry of Health approved CPD courses.",
    longDescription:
      'MedTrain Kenya lets clinicians access certified modules, earn CPD credits, and keep compliance dashboards in sync with partner hospitals such as Kenyatta National Hospital, Moi Teaching & Referral, and Nairobi Hospital. The experience prioritizes role-based learning paths, rapid login for nurses/doctors, and transparent compliance tracking for administrators.',
    details: [
      'Course catalog is curated around infection control, patient safety, and emergency procedures listed on the live site.',
      'Partner hospital view surfaces completion percentages and alerts when teams fall behind mandatory training.',
      'Role: built React SPA, auth, and metrics screens so staff can browse modules, resume learning, and see tracked status in one dashboard.'
    ],
    stacks: ['React', 'TypeScript', 'Node.js', 'Tailwind', 'Supabase'],
    live: 'https://medtrain.site/',
    code: 'https://github.com/stephenkati/medtrain-os'
  },
  {
    name: 'Kieti Training Portal',
    category: 'Polytechnic LMS',
    timeline: '2024 | Production',
    images: [
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80'
    ],
    description: "Kieti Training Polytechnic's integrated portal for learners, lecturers, and administrators.",
    longDescription:
      'The portal promotes “E-Learning for a hands-on polytechnic,” showcasing full-time, evening, weekend, and blended programmes. Students log in with institutional email, lecturers run virtual classes, and admins track performance analytics plus exports to inform campus decisions.',
    details: [
      'Landing hero mirrors the live site copy: one portal with dashboards, stats, and CTA cards for courses and campus services.',
      'Course and feature grids highlight modules like student support, lecturer onboarding, and programme delivery modes.',
      'Role: crafted responsive marketing page and authentication views with Inter typography, gradients, and glassmorphism to match the production aesthetic.'
    ],
    stacks: ['React', 'Vite', 'Framer Motion', 'Tailwind', 'Firebase'],
    live: 'https://kieti.site/',
    code: 'https://github.com/stephenkati/kieti-portal'
  },
  {
    name: 'PulseSync Mobile',
    category: 'Patient companion app',
    timeline: '2024 | Cross-platform',
    images: [
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A Flutter-powered companion app that keeps chronic-care patients synced with clinicians in real time.',
    longDescription:
      'PulseSync pairs with the MedTrain ecosystem to surface medication schedules, care-plan tasks, and secure messaging on iOS and Android. Firebase powers authentication, Firestore stores vitals and symptom logs, and Cloud Functions trigger alerts when readings fall outside thresholds.',
    details: [
      'Flutter UI built with Material 3, Riverpod state management, and lottie-guided onboarding.',
      'Realtime Firestore listeners stream care-team updates, while offline persistence keeps data available during network gaps.',
      'Role: designed the mobile architecture, integrated Firebase Auth + Cloud Messaging, and delivered CI pipelines via Codemagic.'
    ],
    stacks: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'Riverpod', 'Codemagic'],
    live: 'https://medtrain.site/',
    code: 'https://github.com/stephenkati/pulsesync-mobile'
  },
  {
    name: 'Pulseboard',
    category: 'Product analytics',
    timeline: '2023 | Enterprise pilot',
    images: [
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Unified visibility for SaaS leads, churn health, and experimentation—right inside Slack.',
    longDescription:
      'Pulseboard ingests customer events, MRR movements, and feature-flag data, then nudges owners when accounts drift off track. The experience blends a cinematic dashboard with Slack-native insights so GTM, product, and success folks stay aligned.',
    details: [
      'Segment + ClickHouse pipeline keeps 13 months of instrumentation queryable in milliseconds.',
      'Motion-designed widgets animate deltas to spotlight what changed in the last deploy.',
      'Role: architected the ingestion services, anomaly detection rules, and React data stories.'
    ],
    stacks: ['React', 'Recharts', 'Node.js', 'ClickHouse', 'Slack SDK'],
    live: 'https://pulseboard.app/',
    code: 'https://github.com/stephenkati/pulseboard'
  },
  {
    name: 'Atlas API',
    category: 'DevEx toolkit',
    timeline: '2022 | OSS',
    images: [
      'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A batteries-included GraphQL service that helps teams ship features without fighting boilerplate.',
    longDescription:
      'Atlas wraps Fastify, Postgres, and event sourcing patterns into a cohesive server that scaffolds new modules, docs, and dashboards in seconds. It is production hardened yet friendly for hackathons.',
    details: [
      'CLI generator spins CRUD, background jobs, and telemetry wiring with one command.',
      'Schema diff visualizer prevents breaking deployments by simulating traffic.',
      'Role: solo-built the OSS project and maintain community contributions.'
    ],
    stacks: ['Node.js', 'Fastify', 'GraphQL', 'Postgres', 'Redis', 'TypeScript'],
    live: 'https://atlasapi.dev/',
    code: 'https://github.com/stephenkati/atlas-api'
  },
  {
    name: 'Sora Stories',
    category: 'Creative studio',
    timeline: '2021 | Side project',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Immersive microsites for storytellers—motion, sound, and scroll-based interactions included.',
    longDescription:
      'The engine snaps together scenes that choreograph text, audio, and parallax art. Writers focus on narrative while the system handles performance budgets, compression, and shareable embeds.',
    details: [
      'WebGL layers and spring physics drive organic transitions on desktop and touch.',
      'Story analytics report read times and drop-off for editorial teams.',
      'Role: concepted and built the storytelling framework plus authoring dashboard.'
    ],
    stacks: ['Next.js', 'Framer Motion', 'Three.js', 'Sanity', 'Vercel'],
    live: 'https://sorastories.studio/',
    code: 'https://github.com/stephenkati/sora-stories'
  }
]

export default ProjectsList
