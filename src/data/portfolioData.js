import {
  FaGithub, FaLinkedin, FaEnvelope, FaYoutube,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaNodeJs, FaPython, FaJava, FaGitAlt, FaLinux
} from 'react-icons/fa';

import { SiMysql, SiExpress, SiJest, SiMongodb, SiVercel } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import { BsFillDatabaseFill, BsCodeSlash, BsClipboardCheck, BsFileEarmarkCode } from 'react-icons/bs';
import { AiOutlineApi, AiOutlineCloudServer, AiOutlineMobile } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineArchitecture } from 'react-icons/md';

export const personalInfo = {
  name: "Hércules Arthur Nardelli",
  headline: "Engenheiro de Software em Formação | React | TypeScript | Node.js | Desenvolvedor PWA & Local-First",
  location: "São José dos Pinhais, Paraná, Brasil",
  email: "herculesnardelli@gmail.com",
  socialLinks: [
    { name: "Email", icon: FaEnvelope, url: "mailto:trindadehan@gmail.com" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/HerculesArthurN" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/hercules-arthur-nardelli" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@herculesarthurnardelli?si=UGhUviz8fDeFZVKJ" },
  ]
};

export const objective = {
  title: "🎯 Objetivo Profissional",
  description: "Engenheiro de Software | Desenvolvedor Frontend | Backend | FullStack | React & TypeScript"
};

export const aboutMe = {
  title: "👋 Sobre Mim",
  description: "Engenheiro de Software (7º período) focado em desenvolvimento Frontend com React e TypeScript. Experiência na construção de PWAs e arquiteturas Local-First, priorizando Clean Code, performance e interfaces centradas no usuário."
};

export const professionalExperience = {
  title: "💼 Experiência Profissional",
  jobs: [
    {
      company: "MX Parts",
      location: "São José dos Pinhais, PR",
      role: "Assistente de Web & Operações Digitais",
      period: "abr/2015 a mar/2018",
      description: "Responsável pelo suporte técnico a interfaces de e-commerce e automação de processos operacionais, garantindo eficiência e padronização.",
      responsibilities: [
        "Manteve e otimizou interfaces web utilizando HTML5 e CSS3, assegurando consistência visual e usabilidade.",
        "Desenvolveu automações em Excel para controle de estoque, aumentando a precisão e integridade dos dados operacionais.",
        "Aplicou técnicas de SEO e otimização de ativos digitais, contribuindo para melhor posicionamento e performance do e-commerce."
      ]
    }
  ]
};

export const technicalSkills = {
  title: "🧪 Habilidades Técnicas",
  categories: [
    {
      name: "Front-end",
      skills: [
        { name: "React 19", icon: <FaReact /> },
        { name: "TypeScript", icon: <FaJsSquare /> },
        { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
        { name: "Tailwind CSS", icon: <FaCss3Alt /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "PWA", icon: <AiOutlineMobile /> },
        { name: "TanStack Query", icon: <AiOutlineApi /> }
      ]
    },
    {
      name: "Back-end",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "APIs REST", icon: <AiOutlineApi /> }
      ]
    },
    {
      name: "Bancos de Dados & Persistência",
      skills: [
        { name: "PostgreSQL", icon: <BsFillDatabaseFill /> },
        { name: "Supabase", icon: <AiOutlineCloudServer /> },
        { name: "IndexedDB (Dexie.js)", icon: <BsFillDatabaseFill /> },
        { name: "SQL", icon: <BsFillDatabaseFill /> }
      ]
    },
    {
      name: "DevOps & Build Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub Actions", icon: <FaGithub /> },
        { name: "CI/CD", icon: <SiVercel /> },
        { name: "Vite", icon: <CgWebsite /> },
        { name: "Webpack", icon: <CgWebsite /> }
      ]
    },
    {
      name: "Arquitetura & Metodologias",
      skills: [
        { name: "Arquitetura Local-First", icon: <MdOutlineArchitecture /> },
        { name: "Clean Code", icon: <BsCodeSlash /> },
        { name: "Scrum", icon: <DiScrum /> },
        { name: "Resolução de Problemas", icon: <BsClipboardCheck /> }
      ]
    },
    {
      name: "Ferramentas & Outros",
      skills: [
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Zustand", icon: <BsCodeSlash /> },
        { name: "Fuse.js", icon: <BsCodeSlash /> },
        { name: "NLP (Regex)", icon: <BsFileEarmarkCode /> }
      ]
    }
  ]
};

