# Plano do portfólio pessoal — Katherine Uchoa

## Objetivo

Apresentar quem sou, meus projetos e os assuntos que exploro em tecnologia para recrutadores e para a comunidade. O portfólio deve demonstrar trabalho e capacidade sem se apresentar como uma página de busca por emprego.

## Decisões de produto

- Idioma: português do Brasil.
- Canais públicos: LinkedIn e GitHub.
- Identidade: editorial, moderna, marcante e pastel; sem efeitos 3D.
- Prioridade de interface: celular primeiro, com adaptações para telas maiores.
- A seção “Sobre mim” abre o conteúdo principal; os projetos vêm em seguida.
- Os projetos podem ser blocos visuais com título, descrição e tecnologias.
- A página pública permanece acessível sem login.
- O conteúdo fica atrás de funções de leitura para que a origem dos dados possa mudar sem reescrever a interface.
- Não incluir painel administrativo, edição ou autenticação antes das respectivas fases.

## Fase 1 — Frontend público

### Escopo

- Apresentar foto, nome e bio curta (até duas linhas), seguidos de uma apresentação mais completa.
- Mostrar os projetos e links atuais do GitHub.
- Oferecer atalhos para LinkedIn e GitHub.
- Aplicar layout mobile first, navegação por âncoras e estados acessíveis de foco.
- Respeitar automaticamente a preferência de tema claro/escuro do dispositivo.
- Concentrar os dados em `portfolio-data.js`, expostos por `getPerfil()` e `getBlocos()`.
- Renderizar os projetos com JavaScript, sem misturar a fonte dos dados à estrutura de leitura da página.

### Critérios de pronto

- [ ] O conteúdo principal abre com “Sobre mim”.
- [ ] Foto, nome, bio curta, apresentação e links estão corretos.
- [ ] Os sete projetos e seus links aparecem a partir de `getBlocos()`.
- [ ] `getPerfil()` fornece perfil e links sociais.
- [ ] O layout é legível e utilizável em celular e desktop.
- [ ] O tema segue `prefers-color-scheme` claro/escuro.
- [ ] Os links abrem os destinos corretos e têm foco visível.
- [ ] Não existe rota de admin, login ou escrita de conteúdo.

### Checagem para encerrar a Fase 1

Esta entrega inclui foto, nome e bio curta, camada `getPerfil()/getBlocos()`, tema automático e renderização dos projetos. Depois do merge, ainda é preciso conferir visualmente no celular e abrir os links no navegador antes de considerar todos os critérios aceitos.

## Fase 2 — Backend com Supabase

### Escopo planejado

- Criar um projeto Supabase para o portfólio e registrar URL e chave pública de leitura no site.
- Criar e versionar uma migration SQL para as tabelas `perfil` e `blocos`.
- Migrar para as tabelas o perfil, links sociais e projetos existentes.
- Substituir somente a implementação de `getPerfil()` e `getBlocos()` pela leitura no Supabase.
- Exibir estados de carregamento, erro e lista vazia.
- Manter a página pública somente para leitura; não criar admin, login nem fluxos de escrita nesta fase.
- Confirmar custos e limites do projeto antes de sua criação.

### Critério de pronto

Alterar o título de um bloco no banco e ver a mudança no portfólio após recarregar a página. Nenhum dado de serviço com permissão de escrita deve ser enviado ao navegador.

## Fase 3 — Área de administração

### Escopo planejado

- Criar interface para editar perfil, links e blocos de projetos.
- Implementar criação, edição, ordenação, publicação/ocultação e remoção de blocos.
- Validar campos e apresentar feedback de salvamento e erro.
- Nesta fase, desenvolver a experiência administrativa; não considerar a rota protegida até a Fase 4.

### Critério de pronto

Uma alteração feita pela interface administrativa persiste no Supabase e é refletida na página pública. O lançamento da escrita administrativa deve aguardar a proteção da Fase 4.

## Fase 4 — Login e segurança

### Escopo planejado

- Adicionar autenticação para a administradora.
- Restringir rotas e operações de escrita a uma identidade autorizada.
- Habilitar e testar políticas RLS no Supabase para leitura pública e escrita administrativa.
- Configurar recuperação de acesso, encerramento de sessão e estados de erro.
- Revisar que chaves privilegiadas permaneçam fora do frontend.

### Critério de pronto

Visitantes veem a página pública sem login; somente a conta autorizada pode entrar no admin e alterar dados. Chamadas não autorizadas são negadas pelo banco, não apenas escondidas pela interface.

## Fora do escopo até a Fase 4

- Criar banco ou migrations antes de concluir e revisar a Fase 1.
- Rotas, componentes ou operações de administração.
- Autenticação, autorização e edição de conteúdo.
- Colocar chaves privilegiadas em arquivos públicos.

## Referências do conteúdo

- LinkedIn: https://www.linkedin.com/in/katherine-uchoas-42037a97
- GitHub: https://github.com/katherineuchoas
- Projetos: repositórios públicos listados na seção “Projetos” da página.
