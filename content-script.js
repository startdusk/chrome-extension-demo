window.onload = () => {
  const button = document.createElement("button");
  button.id = "darkModeButton";
  button.textContent = "DO IT DARK";
  document.querySelector("#search-icon-legacy").prepend(button);
  button.addEventListener("click", () => enableChangeColorMode());
};

function enableChangeColorMode() {
  document.getElementsByTagName("ytd-rich-grid-renderer")[0].style.background =
    "red";
}
