# Portfólio — Katherine Uchoa

Portfólio pessoal em português, com identidade editorial em tons pastel e foco em projetos, experimentos e aprendizados em tecnologia.

## Estrutura

- `index.html`: conteúdo e estrutura semântica da página.
- `styles.css`: identidade visual, layout mobile first, temas claro/escuro e estados de interação.
- `portfolio-data.js`: conteúdo local e camada de leitura `getPerfil()` / `getBlocos()`.
- `portfolio.js`: renderização da interface usando a camada de dados.
- `assets/katherine-uchoas.jpeg`: retrato do perfil.
- `favicon.svg`: ícone da página.
- `PLANO.md`: escopo e critérios das quatro fases do projeto.

## Visualizar localmente

Abra `index.html` em um navegador com JavaScript ativado. Não há etapa de build nem dependências instaladas.

A página carrega as fontes DM Sans e Playfair Display pelo Google Fonts. Se as fontes externas não estiverem disponíveis, serão usadas as fontes de sistema definidas como fallback. O tema acompanha a preferência claro/escuro do dispositivo.

## Atualizar conteúdo

Na Fase 1, edite perfil e projetos em `portfolio-data.js`. A interface consome os dados pelas funções `getPerfil()` e `getBlocos()`; a Fase 2 poderá trocar a origem local pelo Supabase mantendo essa camada.
