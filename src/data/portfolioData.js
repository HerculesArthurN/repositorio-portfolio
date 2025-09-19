import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

export const personalInfo = {
  name: "Hércules Arthur Nardelli",
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
  title: "🎯 Objetivo",
  description: "Atuar como Desenvolvedor, contribuindo para a criação de aplicações web escaláveis, com interfaces modernas e intuitivas. Busco uma oportunidade que permita aprimorar minhas habilidades em front-end e integrações com back-end, colaborando com equipes ágeis e agregando valor ao produto final."
};

export const aboutMe = {
  title: "👋 Um Pouco Sobre Mim",
  description: "Tenho {age} anos, sou casado e pai de um menino. Fora do trabalho e dos estudos, gosto de respirar ar fresco, plantando e vendendo morangos. Quando quero descontrair, curto jogar FPS, ler mangás, manhwas e webtoons e, acredite ou não, treinar musculação!"
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
      skills: ["React", "JavaScript ES6+", "HTML5", "CSS3", "React Native", "UI/UX Design"] 
    },
    { 
      name: "Back-end", 
      skills: ["Node.js", "Express.js", "Python", "Java", "APIs REST"] 
    },
    {
      name: "Bancos de Dados",
      skills: ["MySQL", "SQL", "MongoDB", "Modelagem de Dados"]
    },
    {
      name: "DevOps & Testes",
      skills: ["Git", "GitHub", "CI/CD", "Jest", "Testes de Software", "Linux"]
    },
    {
      name: "Ferramentas",
      skills: ["VS Code", "Power BI", "Office", "Scrum"]
    },
    {
      name: "Metodologias & Conceitos",
      skills: ["POO", "Clean Code", "Arquitetura de Software", "Engenharia de Requisitos"]
    }
  ]
};

export const education = {
  title: "📚 Formação Acadêmica",
  course: "Bacharelado em Engenharia de Software",
  institution: "UNOPAR Anhanguera",
  period: "Jan/2023 – Jun/2026 (Previsto)",
  description: "Formação focada em arquitetura de software, design de componentes e modelagem de dados, com conhecimentos em OOP, Clean Code, testes automatizados, CI/CD, Scrum, Git/GitHub, bancos SQL/NoSQL e APIs REST.",
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