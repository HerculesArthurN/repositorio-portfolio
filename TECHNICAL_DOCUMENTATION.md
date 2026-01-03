# Documentação Técnica - Portfólio Pessoal

## 1. Visão Geral do Projeto

### 1.1 Objetivo do Sistema
O **Portfólio Pessoal - Hércules Arthur Nardelli** é uma aplicação web Single Page Application (SPA) desenvolvida para apresentar de forma profissional e interativa a trajetória acadêmica, experiência profissional, habilidades técnicas e projetos desenvolvidos por um engenheiro de software em formação.

### 1.2 Problema que Resolve
O projeto resolve a necessidade de centralizar e apresentar informações profissionais de forma estruturada, acessível e visualmente atraente, facilitando:
- **Recrutadores e empresas**: Avaliação rápida de competências técnicas e projetos desenvolvidos
- **Networking profissional**: Compartilhamento de credenciais e experiências de forma padronizada
- **Marca pessoal**: Estabelecimento de presença digital profissional com identidade visual moderna

### 1.3 Público-Alvo
- Recrutadores técnicos e gestores de RH
- Empresas de tecnologia buscando desenvolvedores júnior/pleno
- Profissionais da área de tecnologia para networking
- Stakeholders técnicos interessados em avaliar competências

---

## 2. Arquitetura da Solução

### 2.1 Visão Macro da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                        USUÁRIO FINAL                         │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    CDN / HOSTING LAYER                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Vercel Edge Network / GitHub Pages                  │   │
│  │  - Distribuição global de conteúdo estático          │   │
│  │  - Cache agressivo de assets                         │   │
│  │  - HTTPS automático                                  │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER (SPA)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  React Application (Create React App)                │   │
│  │                                                       │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │   │
│  │  │   Layout    │  │ Components  │  │    Pages    │  │   │
│  │  │  - Navbar   │  │  - About    │  │  - HomePage │  │   │
│  │  │  - Footer   │  │  - Projects │  │             │  │   │
│  │  │             │  │  - Skills   │  │             │  │   │
│  │  │             │  │  - Education│  │             │  │   │
│  │  │             │  │  - Experience│ │             │  │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  │   │
│  │                                                       │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │         Data Layer (portfolioData.js)           │ │   │
│  │  │  - Centralização de dados estruturados          │ │   │
│  │  │  - Separação de conteúdo e apresentação         │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Fluxo de Dados

```
┌──────────────┐
│   Browser    │
└──────┬───────┘
       │ 1. Request inicial (index.html)
       ▼
┌──────────────────┐
│  Vercel/GitHub   │
│      Pages       │
└──────┬───────────┘
       │ 2. Retorna bundle estático
       ▼
┌──────────────────┐
│   React App      │
│   (App.js)       │
└──────┬───────────┘
       │ 3. Renderiza estrutura
       ▼
┌──────────────────┐
│   HomePage       │
└──────┬───────────┘
       │ 4. Importa componentes
       ▼
┌──────────────────────────────────────┐
│  Components (About, Projects, etc.)  │
└──────┬───────────────────────────────┘
       │ 5. Consome dados
       ▼
┌──────────────────┐
│ portfolioData.js │
│  (Data Source)   │
└──────────────────┘
```

### 2.3 Infraestrutura e Deploy

**Estratégia de Deploy Dual:**
1. **GitHub Pages** (Produção Principal)
   - URL: `https://herculesarthurn.github.io/repositorio-portfolio/`
   - Deploy automatizado via `gh-pages`
   - Build estático servido diretamente

2. **Vercel** (Alternativa/Staging)
   - Deploy contínuo via integração Git
   - Preview deployments para branches
   - Configuração via `vercel.json`

---

## 3. Tecnologias Utilizadas

### 3.1 Linguagens de Programação

| Linguagem | Versão | Uso |
|-----------|--------|-----|
| **JavaScript (ES6+)** | ECMAScript 2015+ | Lógica de componentes, manipulação de estado, event handlers |
| **HTML5** | 5 | Estrutura semântica e marcação |
| **CSS3** | 3 | Estilização, animações, responsividade |

