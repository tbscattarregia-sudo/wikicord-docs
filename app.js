const content = document.getElementById("page-content");
const links = document.querySelectorAll("nav a");

async function loadPage(page) {
  try {
    const res = await fetch(`./pages/${page}.html`);
    const html = await res.text();
    content.innerHTML = html;
  } catch {
    content.innerHTML = "<h1>404 - Página no encontrada</h1>";
  }
}

function setActiveLink(hash) {
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === hash) {
      link.classList.add("active");
    }
  });
}

function router() {
  let hash = window.location.hash;

  if (!hash) {
    hash = "#/overview";
    window.location.hash = hash;
  }

  const page = hash.replace("#/", "");

  loadPage(page);
  setActiveLink(hash);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);