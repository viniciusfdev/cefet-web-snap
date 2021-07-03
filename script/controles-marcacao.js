function hideChecks(_) {
  checks.forEach(
    (c) => (c.style.display = c.style.display !== "none" ? "none" : "block")
  );
}

function fillControlls() {
  const el = document.querySelector(".selecionada");

  if (el) {
    checkTitle.value = el.dataset["titulo"];
    checkContent.value = el.dataset["conteudo"];
    checkColor.value = el.dataset["cor"];
    checkY.value = parseFloat(el.style.top);
    checkX.value = parseFloat(el.style.left);
    checkWidth.value = parseFloat(el.style.width);
    checkHeight.value = parseFloat(el.style.height);
    const roValue = el.dataset["formato"];
    radioOptions.forEach((ro) => (ro.checked = roValue === ro.value));
  }
}

function cleanControlls() {
  checkTitle.value = "";
  checkContent.value = "";
  checkColor.value = "";
  checkY.value = "";
  checkX.value = "";
  checkWidth.value = "";
  checkHeight.value = "";
}

function fillSelected(callback) {
  const el = document.querySelector(".selecionada");
  callback(el);
}

function select(event) {
  const add = event.target.classList.contains("selecionada");

  document
    .querySelectorAll(".selecionada")
    .forEach((el) => el.classList.remove("selecionada"));

  if (!add) {
    event.target.classList.add("selecionada");
    fillControlls();
  } else {
    cleanControlls();
  }
}

if (controlCheck) {
  controlCheck.addEventListener("click", hideChecks);
}

checks.forEach((c) => c.addEventListener("click", select));

checkTitle.addEventListener("input", (e) =>
  fillSelected((el) => (el.dataset.titulo = e.target.value))
);
checkContent.addEventListener("input", (e) =>
  fillSelected((el) => (el.dataset.conteudo = e.target.value))
);
checkColor.addEventListener("input", (e) =>
  fillSelected((el) => (el.dataset.cor = e.target.value))
);
checkX.addEventListener("input", (e) =>
  fillSelected((el) => (el.style.left = `${e.target.value}px`))
);
checkY.addEventListener("input", (e) =>
  fillSelected((el) => (el.style.top = `${e.target.value}px)`))
);
checkWidth.addEventListener("input", (e) =>
  fillSelected((el) => (el.style.width = `${e.target.value}px`))
);
checkHeight.addEventListener("input", (e) =>
  fillSelected((el) => (el.style.height = `${e.target.value}px`))
);

radioOptions.forEach((ro) =>
  ro.addEventListener("input", (e) =>
    fillSelected((el) => {
      el.dataset.formato = e.target.value;
      el.classList.remove("formato-retangular");
      el.classList.remove("formato-over");
      el.classList.add(e.target.value);
    })
  )
);

fillControlls();