export const education = {
  title: "📚 Formação Acadêmica",
  course: "Bacharelado em Engenharia de Software",
  institution: "UNOPAR Anhanguera",
  period: "Cursando o 6º semestre – Conclusão em 06/2026",
  description: "Formação com foco em arquitetura de software, desenvolvimento web e modelagem de dados. Sólida base em Programação Orientada a Objetos, Clean Code, bancos de dados SQL/NoSQL, APIs REST e metodologias ágeis.",
  curriculum: [
    {
      semester: "1º Semestre",
      subjects: ["Arquitetura e Organização de Computadores", "Direito Cibernético", "Empreendedorismo e Inovação", "Sistemas Operacionais"],
      technologies: ["Hardware", "Software", "LGPD", "Conceitos de SO"]
    },
    {
      semester: "2º Semestre",
      subjects: ["Algoritmos e Programação Estruturada", "Análise e Modelagem de Sistemas", "Linguagem de Programação", "Lógica e Matemática Computacional"],
      technologies: ["Lógica de Programação", "UML", "Fluxogramas", "Python", "C"]
    },
    {
      semester: "3º Semestre",
      subjects: ["Análise Orientada a Objetos", "Engenharia de Requisitos", "Engenharia de Software", "Modelagem de Dados"],
      technologies: ["POO", "Casos de Uso", "SQL", "MER/DER", "Scrum"]
    },
    {
      semester: "4º Semestre",
      subjects: ["Computação em Nuvem", "Fundamentos da Inteligência Artificial", "Linguagem Orientada a Objetos", "Programação e Desenvolvimento de Banco de Dados"],
      technologies: ["Cloud Computing", "AWS/Azure", "Machine Learning", "Java", "SQL Avançado"]
    },
    {
      semester: "5º Semestre",
      subjects: ["Arquitetura de Software", "Gerenciamento e Qualidade de Software", "Governança de TI", "Interface e Usabilidade", "Programação Web"],
      technologies: ["Design Patterns", "QA", "ITIL/COBIT", "UI/UX", "HTML5", "CSS3", "JavaScript"]
    },
    {
      semester: "6º Semestre",
      subjects: ["Bancos de Dados Não Relacionais", "Frameworks para Desenvolvimento", "Implementação de Projeto Web", "Infraestrutura Ágil"],
      technologies: ["NoSQL", "MongoDB", "React", "Node.js", "Express.js", "DevOps", "CI/CD"]
    },
    {
      semester: "7º Semestre",
      subjects: ["Desenvolvimento de E-commerce com CMS", "Desenvolvimento Mobile", "Segurança em Engenharia de Software", "Testes e Manutenção de Software"],
      technologies: ["Wordpress/Shopify", "React Native/Flutter", "OWASP", "Testes Unitários", "Testes de Integração", "Jest"]
    }
  ]
};

export const languages = {
  title: "🌍 Idiomas",
  list: [
    {
      countryCode: "BR",
      name: "Português",
      level: "Nativo"
    },
    {
      countryCode: "US",
      name: "Inglês",
      level: "Avançado (B2)",
      details: "Wizard – 2019"
    }
  ]
};

export const projects = {
  title: "🚀 Projetos em Destaque",
  items: [
    {
      image: "zenbolso.png",
      title: "ZenBolso — Gerenciador Financeiro Pessoal (PWA)",
      description:
        "PWA para gestão financeira pessoal com arquitetura Local-First. Implementa persistência local via IndexedDB para funcionamento offline completo e sincronização opcional em nuvem (Supabase), priorizando performance, resiliência e experiência do usuário em qualquer condição de conectividade.",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "IndexedDB",
        "PWA"
      ],
      liveUrl: "https://zenbolso.vercel.app",
      repoUrl: "https://github.com/HerculesArthurN/zenbolso"
    },
    {
      image: "zen-notes.png",
      title: "Zen Notes — Sistema de Produtividade e Foco",
      description:
        "Sistema de produtividade fundamentado em metodologias comprovadas (Kanban, Ivy Lee, Eat the Frog). Integra gerenciamento de tarefas, timer Pomodoro e autenticação progressiva em arquitetura Local-First, demonstrando domínio de gerenciamento de estado complexo e design centrado no usuário.",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "Zustand",
        "PWA",
        "Tailwind CSS"
      ],
      liveUrl: "https://zen-notes-eight.vercel.app/",
      repoUrl: "https://github.com/HerculesArthurN/zen-notes"
    },
    {
      image: "portfolio.png",
      title: "Portfólio Pessoal em React",
      description:
        "Portfólio profissional desenvolvido em React para showcase de projetos e competências técnicas. Aplica princípios de componentização, separação de responsabilidades e manutenibilidade, com design moderno em Glassmorphism e foco em apresentação clara de informações.",
      technologies: [
        "React",
        "JavaScript (ES6+)",
        "CSS Modules",
        "HTML5",
        "GitHub Pages"
      ],
      liveUrl: "https://herculesnardelli-portfolio.vercel.app/",
      repoUrl: "https://github.com/HerculesArthurN/repositorio-portfolio"
    }
  ]
};