const controlCheck = document.getElementById("visibilidade-das-marcacoes");
const checks = document.querySelectorAll(".marcacao");

if (controlCheck) {
  controlCheck.addEventListener("click", (event) => {
    checks.forEach(
      (c) => (c.style.display = c.style.display !== "none" ? "none" : "block")
    );
  });
}
