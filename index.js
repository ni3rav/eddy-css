function copyText() {
  navigator.clipboard
    .writeText(
      `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/niiirav/eddy-css@main/css/eddy.min.css"/>`
    )
    .then(() => {
      let buttonTxt = document.querySelector("#copyBtn");
      buttonTxt.textContent = "Copied!";
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
}
