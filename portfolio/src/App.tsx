import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Shield, 
  Brain, 
  Terminal, 
  Cpu, 
  Eye, 
  ChevronDown, 
  ExternalLink,
  Code2,
  MessageSquare,
  Network,
  Lock,
  Server
} from 'lucide-react';

// Dados do Usuário
const userData = {
  name: "Kleber Almeida Toyota (Kleber Tiko)",
  role: "AI Security Specialist",
  tagline: "Protegendo a fronteira entre Inteligência Artificial e Cibersegurança.",
  about: "Sou um especialista focado na intersecção entre Segurança da Informação e Inteligência Artificial. Minha missão é garantir que sistemas baseados em IA sejam robustos, confiáveis e seguros contra ataques adversariais, injeção de prompt e exfiltração de dados.",
  social: {
    github: "https://github.com/klebertiko",
    linkedin: "https://www.linkedin.com/in/kleber-almeida-toyota/"
  }
};

// Habilidades
const skills = [
  {
    category: "AI Security & Blue/Red Teaming",
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
    items: ["Generative AI & Agentic AI", "Ethical Hacking", "Prompt Engineering", "Fuzzing & Code Auditing", "Penetration Testing"]
  },
  {
    category: "Frameworks & Compliance",
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    items: ["OWASP Security Standards", "Blue/Red Team Operations", "Secure Software Development LC", "Security Advocacy", "sAFE & Agile Methodologies", "Risk Assessment"]
  },
  {
    category: "AppSec & DevSecOps",
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    items: ["SecDevOps Pipelines ", "SAST & DAST & Security Testing", "Docker & Kubernetes", "Terraform (IaC)", "CI/CD (Jenkins/GitHub Actions)"]
  },
  {
    category: "Ferramentas & Stacks",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    items: ["Java/Kotlin & Spring Boot", "Python & GoLang", "LangChain & Crew.ai", "OWASP ZAP & Burp Suite", "Metasploit & SQLMap"]
  }
];

// Projetos
const projects = [
  {
    title: "DPI & Network Jamming",
    repoName: "JamStreapper",
    desc: "Ferramenta avançada de Deep Packet Inspection (DPI) e interferência de rede desenvolvida em Python para testes de intrusão e análise de tráfego.",
    tech: ["Python", "Network Security", "DPI", "Packet Analysis"],
    link: "https://github.com/klebertiko/JamStreapper",
    icon: <Network className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Real-time Malware Scan",
    repoName: "clamav-new-files-scan",
    desc: "Daemon de alta performance em Go que monitora diretórios e executa varreduras automáticas usando ClamAV em pipelines de ingestão.",
    tech: ["Go", "ClamAV", "Security Automation", "System Programming"],
    link: "https://github.com/klebertiko/clamav-new-files-scan",
    icon: <Shield className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Secure SSH Tunneling",
    repoName: "go-ssh-tunnel",
    desc: "Implementação leve e segura de tunelamento SSH em Go para acesso seguro a recursos internos e comunicação criptografada.",
    tech: ["Go", "SSH", "Cryptography", "Networking"],
    link: "https://github.com/klebertiko/go-ssh-tunnel",
    icon: <Lock className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "AWS Cloud Automation",
    repoName: "aws_go_handson",
    desc: "Laboratórios para automação de infraestrutura AWS utilizando Go. Foco em provisionamento seguro, IAM e orquestração de recursos.",
    tech: ["Go", "AWS SDK", "Cloud Security", "DevOps"],
    link: "https://github.com/klebertiko/aws_go_handson",
    icon: <Server className="w-8 h-8 text-emerald-400" />
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-emerald-900/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="font-mono font-bold text-emerald-400 text-lg">&lt;K&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-lg leading-none group-hover:text-emerald-400 transition-colors">
                Kleber Tiko
              </span>
              <span className="text-xs text-slate-500 font-mono tracking-widest uppercase mt-1">
                AI Security Specialist
              </span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Sobre', 'Skills', 'Projetos', 'Contato'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-xs relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="inline-block mb-4 px-3 py-1 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-widest animate-pulse">
          SYSTEM_STATUS: ONLINE
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Olá, eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">{userData.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 font-light italic">
          {userData.role}
        </h2>
        <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed">
          {userData.tagline}
        </p>
        
        <div className="flex gap-4 mb-16">
          <a href={userData.social.github} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-500 hover:text-emerald-400 transition-all hover:-translate-y-1">
            <Github className="w-6 h-6" />
          </a>
          <a href={userData.social.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-500 hover:text-emerald-400 transition-all hover:-translate-y-1">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <button onClick={() => scrollTo('sobre')} className="animate-bounce text-slate-500 hover:text-emerald-400 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative z-10 py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] bg-slate-800 flex items-center justify-center">
                <Shield className="w-20 h-20 text-emerald-500/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-emerald-400 font-mono text-sm tracking-widest mb-2">01. SOBRE MIM</h3>
              <h2 className="text-3xl font-bold text-white mb-6">Arquitetando a Defesa da IA</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-6 text-justify">
                {userData.about}
              </p>
              <div className="flex flex-wrap gap-3">
                {['Ética em IA', 'Cybersegurança', 'Red Teaming', 'Blue Team'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-emerald-500/50 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-emerald-400 font-mono text-sm tracking-widest mb-2">02. EXPERTISE</h3>
            <h2 className="text-3xl font-bold text-white uppercase">Arsenal Técnico</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group">
                <div className="mb-4 p-3 bg-slate-950 rounded-lg inline-block border border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="relative z-10 py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-emerald-400 font-mono text-sm tracking-widest mb-2">03. PROJETOS</h3>
            <h2 className="text-3xl font-bold text-white uppercase">Projetos em Destaque</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col h-full group hover:bg-slate-900/40">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                      {project.icon}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-3 uppercase tracking-wide">{project.repoName}</p>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="px-6 py-4 bg-slate-900/80 border-t border-slate-800 mt-auto">
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-emerald-400/80">
                    {project.tech.map(t => <span key={t} className="px-2 py-1 bg-emerald-950/30 rounded border border-emerald-900/30">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative z-10 py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-emerald-400 font-mono text-sm tracking-widest mb-2">04. CONTATO</h3>
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para proteger o futuro?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Estou sempre aberto a discutir sobre segurança em IA, novas oportunidades de red teaming ou colaborações em pesquisa.
          </p>
          <a href={userData.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <MessageSquare className="w-5 h-5" />
            Conectar no LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
            <a href={userData.social.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Github</a>
            <a href={userData.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Linkedin</a>
        </div>
        <p className="mb-2 font-mono">Terminal @ {userData.name.split(' ')[0].toLowerCase()} ~ version 3.8</p>
        <p>&copy; {new Date().getFullYear()} {userData.name}.</p>
      </footer>
    </div>
  );
}
