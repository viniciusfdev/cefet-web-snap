function readImage(file) {
  return new Promise((resolve, reject) => {
    const regex = new RegExp("(jpg|jpeg|png)$", "i");

    if (
      !file ||
      (file.type && !file.type.startsWith("image/")) ||
      !regex.test(file.name)
    ) {
      console.error("[400] Invalid image ext.");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", (event) => resolve(event.target.result));
    reader.addEventListener("error", (event) => reject(event));
    reader.readAsDataURL(file);
  });
}

function selectFilter(event) {
  mainImg.style.filter = event.target.value;
}

function replaceImage(event) {
  const fileList = event.target.files;

  readImage(fileList["0"])
    .then((data) => (mainImg.src = data))
    .catch((err) => console.error(err));
}

filtroFoto.addEventListener("change", selectFilter);
inputImg.addEventListener("change", replaceImage);