### 3.2 Frameworks e Bibliotecas

#### Core Framework
- **React** `^19.1.1`
  - Biblioteca principal para construção da interface
  - Componentização e reutilização de código
  - Virtual DOM para performance otimizada
  - Hooks para gerenciamento de estado (`useState`)

- **React DOM** `^19.1.1`
  - Renderização de componentes React no DOM

#### Bibliotecas de UI
- **React Icons** `^5.5.0`
  - Ícones vetoriais de múltiplas bibliotecas (Font Awesome, Simple Icons, etc.)
  - Componentes React nativos
  - Uso: Ícones de redes sociais, tecnologias, navegação

- **React Country Flag** `^3.1.0`
  - Renderização de bandeiras de países
  - Uso: Seção de idiomas

#### Build Tools
- **React Scripts** `^5.0.1`
  - Abstração do Webpack, Babel, ESLint
  - Scripts de desenvolvimento e build
  - Configuração zero para Create React App

### 3.3 Banco de Dados
**Não aplicável** - A aplicação é 100% estática, sem persistência de dados. Todos os dados são armazenados em estruturas JavaScript no arquivo `src/data/portfolioData.js`.

### 3.4 Serviços de Terceiros e Integrações

| Serviço | Finalidade | Tipo de Integração |
|---------|------------|-------------------|
| **GitHub Pages** | Hospedagem estática | Deploy automatizado via `gh-pages` |
| **Vercel** | Hospedagem alternativa e preview | Integração Git contínua |
| **Google Fonts** | Tipografia customizada | CDN (se aplicável) |
| **React Icons CDN** | Biblioteca de ícones | NPM package |

### 3.5 Infraestrutura, Cloud e CI/CD

#### Hospedagem
- **GitHub Pages**
  - Servidor: GitHub CDN
  - HTTPS: Automático
  - Deploy: Via `gh-pages` package

- **Vercel**
  - Edge Network global
  - Serverless Functions (não utilizado)
  - Automatic HTTPS e CDN

#### CI/CD Pipeline

```
┌─────────────┐
│  Git Push   │
│  to main    │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  GitHub Actions     │
│  (se configurado)   │
└──────┬──────────────┘
       │
       ├──────────────────────┐
       │                      │
       ▼                      ▼
┌──────────────┐      ┌──────────────┐
│ npm install  │      │ Vercel Auto  │
│ npm run build│      │   Deploy     │
│ npm run deploy│     └──────────────┘
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ GitHub Pages │
│   Updated    │
└──────────────┘
```

**Scripts de Deploy:**
```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

#### Ferramentas de Monitoramento
- **Vercel Analytics** (se habilitado): Métricas de performance e uso
- **GitHub Insights**: Tráfego e estatísticas de repositório
- **Browser DevTools**: Lighthouse para auditoria de performance

---

## 4. Funcionalidades do Aplicativo

### 4.1 Funcionalidades Principais

#### 4.1.1 Navegação Responsiva
- **Navbar fixa** com scroll suave entre seções
- Menu hambúrguer para dispositivos móveis
- Links âncora para navegação interna (`#about`, `#projects`, etc.)
- Estado de menu mobile gerenciado via `useState`

**Implementação:**
```javascript
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
```

#### 4.1.2 Seção "Sobre Mim"
- Apresentação pessoal com objetivo profissional
- Cálculo dinâmico de idade (se implementado)
- Links para redes sociais com ícones interativos
- Informações de contato

#### 4.1.3 Portfólio de Projetos
- Grid responsivo de cards de projetos
- Cada projeto contém:
  - Imagem de preview
  - Título e descrição técnica
  - Tags de tecnologias utilizadas
  - Links para demo ao vivo e repositório GitHub
- Imagens carregadas via imports estáticos

