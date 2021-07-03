function selectFilter(event) {
  document.querySelector(".foto-anotada > img").style.filter =
    event.target.value;
}

filtroFoto.addEventListener("change", selectFilter);
