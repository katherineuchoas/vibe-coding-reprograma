/* Dados locais do portfólio. Na Fase 2, estas funções passam a consultar o Supabase. */
const perfil = {
  nome: "Katherine Uchoa",
  bio: "Desenvolvedora de software, curiosa por tecnologia e criação.",
  fotoUrl: "assets/katherine-uchoas.jpeg",
  fotoAlt: "Foto de perfil de Katherine Uchoa",
  linkedin: "https://www.linkedin.com/in/katherine-uchoas-42037a97",
  github: "https://github.com/katherineuchoas",
  apresentacao:
    "Sou desenvolvedora de software, com formação em Análise e Desenvolvimento de Sistemas. Fui selecionada para o programa Todas em Tech Futuro+: IA Aplicada, da Reprograma — mais um espaço para transformar curiosidade em prática.",
};

const blocos = [
  {
    titulo: "Vibe Coding",
    tipo: "PORTFÓLIO · IA + FRONTEND",
    descricao: "Um portfólio pessoal criado como experimento de vibe coding durante uma aula de IA da Reprograma.",
    tecnologias: ["HTML", "CSS", "Reprograma"],
    url: "https://github.com/katherineuchoas/vibe-coding-reprograma",
    acessibilidade: "Ver o portfólio Vibe Coding — Reprograma no GitHub",
    arte: "vibe",
    chamada: "PROJETO 01 · REPROGRAMa",
    desenho: '<span class="project-art__shape project-art__shape--vibe" aria-hidden="true">vibe<br /><em>coding</em></span><span class="project-art__orbit" aria-hidden="true"></span>',
  },
  {
    titulo: "Chiquinhohoots",
    tipo: "APP MOBILE · JOGO",
    descricao: "Um jogo de perguntas e respostas com pontuação e ranking local salvo no dispositivo.",
    tecnologias: ["React Native", "Expo"],
    url: "https://github.com/katherineuchoas/chiquinhohoots",
    acessibilidade: "Ver o aplicativo Chiquinhohoots no GitHub",
    arte: "quiz",
    chamada: "PROJETO 02 · MOBILE",
    desenho: '<span class="project-art__shape project-art__shape--quiz" aria-hidden="true">Q<span>?</span></span><span class="project-art__badge" aria-hidden="true">quiz<br />time!</span>',
  },
  {
    titulo: "Space Flight News",
    tipo: "SITE DE NOTÍCIAS · API",
    descricao: "Uma interface em React que consulta uma API de notícias espaciais e apresenta artigos com imagem, resumo e fonte.",
    tecnologias: ["React", "JavaScript", "API"],
    url: "https://github.com/katherineuchoas/space-flight-news",
    acessibilidade: "Ver o projeto Space Flight News no GitHub",
    arte: "space",
    chamada: "PROJETO 03 · WEB",
    desenho: '<span class="project-art__star project-art__star--one" aria-hidden="true">✳</span><span class="project-art__star project-art__star--two" aria-hidden="true">✦</span><span class="project-art__shape project-art__shape--space" aria-hidden="true">space<br /><em>flight news</em></span>',
  },
  {
    titulo: "IA para gerenciar suas finanças",
    tipo: "MATERIAL DE WORKSHOP · REPROGRAMa",
    descricao: "Material de um encontro para iniciantes, com personagens fictícias, planilhas e prompts para explorar IA em finanças com atenção à segurança dos dados.",
    tecnologias: ["IA aplicada", "Engenharia de prompt", "Educação"],
    url: "https://github.com/katherineuchoas/palestra_ia_financeiro_reprograma",
    acessibilidade: "Ver o material IA para gerenciar suas finanças no GitHub",
    arte: "finance",
    chamada: "PROJETO 04 · EDUCAÇÃO + IA",
    desenho: '<span class="project-art__shape project-art__shape--finance" aria-hidden="true">IA no<br /><em>dia a dia</em></span><span class="project-art__note" aria-hidden="true">perguntar<br />· pensar · cuidar</span>',
  },
  {
    titulo: "Gestão acadêmica",
    tipo: "MODELAGEM · SQL",
    descricao: "Modelagem de banco de dados para uma instituição de ensino, com alunos, docentes, turmas e unidades acadêmicas, além de dados e consultas de exemplo.",
    tecnologias: ["SQL", "Modelagem relacional"],
    url: "https://github.com/katherineuchoas/projetobancodedados",
    acessibilidade: "Ver o projeto de banco de dados acadêmico no GitHub",
    arte: "data",
    chamada: "PROJETO 05 · DADOS",
    desenho: '<span class="project-art__shape project-art__shape--data" aria-hidden="true"><i></i><i></i><i></i><b>dados<br />em relação</b></span>',
  },
  {
    titulo: "Gestão escolar",
    tipo: "APLICAÇÃO · JAVA",
    descricao: "Aplicação para gestão de escola desenvolvida com Java e Spring Boot, com persistência de dados e dependências para documentação de API.",
    tecnologias: ["Java", "Spring Boot", "JPA"],
    url: "https://github.com/katherineuchoas/projetow2",
    acessibilidade: "Ver o projeto de gestão escolar no GitHub",
    arte: "school",
    chamada: "PROJETO 06 · BACKEND",
    desenho: '<span class="project-art__shape project-art__shape--school" aria-hidden="true"><i>gestão</i><i>escolar</i><i>Java · Spring</i></span>',
  },
  {
    titulo: "Library Management System",
    tipo: "SISTEMA · PROJETO COLABORATIVO",
    descricao: "Sistema em equipe para gestão de livros e usuários, com perfis de acesso, busca por título ou autor, empréstimos e devoluções.",
    tecnologias: ["Java", "Trabalho em equipe"],
    url: "https://github.com/katherineuchoas/library_managment",
    acessibilidade: "Ver o sistema de biblioteca, desenvolvido em equipe, no GitHub",
    arte: "library",
    chamada: "PROJETO 07 · EM EQUIPE",
    desenho: '<span class="project-art__shape project-art__shape--library" aria-hidden="true"><i></i><i></i><i></i><b>uma estante<br />de possibilidades</b></span>',
  },
];

async function getPerfil() {
  return { ...perfil };
}

async function getBlocos() {
  return blocos.map((bloco) => ({
    ...bloco,
    tecnologias: [...bloco.tecnologias],
  }));
}

window.PortfolioData = Object.freeze({ getPerfil, getBlocos });
