const body = document.querySelector("body");
const slider = document.querySelector(".slider");
const waiveAnimation = document.querySelector(".wave");
const otherPorjectTitle = document.querySelector(".other-project-title-text");

slider.addEventListener("click", activateDarkMode);
waiveAnimation.addEventListener("click", waiveOnClick);

function activateDarkMode() {
  body.classList.toggle("dark-mode");
  otherPorjectTitle.classList.add("dark-mode-text");
}

function waiveOnClick() {
  waiveAnimation.classList.add("wave-click");
}
