function showBalaozinho(event) {
  const dataTitulo = event.target.dataset["titulo"];
  const dataConteudo = event.target.dataset["conteudo"];
  const dataCor = event.target.dataset["cor"];
  const dataFormato = event.target.dataset["formato"];
  event.target.classList.toggle(dataFormato);
  event.target.style.cor = dataCor;
  balaozinho.style.top = `${event.screenY}px`;
  balaozinho.style.left = `${event.screenX}px`;
  balaozinho.innerHTML = `<h2>${dataTitulo}</h2><p>${dataConteudo}</p>`;
}

function cleanBalaozinho(event) {
  const dataFormato = event.target.dataset["formato"];
  event.target.classList.toggle(dataFormato);
  balaozinho.innerHTML = "";
}

checks.forEach((c) => c.addEventListener("mousemove", showBalaozinho));
checks.forEach((c) => c.addEventListener("mouseleave", cleanBalaozinho));
