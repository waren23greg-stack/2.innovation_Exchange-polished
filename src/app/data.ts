export interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  score: number;
  owner: {
    name: string;
    avatar: string;
  };
  layers: Layer[];
  createdAt: string;
  views: number;
  status: 'available' | 'in-escrow' | 'sold';
}

export interface Layer {
  id: number;
  name: string;
  description: string;
  unlocked: boolean;
  content?: string;
}

export const categories = [
  'All',
  'Technology',
  'Healthcare',
  'Finance',
  'AI & ML',
  'Clean Energy',
  'Biotech',
  'E-commerce',
];

export const mockIdeas: Idea[] = [
  {
    id: '0x7f3a...8b2c',
    title: 'Decentralized Identity Protocol',
    description: 'A self-sovereign identity system using zero-knowledge proofs for privacy-preserving authentication.',
    category: 'Technology',
    price: 45000,
    score: 92,
    owner: { name: 'Alex Chen', avatar: 'AC' },
    layers: [
      { id: 1, name: 'Overview', description: 'Basic concept overview', unlocked: true, content: 'Self-sovereign identity using ZK proofs' },
      { id: 2, name: 'Technical', description: 'Technical architecture', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-03-10',
    views: 1247,
    status: 'available',
  },
  {
    id: '0x9a2b...4e1f',
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Machine learning system for predicting molecular interactions and accelerating drug development.',
    category: 'Healthcare',
    price: 125000,
    score: 88,
    owner: { name: 'Dr. Sarah Kim', avatar: 'SK' },
    layers: [
      { id: 1, name: 'Overview', description: 'Platform overview', unlocked: true, content: 'ML platform for drug discovery' },
      { id: 2, name: 'Technical', description: 'ML architecture', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-03-08',
    views: 2891,
    status: 'in-escrow',
  },
  {
    id: '0x3c8d...7f2a',
    title: 'Quantum-Resistant Ledger System',
    description: 'Post-quantum cryptography for blockchain transactions and smart contracts.',
    category: 'Finance',
    price: 78000,
    score: 85,
    owner: { name: 'Marcus Webb', avatar: 'MW' },
    layers: [
      { id: 1, name: 'Overview', description: 'Concept overview', unlocked: true, content: 'Post-quantum blockchain security' },
      { id: 2, name: 'Technical', description: 'Crypto algorithms', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-03-05',
    views: 892,
    status: 'available',
  },
  {
    id: '0x1e4f...9c3b',
    title: 'Autonomous Delivery Drone Network',
    description: 'Urban drone delivery system with AI-powered route optimization and collision avoidance.',
    category: 'Technology',
    price: 95000,
    score: 79,
    owner: { name: 'Jordan Lee', avatar: 'JL' },
    layers: [
      { id: 1, name: 'Overview', description: 'Network overview', unlocked: true, content: 'AI drone delivery network' },
      { id: 2, name: 'Technical', description: 'Drone specifications', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-03-01',
    views: 1567,
    status: 'available',
  },
  {
    id: '0x6b2a...4d9f',
    title: 'Personal AI Financial Advisor',
    description: 'Generative AI system providing personalized investment strategies and portfolio management.',
    category: 'AI & ML',
    price: 62000,
    score: 83,
    owner: { name: 'Emily Zhang', avatar: 'EZ' },
    layers: [
      { id: 1, name: 'Overview', description: 'AI advisor overview', unlocked: true, content: 'Generative AI financial advisor' },
      { id: 2, name: 'Technical', description: 'AI architecture', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-28',
    views: 2103,
    status: 'available',
  },
  {
    id: '0x8e1c...2a7f',
    title: 'Solid-State Battery Manufacturing Process',
    description: 'Novel manufacturing process for high-capacity solid-state batteries with faster charging.',
    category: 'Clean Energy',
    price: 210000,
    score: 95,
    owner: { name: 'Dr. James Park', avatar: 'JP' },
    layers: [
      { id: 1, name: 'Overview', description: 'Process overview', unlocked: true, content: 'Solid-state battery manufacturing' },
      { id: 2, name: 'Technical', description: 'Technical specifications', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-25',
    views: 3456,
    status: 'sold',
  },
  {
    id: '0x4f7a...1e9c',
    title: 'Neural Interface for Stroke Rehabilitation',
    description: 'Brain-computer interface system for accelerated stroke patient recovery.',
    category: 'Biotech',
    price: 156000,
    score: 91,
    owner: { name: 'Dr. Lisa Huang', avatar: 'LH' },
    layers: [
      { id: 1, name: 'Overview', description: 'Interface overview', unlocked: true, content: 'BCI for stroke rehabilitation' },
      { id: 2, name: 'Technical', description: 'Neural interface specs', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-22',
    views: 1876,
    status: 'available',
  },
  {
    id: '0x2d8b...6f4a',
    title: 'AR Shopping Experience Platform',
    description: 'Augmented reality e-commerce platform with real-time try-on and space visualization.',
    category: 'E-commerce',
    price: 38000,
    score: 72,
    owner: { name: 'Ryan Torres', avatar: 'RT' },
    layers: [
      { id: 1, name: 'Overview', description: 'Platform overview', unlocked: true, content: 'AR e-commerce platform' },
      { id: 2, name: 'Technical', description: 'AR specifications', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-20',
    views: 943,
    status: 'available',
  },
  {
    id: '0x9c3f...7a1e',
    title: 'Carbon Capture Material Innovation',
    description: 'Next-generation material for direct air capture with 10x efficiency improvement.',
    category: 'Clean Energy',
    price: 185000,
    score: 89,
    owner: { name: 'Dr. Anna Mueller', avatar: 'AM' },
    layers: [
      { id: 1, name: 'Overview', description: 'Material overview', unlocked: true, content: 'Advanced carbon capture material' },
      { id: 2, name: 'Technical', description: 'Material specifications', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-18',
    views: 2234,
    status: 'available',
  },
  {
    id: '0x5e2a...8c9f',
    title: 'DeFi Lending Protocol v2.0',
    description: 'Decentralized lending protocol with AI-driven risk assessment and dynamic interest rates.',
    category: 'Finance',
    price: 52000,
    score: 76,
    owner: { name: 'Victor Nash', avatar: 'VN' },
    layers: [
      { id: 1, name: 'Overview', description: 'Protocol overview', unlocked: true, content: 'AI-enhanced DeFi lending' },
      { id: 2, name: 'Technical', description: 'Protocol architecture', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-15',
    views: 1156,
    status: 'in-escrow',
  },
  {
    id: '0x7f4b...3d2a',
    title: 'Smart Agriculture IoT System',
    description: 'Integrated IoT platform for precision farming with predictive analytics.',
    category: 'Technology',
    price: 43000,
    score: 68,
    owner: { name: 'Carlos Rivera', avatar: 'CR' },
    layers: [
      { id: 1, name: 'Overview', description: 'System overview', unlocked: true, content: 'IoT precision farming platform' },
      { id: 2, name: 'Technical', description: 'IoT specifications', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-12',
    views: 678,
    status: 'available',
  },
  {
    id: '0x3a9f...6e1c',
    title: 'Personal Health AI Companion',
    description: 'AI companion for personalized health monitoring, prevention, and wellness recommendations.',
    category: 'Healthcare',
    price: 28000,
    score: 81,
    owner: { name: 'Maya Patel', avatar: 'MP' },
    layers: [
      { id: 1, name: 'Overview', description: 'Companion overview', unlocked: true, content: 'AI health companion' },
      { id: 2, name: 'Technical', description: 'AI specifications', unlocked: false },
      { id: 3, name: 'Implementation', description: 'Implementation details', unlocked: false },
      { id: 4, name: 'Market', description: 'Market analysis', unlocked: false },
      { id: 5, name: 'Full IP', description: 'Complete IP bundle', unlocked: false },
    ],
    createdAt: '2026-02-10',
    views: 1589,
    status: 'available',
  },
];

export const features = [
  {
    icon: '🔐',
    title: 'SHA-256 Idea Fingerprinting',
    description: 'Every idea gets a unique cryptographic hash, creating an immutable proof of existence and timestamp.',
  },
  {
    icon: '🔒',
    title: 'AES-256-GCM Encryption',
    description: 'Military-grade layer encryption ensures your idea details remain secure until you choose to reveal them.',
  },
  {
    icon: '🏦',
    title: 'Escrow Payment Hold',
    description: 'Secure transactions with escrow protection. Funds are held until both parties fulfill their obligations.',
  },
  {
    icon: '📊',
    title: 'Innovation Score Engine',
    description: 'AI-powered scoring system evaluates novelty, market potential, and technical feasibility.',
  },
  {
    icon: '⚖️',
    title: 'Legal IP Certificates',
    description: 'Get official PDF certificates proving your intellectual property ownership and timestamps.',
  },
  {
    icon: '🤝',
    title: 'DocuSign NDA Integration',
    description: 'Built-in non-disclosure agreements ensure legal protection before sharing sensitive details.',
  },
];
