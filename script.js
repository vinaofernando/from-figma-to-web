const menuList = document.getElementById("menu-checkbox");
function visualList() {
  const menuNav = document.getElementById("links");
  const buttonSelect = document.getElementById("group-bottons");

  buttonSelect.classList.toggle("active");
  menuNav.classList.toggle("active");
}
menuList.addEventListener("click", visualList);
