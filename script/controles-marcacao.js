function hideChecks(_) {
  checks.forEach(
    (c) => (c.style.display = c.style.display !== "none" ? "none" : "block")
  );
}

if (controlCheck) {
  controlCheck.addEventListener("click", hideChecks);
}
