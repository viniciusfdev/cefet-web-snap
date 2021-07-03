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
fillControlls();
