import {
  Github,
  Linkedin,
  Shield,
  Brain,
  Terminal,
  Cpu,
  Map,
  HandHeart,
  Radar,
  Building2,
  Briefcase,
  Waves,
  LineChart,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

export const userData = {
  name: 'Kleber Almeida Toyota',
  handle: 'Kleber Tiko',
  role: 'AI Security Specialist',
  roleExtended: 'Principal Software Engineer · GenAI · Agentic AI · Ethical Hacker',
  location: 'Florianópolis, SC — Brasil',
  employer: {
    company: 'Black Box',
    title: 'AI Security Specialist',
    since: 'nov/2025',
  },
  tagline:
    'Construo sistemas inteligentes com segurança rigorosa — identifico vulnerabilidades antes da exploração enquanto projeto soluções com LLMs e agentes.',
  about:
    'AI Security Specialist e Principal Software Engineer. Atuo na fusão entre desenvolvimento com IA generativa e práticas sólidas de cibersegurança — de arquiteturas RAG e sistemas agenticos autônomos a ferramentas open-source como o JamStreapper para auditoria de rede. Olho software pela lente de SecDevOps e ethical hacking: pentest, OWASP e hardening desde o desenho. Na Black Box foco em segurança de IA; antes, mais de dez anos na Concrete Solutions · Accenture liderando times, microserviços multi-cloud e pipelines de GenAI em projetos de missão crítica no setor financeiro e além.',
  languages: ['Português (nativo)', 'Inglês (profissional)', 'Espanhol (básico)'],
  certifications: [
    'Kali Linux · Ethical Hacking & Pentest (Udemy)',
    'Security for Hackers: Code Auditing, Fuzzing (Pluralsight)',
    'Imersão IA — Automação n8n · Google Gemini (Alura)',
  ],
  social: {
    github: 'https://github.com/klebertiko',
    linkedin: 'https://www.linkedin.com/in/kleber-almeida-toyota/',
    medium: 'https://medium.com/@klebertiko',
    email: 'mailto:klebertiko@gmail.com',
  },
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Black Box',
    role: 'AI Security Specialist',
    period: 'nov/2025 — presente',
    location: 'Florianópolis, SC',
    current: true,
    highlights: [
      'Segurança aplicada a sistemas de IA generativa e agentes autônomos',
      'Red teaming, threat modeling e hardening de pipelines com LLM',
    ],
  },
  {
    company: 'Concrete Solutions · Accenture',
    role: 'Líder Técnico · Arquiteto de Soluções · Eng. de Software Sênior',
    period: 'fev/2015 — out/2025',
    location: 'São Paulo, SP',
    highlights: [
      'Liderança técnica em projetos nacionais e internacionais de missão crítica',
      'Microserviços em Java, Go e Python; padrões e design patterns em escala',
      'CI/CD com Terraform e Kubernetes em multi-cloud (AWS, GCP, Azure)',
      'SecDevOps, OWASP, pentest e blue team em esteiras de entrega',
      'Data Lakes serverless e GenAI — prompt engineering, agents e structured outputs',
    ],
  },
  {
    company: 'Atos',
    role: 'Senior Java Developer / Java Architect',
    period: 'out/2013 — jan/2015',
    location: 'Brasil',
    highlights: ['Arquitetura e desenvolvimento Java em contexto enterprise'],
  },
  {
    company: 'MAPFRE · Indra · Stefanini · TCS · outros',
    role: 'Arquiteto Java · Tech Lead · Developer',
    period: '2005 — 2013',
    location: 'Brasil',
    highlights: [
      'Mais de oito anos em arquitetura e desenvolvimento Java em seguros, consultoria e integração',
    ],
  },
];

export const skills = [
  {
    category: 'AI Security & GenAI',
    icon: Brain,
    items: [
      'Generative AI & Agentic AI',
      'RAG & sistemas agenticos',
      'LLMOps & Observability',
      'Prompt Engineering',
      'Ethical Hacking & Red Teaming',
      'Fuzzing & Code Auditing',
    ],
  },
  {
    category: 'SecDevOps & AppSec',
    icon: Shield,
    items: [
      'OWASP · Pentest · Blue Team',
      'SAST · DAST · Security Testing',
      'Secure Software Development',
      'Risk Assessment',
      'Metodologias ágeis (SAFE)',
    ],
  },
  {
    category: 'Cloud, Data & Observability',
    icon: Terminal,
    items: [
      'AWS · GCP · Azure (multi-cloud)',
      'Terraform · Kubernetes · Docker',
      'CI/CD (Jenkins · GitHub Actions)',
      'Datadog · LLMOps pipelines',
      'Data Lakes serverless',
    ],
  },
  {
    category: 'Stacks & Ferramentas',
    icon: Cpu,
    items: [
      'Java/Kotlin · Spring Boot',
      'Python · GoLang',
      'LangChain · Crew.ai',
      'OWASP ZAP · Burp Suite',
      'Metasploit · SQLMap',
    ],
  },
];

