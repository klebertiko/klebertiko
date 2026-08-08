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
  tagline: 'Encontro falhas em sistemas de IA antes que alguém mal-intencionado as explore.',
  about:
    'Atuo na interseção entre Segurança da Informação e Inteligência Artificial — red teaming, pentest e auditoria aplicados a modelos e agentes de IA. Meu foco é ataques adversariais, injeção de prompt e exfiltração de dados: as formas mais comuns pelas quais sistemas de IA falham na prática.',
  social: {
    github: 'https://github.com/klebertiko',
    linkedin: 'https://www.linkedin.com/in/kleber-almeida-toyota/',
  },
};

export const skills = [
  {
    category: 'AI Security & Blue/Red Teaming',
    icon: Brain,
    items: ['Generative AI & Agentic AI', 'Ethical Hacking', 'Prompt Engineering', 'Fuzzing & Code Auditing', 'Penetration Testing'],
  },
  {
    category: 'Frameworks & Compliance',
    icon: Shield,
    items: ['OWASP Security Standards', 'Blue/Red Team Operations', 'Secure Software Development LC', 'Security Advocacy', 'sAFE & Agile Methodologies', 'Risk Assessment'],
  },
  {
    category: 'AppSec & DevSecOps',
    icon: Terminal,
    items: ['SecDevOps Pipelines', 'SAST & DAST & Security Testing', 'Docker & Kubernetes', 'Terraform (IaC)', 'CI/CD (Jenkins/GitHub Actions)'],
  },
  {
    category: 'Ferramentas & Stacks',
    icon: Cpu,
    items: ['Java/Kotlin & Spring Boot', 'Python & GoLang', 'LangChain & Crew.ai', 'OWASP ZAP & Burp Suite', 'Metasploit & SQLMap'],
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
    title: 'SinergIA ERP',
    slug: 'sinergia-erp',
    desc:
      'ERP multi-tenant para micro e pequenos negócios brasileiros. IA multi-provider, autenticação Google, conformidade LGPD por tenant, instalável como PWA.',
    tech: ['Next.js 14', 'Drizzle', 'Auth.js', 'Radix UI'],
    link: 'https://github.com/klebertiko/sinergia-erp',
    icon: Building2,
    featured: true,
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
    title: 'JamStreapper',
    slug: 'JamStreapper',
    desc: 'Ferramenta de Deep Packet Inspection e interferência de rede para testes de intrusão.',
    tech: ['Python', 'Scapy', 'Rich'],
    link: 'https://github.com/klebertiko/JamStreapper',
    icon: Waves,
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
