let ham_icon = document.getElementById("hamburger-icon");
let icon_img = document.getElementById("icon-img");

ham_icon.addEventListener("click", function () {
  let img_src = icon_img.src;
  if (img_src.includes("icon-hamburger.svg")) {
    icon_img.setAttribute("src", "/project-tracking/images/icon-close.svg");
  } else {
    icon_img.setAttribute("src", "/project-tracking/images/icon-hamburger.svg");
  }
  let nav_links = document.getElementById("nav-links");
  nav_links.classList.toggle("notactive");
});