export type Project = {
  title: string;
  slug: string;
  desc: string;
  tech: string[];
  link: string;
  icon: LucideIcon;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'Sk8Spots',
    slug: 'sk8spots.com.br',
    desc:
      'PWA para skatistas marcarem e descobrirem picos de skate no mapa. Check-in ao vivo, condições do pico, desafios validados pela comunidade e assinatura premium via Pix — backend real em Supabase, login Google verificado por JWKS.',
    tech: ['React 19', 'TypeScript', 'Leaflet', 'Zustand', 'Supabase', 'Vercel Functions'],
    link: 'https://sk8spots.com.br',
    icon: Map,
    featured: true,
  },
  {
    title: 'S.O.S. Areias',
    slug: 'sos-areias.vercel.app',
    desc:
      'Vaquinha para reformar a pista de skate de Areias (Campeche, Florianópolis), em parceria com a Ruaria Skateparks e a comunidade local. Arrecadação e cronograma reais em Postgres, doação via QR Pix, painel admin protegido por passcode.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Neon Postgres', 'Pix (BR Code)'],
    link: 'https://sos-areias.vercel.app',
    icon: HandHeart,
    featured: true,
  },
  {
    title: 'ShadowSentinel',
    slug: 'ShadowSentinel',
    desc:
      'IDS passivo de rede em Python: deep packet inspection a ~45.000 pacotes/s sem deixar rastro na rede. Detecta ARP spoofing, port scans, SYN floods e DNS tunneling em tempo real.',
    tech: ['Python', 'Scapy', 'Raw Sockets', 'DPI'],
    link: 'https://github.com/klebertiko/ShadowSentinel',
    icon: Radar,
    featured: true,
  },
  {
    title: 'JamStreapper',
    slug: 'JamStreapper',
    desc:
      'Ferramenta open-source de Deep Packet Inspection e auditoria de rede para testes de intrusão — citada no meu trabalho com ethical hacking e segurança ofensiva.',
    tech: ['Python', 'Scapy', 'Rich'],
    link: 'https://github.com/klebertiko/JamStreapper',
    icon: Waves,
    featured: true,
  },
  {
    title: 'SinergIA ERP',
    slug: 'sinergia-erp',
    desc:
      'ERP multi-tenant para micro e pequenos negócios brasileiros. IA multi-provider, autenticação Google, conformidade LGPD por tenant, instalável como PWA.',
    tech: ['Next.js 14', 'Drizzle', 'Auth.js', 'Radix UI'],
    link: 'https://github.com/klebertiko/sinergia-erp',
    icon: Building2,
    featured: false,
  },
  {
    title: 'FreelasMatch',
    slug: 'FreelasMatch',
    desc: 'Marketplace de serviços para o mercado brasileiro.',
    tech: ['React 19', 'Vite', 'Radix UI'],
    link: 'https://github.com/klebertiko/FreelasMatch',
    icon: Briefcase,
    featured: false,
  },
  {
    title: 'FinAgent Pro',
    slug: 'finagent-pro',
    desc: 'Análise preditiva para B3 e Binance com dashboards interativos.',
    tech: ['Python', 'Streamlit'],
    link: 'https://github.com/klebertiko/finagent-pro',
    icon: LineChart,
    featured: false,
  },
  {
    title: 'NightwolfRGB',
    slug: 'NightwolfRGB',
    desc: 'Controle de iluminação RGB em tempo real via WebSocket, integrado ao OpenRGB SDK.',
    tech: ['Express', 'React', 'WebSocket'],
    link: 'https://github.com/klebertiko/NightwolfRGB',
    icon: Lightbulb,
    featured: false,
  },
];

export const socialIcons = { Github, Linkedin };
