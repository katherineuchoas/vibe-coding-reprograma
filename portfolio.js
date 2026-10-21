const text = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

function updateThemeColor() {
  const color = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim();
  const meta = document.querySelector("#theme-color");
  if (meta && color) meta.setAttribute("content", color);
}

const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
if (colorPreference.addEventListener) colorPreference.addEventListener("change", updateThemeColor);
else if (colorPreference.addListener) colorPreference.addListener(updateThemeColor);

const artworkTemplates = {
  vibe: '<span class="project-art__shape project-art__shape--vibe" aria-hidden="true">vibe<br /><em>coding</em></span><span class="project-art__orbit" aria-hidden="true"></span>',
  quiz: '<span class="project-art__shape project-art__shape--quiz" aria-hidden="true">Q<span>?</span></span><span class="project-art__badge" aria-hidden="true">quiz<br />time!</span>',
  space: '<span class="project-art__star project-art__star--one" aria-hidden="true">✳</span><span class="project-art__star project-art__star--two" aria-hidden="true">✦</span><span class="project-art__shape project-art__shape--space" aria-hidden="true">space<br /><em>flight news</em></span>',
  finance: '<span class="project-art__shape project-art__shape--finance" aria-hidden="true">IA no<br /><em>dia a dia</em></span><span class="project-art__note" aria-hidden="true">perguntar<br />· pensar · cuidar</span>',
  data: '<span class="project-art__shape project-art__shape--data" aria-hidden="true"><i></i><i></i><i></i><b>dados<br />em relação</b></span>',
  school: '<span class="project-art__shape project-art__shape--school" aria-hidden="true"><i>gestão</i><i>escolar</i><i>Java · Spring</i></span>',
  library: '<span class="project-art__shape project-art__shape--library" aria-hidden="true"><i></i><i></i><i></i><b>uma estante<br />de possibilidades</b></span>',
};

function renderProject(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const visual = document.createElement("a");
  const artworkKind = Object.hasOwn(artworkTemplates, project.arte) ? project.arte : "vibe";\n  visual.className = `project-card__visual project-art--${artworkKind}`;
  visual.href = project.url;
  visual.target = "_blank";
  visual.rel = "noopener noreferrer";
  visual.setAttribute("aria-label", project.acessibilidade);

  const eyebrow = document.createElement("span");
  eyebrow.className = "project-art__eyebrow";
  eyebrow.textContent = project.chamada;
  visual.append(eyebrow);

  // Este HTML é apenas decoração estática versionada junto com os dados locais.
  const artwork = document.createElement("span");
  artwork.innerHTML = project.desenho;
  visual.append(artwork);
  const arrow = document.createElement("span");
  arrow.className = "project-art__arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  visual.append(arrow);

  const details = document.createElement("div");
  details.className = "project-card__details";
  const type = document.createElement("p");
  type.className = "project-card__type";
  type.textContent = project.tipo;
  const title = document.createElement("h3");
  title.textContent = project.titulo;
  const description = document.createElement("p");
  description.textContent = project.descricao;
  const tags = document.createElement("div");
  tags.className = "project-tags";
  project.tecnologias.forEach((technology) => {
    const tag = document.createElement("span");
    tag.textContent = technology;
    tags.append(tag);
  });
  const link = document.createElement("a");
  link.className = "text-link";
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.append(document.createTextNode("Ver no GitHub "));
  const linkArrow = document.createElement("span");
  linkArrow.setAttribute("aria-hidden", "true");
  linkArrow.textContent = "↗";
  link.append(linkArrow);

  details.append(type, title, description, tags, link);
  article.append(visual, details);
  if (artworkKind === "library") article.classList.add("project-card--team");
  return article;
}

async function initializePortfolio() {
  const [perfil, blocos] = await Promise.all([
    window.PortfolioData.getPerfil(),
    window.PortfolioData.getBlocos(),
  ]);

  text("#perfil-nome", perfil.nome);
  text("#perfil-bio", perfil.bio);
  text("#perfil-apresentacao", perfil.apresentacao);
  text("#wordmark-name", perfil.nome);
  text("#footer-name", perfil.nome);
  const photo = document.querySelector("#perfil-foto");
  if (photo) {
    photo.src = perfil.fotoUrl;
    photo.alt = perfil.fotoAlt;
    photo.addEventListener("error", () => {
      photo.classList.add("about__photo--unavailable");
      photo.alt = "Retrato indisponível";
    }, { once: true });
  }
  const linkedinLinks = document.querySelectorAll("[data-profile-link='linkedin']");
  linkedinLinks.forEach((link) => { link.href = perfil.linkedin; });
  const githubLinks = document.querySelectorAll("[data-profile-link='github']");
  githubLinks.forEach((link) => { link.href = perfil.github; });

  const projectGrid = document.querySelector("#project-grid");
  if (projectGrid) {
    const fragment = document.createDocumentFragment();
    blocos.forEach((project) => fragment.append(renderProject(project)));
    projectGrid.replaceChildren(fragment);
    projectGrid.setAttribute("aria-busy", "false");
  }

  updateThemeColor();
}

initializePortfolio().catch((error) => {
  console.error("Não foi possível carregar o conteúdo do portfólio.", error);
  const grid = document.querySelector("#project-grid");
  if (grid) {
    grid.innerHTML = "<p class='project-load-error'>Não foi possível carregar os projetos agora. Tente atualizar a página.</p>";
    grid.setAttribute("aria-busy", "false");
  }
});