**Estrutura de Dados:**
```javascript
{
  image: "zenbolso.png",
  title: "ZenBolso — Gerenciador Financeiro Pessoal (PWA)",
  description: "Aplicação web progressiva...",
  technologies: ["React", "TypeScript", "Supabase", ...],
  liveUrl: "https://zenbolso.vercel.app",
  repoUrl: "https://github.com/..."
}
```

#### 4.1.4 Experiência Profissional
- Timeline de experiências
- Detalhamento de responsabilidades
- Período de atuação

#### 4.1.5 Habilidades Técnicas
- Categorização de skills (Frontend, Backend, DevOps, etc.)
- Ícones visuais para cada tecnologia
- Organização em grid responsivo

#### 4.1.6 Formação Acadêmica
- Detalhamento do curso de Engenharia de Software
- Currículo semestral com disciplinas e tecnologias
- Período e instituição

#### 4.1.7 Idiomas
- Listagem de idiomas com bandeiras
- Níveis de proficiência
- Certificações

### 4.2 Fluxos Críticos de Uso

#### Fluxo 1: Acesso Inicial ao Portfólio
```
1. Usuário acessa URL
   ↓
2. Navegador carrega index.html
   ↓
3. React App inicializa
   ↓
4. Componentes são renderizados sequencialmente
   ↓
5. Dados são consumidos de portfolioData.js
   ↓
6. Interface completa é exibida
```

#### Fluxo 2: Navegação entre Seções
```
1. Usuário clica em link da navbar
   ↓
2. Event handler previne comportamento padrão (se aplicável)
   ↓
3. Scroll suave até seção correspondente (via CSS scroll-behavior)
   ↓
4. Menu mobile fecha automaticamente (se aberto)
```

#### Fluxo 3: Acesso a Projeto Externo
```
1. Usuário clica em "Ver Demo" ou "Repositório"
   ↓
2. Link abre em nova aba (target="_blank")
   ↓
3. Atributos de segurança aplicados (rel="noopener noreferrer")
```

### 4.3 Regras de Negócio Relevantes

1. **Centralização de Dados**
   - Todos os dados do portfólio devem estar em `portfolioData.js`
   - Componentes devem ser agnósticos aos dados específicos
   - Facilita manutenção e atualização de conteúdo

2. **Responsividade Obrigatória**
   - Layout deve adaptar-se a viewports de 320px a 2560px
   - Breakpoints principais: mobile (<768px), tablet (768-1024px), desktop (>1024px)

3. **Acessibilidade**
   - Links externos devem ter `rel="noopener noreferrer"`
   - Imagens devem ter atributo `alt` descritivo
   - Navegação deve ser possível via teclado

4. **Performance**
   - Imagens devem ser otimizadas (formato WebP preferencial)
   - Assets estáticos devem ter cache agressivo (1 ano)
   - HTML deve ter cache de revalidação

### 4.4 Permissões, Papéis de Usuário e Segurança

**Não aplicável** - A aplicação é pública e estática, sem:
- Sistema de autenticação
- Controle de acesso
- Dados sensíveis
- Backend ou API

**Medidas de Segurança Implementadas:**
- `rel="noopener noreferrer"` em links externos (previne window.opener exploit)
- HTTPS forçado via GitHub Pages/Vercel
- Sem exposição de chaves de API ou credenciais
- Content Security Policy via headers (se configurado)

---

## 5. Aspectos Não Funcionais

### 5.1 Escalabilidade

#### Escalabilidade de Conteúdo
- **Arquitetura orientada a dados**: Adicionar novos projetos, skills ou experiências requer apenas edição de `portfolioData.js`
- **Componentização**: Novos tipos de seções podem ser criados como componentes isolados
- **Limitações**: Como aplicação estática, não há escalabilidade de processamento ou armazenamento

#### Escalabilidade de Tráfego
- **CDN Global**: GitHub Pages e Vercel distribuem conteúdo via edge locations
- **Cache Agressivo**: Assets estáticos cacheados por 1 ano (`max-age=31536000`)
- **Sem servidor**: Arquitetura JAMstack elimina gargalos de backend
- **Capacidade**: Suporta milhões de requisições simultâneas via CDN

