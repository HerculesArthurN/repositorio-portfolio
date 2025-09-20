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
  location: "São José dos Pinhais, Paraná, Brasil",
  email: "herculesnardelli@gmail.com",
  socialLinks: [
    { name: "Email", icon: FaEnvelope, url: "mailto:herculesnardelli@gmail.com" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/HerculesArthurN" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/hercules-arthur-nardelli" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@herculesarthurnardelli?si=UGhUviz8fDeFZVKJ" },
  ]
};

export const objective = {
  title: "🎯 Objetivo",
  description: "Atuar como Desenvolvedor Full Stack. Busco aprimorar minhas habilidades em tecnologias como React, Node.js, TypeScript e bancos de dados relacionais/não-relacionais, contribuindo com equipes ágeis e projetos de alto impacto."
};

export const aboutMe = {
  title: "👋 Um Pouco Sobre Mim",
  description: "Tenho {age} anos, sou casado e pai de um menino. Fora do trabalho e dos estudos, gosto de respirar ar fresco, plantando morangos. Quando quero descontrair, curto jogar FPS, ler mangás, manhwas, webtoons e treinar musculação!"
};

export const professionalExperience = {
  title: "💼 Experiência Profissional",
  jobs: [
    {
      company: "MX Parts",
      role: "Especialista de Conteúdo e E-commerce",
      period: "Abr/2015 – Mar/2018",
      description: "Atuei na linha de frente do e-commerce de uma das maiores lojas de motocross e off-road do Brasil. Fui responsável pela gestão completa do ciclo de vida dos produtos na plataforma online, desde a produção de fotografias até a criação de descrições técnicas e comerciais para um catálogo com milhares de itens. Realizei a atualização e manutenção de páginas utilizando HTML5, CSS e JavaScript, com um foco estratégico em otimização para SEO (Search Engine Optimization). Meu trabalho garantiu que os produtos tivessem máxima visibilidade e posicionamento nos motores de busca, contribuindo diretamente para a performance de vendas e a experiência do cliente."
    }
  ]
};

export const technicalSkills = {
  title: "🧪 Habilidades Técnicas",
  categories: [
    { 
      name: "Front-end", 
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript ES6+", icon: <FaJsSquare /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "React Native", icon: <AiOutlineMobile /> },
        { name: "UI/UX Design", icon: <CgWebsite /> }
      ]
    },
    { 
      name: "Back-end", 
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "APIs REST", icon: <AiOutlineApi /> }
      ] 
    },
    {
      name: "Bancos de Dados",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL", icon: <BsFillDatabaseFill /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Modelagem de Dados", icon: <BsFillDatabaseFill /> }
      ]
    },
    {
      name: "DevOps & Testes",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "CI/CD", icon: <SiVercel /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Testes de Software", icon: <BsClipboardCheck /> },
        { name: "Linux", icon: <FaLinux /> }
      ]
    },
    {
      name: "Ferramentas",
      skills: [
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Scrum", icon: <DiScrum /> },
        // Power BI e Office não têm ícones populares em react-icons,
        // então deixei sem para manter a consistência.
        // Se encontrar um, pode adicionar!
        { name: "Power BI" }, 
        { name: "Office" }
      ]
    },
    {
      name: "Metodologias & Conceitos",
      skills: [
        { name: "POO", icon: <BsFileEarmarkCode /> },
        { name: "Clean Code", icon: <BsCodeSlash /> },
        { name: "Arquitetura de Software", icon: <MdOutlineArchitecture /> },
        { name: "Engenharia de Requisitos", icon: <BsClipboardCheck /> }
      ]
    }
  ]
};

export const education = {
  title: "📚 Formação Acadêmica",
  course: "Bacharelado em Engenharia de Software",
  institution: "UNOPAR Anhanguera",
  period: "Jan/2023 – Jun/2026 (Previsto)",
  description: "Minha formação em Engenharia de Software está me capacitando para atuar em todo o ciclo de vida de um produto digital. Com foco prático em arquitetura de software e modelagem de dados, estou construindo expertise em Programação Orientada a Objetos (POO), Clean Code e práticas de DevOps como CI/CD. Tenho familiaridade com metodologias ágeis como Scrum e sou proficiente no ecossistema Git/GitHub para controle de versão, além de ter conhecimento em bancos de dados SQL e NoSQL e na criação de APIs REST.",
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
      details: "Certificado IELTS | Wizard (2017–2019)"
    }
  ]
};

export const projects = {
  title: "🚀 Projetos Pessoais",
  items: [
    {
      image: "pomodoro.png",
      title: "To-Do List com Timer Pomodoro",
      description: "Uma aplicação que une um gerenciador de tarefas a um cronômetro da técnica Pomodoro para auxiliar na gestão do tempo e produtividade. Permite adicionar, concluir e selecionar tarefas, iniciando um timer regressivo para manter o foco. Ao final, a tarefa é marcada como concluída automaticamente.",
      technologies: ["React", "TypeScript", "SASS/SCSS", "UUID"],
      liveUrl: "https://to-do-list-pomodoro-react.vercel.app/",
      repoUrl: "https://github.com/HerculesArthurN/to-do-list-pomodoro-react"
    },
    {
      image: "portfolio.png",
      title: "Portfólio Pessoal em React",
      description: "Portfólio pessoal para centralizar e apresentar minhas habilidades e projetos. Construído do zero com React, o site apresenta um design moderno no estilo Liquid Glass (Glassmorfismo). O projeto é totalmente componentizado, responsivo e seu conteúdo é gerenciado de forma centralizada em um arquivo de dados, facilitando futuras atualizações.",
      technologies: ["React", "JavaScript (ES6+)", "CSS Modules", "HTML5", "GitHub Pages"],
      liveUrl: "https://herculesarthurn.github.io/repositorio-portfolio/",
      repoUrl: "https://github.com/HerculesArthurN/repositorio-portfolio"
    },
  ]
};