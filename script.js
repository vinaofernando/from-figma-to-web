const menuList = document.getElementById("menu-checkbox");
function visualList() {
  const menuNav = document.getElementById("links");
  const buttonSelect = document.getElementById("group-bottons");

  buttonSelect.classList.toggle("active");
  menuNav.classList.toggle("active");
}
menuList.addEventListener("click", visualList);

const modoNigth = document.getElementById("modo-nigth");
function moduloNigth() {
  document.body.style.background = "black";
}
modoNigth.addEventListener("click", moduloNigth);