### 5.2 Performance

#### Métricas Alvo (Lighthouse)
| Métrica | Alvo | Estratégia |
|---------|------|-----------|
| **First Contentful Paint** | < 1.5s | Bundle otimizado, assets minificados |
| **Largest Contentful Paint** | < 2.5s | Lazy loading de imagens, code splitting |
| **Time to Interactive** | < 3.5s | JavaScript mínimo, sem dependências pesadas |
| **Cumulative Layout Shift** | < 0.1 | Dimensões fixas para imagens |
| **Total Blocking Time** | < 300ms | Execução JavaScript otimizada |

#### Otimizações Implementadas

**Build-time:**
- Minificação de JavaScript/CSS via Webpack (React Scripts)
- Tree shaking para remoção de código não utilizado
- Hashing de arquivos para cache busting

**Runtime:**
- Virtual DOM do React para atualizações eficientes
- CSS Modules para escopo isolado e eliminação de CSS não utilizado
- Imagens otimizadas e servidas via CDN

**Network:**
```json
// vercel.json - Cache Headers
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### Bundle Size
- **Target**: < 200KB (gzipped)
- **Atual**: Verificar via `npm run build` → build/static/js/

### 5.3 Segurança

#### Vulnerabilidades Mitigadas

1. **Cross-Site Scripting (XSS)**
   - React escapa automaticamente conteúdo renderizado
   - Sem uso de `dangerouslySetInnerHTML`

2. **Tabnabbing**
   - Todos os links externos usam `rel="noopener noreferrer"`

3. **Dependency Vulnerabilities**
   - Auditoria regular via `npm audit`
   - Atualizações de segurança via `npm update`

4. **HTTPS Enforcement**
   - GitHub Pages e Vercel forçam HTTPS
   - Redirecionamento automático de HTTP → HTTPS

#### Headers de Segurança (Recomendados)
```json
// vercel.json (adicionar)
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 5.4 Observabilidade

#### Logging
- **Browser Console**: Erros de runtime capturados automaticamente
- **React Error Boundaries**: Não implementado (recomendado para produção)

#### Monitoramento
- **Vercel Analytics** (se habilitado):
  - Core Web Vitals
  - Pageviews e visitantes únicos
  - Geolocalização de usuários

- **GitHub Pages**:
  - Traffic insights no repositório
  - Referrers e páginas populares

#### Debugging
```javascript
// Modo de desenvolvimento
npm start
// Habilita React DevTools, source maps, hot reload
```

#### Métricas de Negócio (Sugeridas)
- Google Analytics para tracking de conversões
- Heatmaps (Hotjar) para análise de comportamento
- Event tracking em cliques de projetos

### 5.5 Manutenibilidade

#### Organização de Código

**Estrutura de Pastas:**
```
src/
├── assets/          # Recursos estáticos (imagens)
│   └── images/
│       └── projects/
├── components/      # Componentes reutilizáveis
│   ├── About/
│   │   ├── About.js
│   │   └── About.module.css
│   ├── Education/
│   ├── Experience/
│   ├── Projects/
│   └── Skills/
├── data/            # Camada de dados
│   └── portfolioData.js
├── layout/          # Componentes de estrutura
│   ├── Footer/
│   └── Navbar/
├── pages/           # Componentes de página
│   └── HomePage/
└── styles/          # Estilos globais
    └── global.css
```

#### Padrões de Código

**Componentização:**
- Cada componente em pasta própria com `.js` e `.module.css`
- Componentes funcionais com hooks
- Props tipadas via PropTypes (recomendado adicionar)

**Separação de Responsabilidades:**
- **Apresentação**: Componentes React
- **Dados**: `portfolioData.js`
- **Estilo**: CSS Modules (escopo isolado)
- **Lógica**: Hooks e event handlers

