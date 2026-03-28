const content = document.getElementById("page-content");

async function loadPage(page) {
  try {
    const res = await fetch(`./pages/${page}.html`);
    const html = await res.text();
    content.innerHTML = html;
  } catch (err) {
    content.innerHTML = "<h1>Error cargando página</h1>";
  }
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.dataset.page;
    loadPage(page);
  });
});

loadPage("overview");