**Nomenclatura:**
- Componentes: PascalCase (`About.js`)
- Arquivos CSS: kebab-case com `.module.css`
- Variáveis: camelCase
- Constantes: UPPER_SNAKE_CASE (se aplicável)

#### Documentação

**Código:**
- Comentários JSDoc para funções complexas (adicionar)
- README.md com instruções de setup e deploy
- TECHNICAL_DOCUMENTATION.md (este arquivo)

**Deploy:**
- VERCEL_DEPLOYMENT_GUIDE.md
- VERCEL_QUICK_REFERENCE.md

#### Testes

**Configuração Atual:**
```json
"scripts": {
  "test": "react-scripts test --passWithNoTests"
}
```

**Recomendações:**
- Adicionar testes unitários com Jest/React Testing Library
- Testes de snapshot para componentes
- Testes de integração para fluxos críticos

**Exemplo de Teste:**
```javascript
// About.test.js
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders about section with title', () => {
  render(<About />);
  const titleElement = screen.getByText(/Sobre Mim/i);
  expect(titleElement).toBeInTheDocument();
});
```

#### Versionamento

**Git Workflow:**
- Branch principal: `main`
- Feature branches: `feature/nome-da-feature`
- Commits semânticos: `feat:`, `fix:`, `docs:`, `style:`

**Semantic Versioning:**
- Atual: `1.0.0` (package.json)
- Major: Mudanças breaking
- Minor: Novas features
- Patch: Bug fixes

---

## 6. Configuração e Ambiente

### 6.1 Requisitos de Sistema

**Desenvolvimento:**
- Node.js: `>= 18.0.0`
- npm: `>= 9.0.0`
- Git: Qualquer versão recente

**Produção:**
- Navegadores modernos (últimas 2 versões)
- Suporte a ES6+
- JavaScript habilitado

### 6.2 Variáveis de Ambiente

**Não aplicável** - Aplicação não utiliza variáveis de ambiente.

### 6.3 Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Inicia servidor dev em localhost:3000

# Build
npm run build          # Gera build de produção em /build

# Testes
npm test               # Executa testes em modo watch

# Deploy
npm run predeploy      # Executa build antes do deploy
npm run deploy         # Deploy para GitHub Pages
```

### 6.4 Configuração do Vercel

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 7. Roadmap e Melhorias Futuras

### 7.1 Curto Prazo
- [ ] Adicionar React Error Boundaries
- [ ] Implementar testes unitários (cobertura > 80%)
- [ ] Otimizar imagens (converter para WebP)
- [ ] Adicionar PropTypes para validação de props
- [ ] Implementar lazy loading de componentes

### 7.2 Médio Prazo
- [ ] Adicionar modo escuro/claro
- [ ] Implementar animações com Framer Motion
- [ ] Adicionar seção de blog (integração com CMS headless)
- [ ] Implementar i18n (internacionalização)
- [ ] Adicionar Google Analytics

### 7.3 Longo Prazo
- [ ] Migrar para Next.js (SSG/ISR)
- [ ] Adicionar CMS para gerenciamento de conteúdo
- [ ] Implementar formulário de contato com backend
- [ ] Criar versão PWA com offline support

---

## 8. Referências e Recursos

### 8.1 Documentação Oficial
- [React Documentation](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages](https://docs.github.com/en/pages)

### 8.2 Bibliotecas Utilizadas
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Country Flag](https://www.npmjs.com/package/react-country-flag)

### 8.3 Ferramentas de Desenvolvimento
- [VS Code](https://code.visualstudio.com/)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 9. Contato e Suporte

**Desenvolvedor:** Hércules Arthur Nardelli  
**Email:** herculesnardelli@gmail.com  
**GitHub:** [@HerculesArthurN](https://github.com/HerculesArthurN)  
**LinkedIn:** [hercules-arthur-nardelli](https://linkedin.com/in/hercules-arthur-nardelli)

---

**Última Atualização:** 02/01/2026  
**Versão do Documento:** 1.0.0  
**Versão da Aplicação:** 1.0.0
