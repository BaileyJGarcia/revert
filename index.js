const burgerButton = document.querySelector(".burger-btn");
const sideMenu = document.querySelector(".aside-parent");

if (burgerButton) {
  burgerButton.addEventListener("click", function () {
    this.classList.toggle("toggle");
    sideMenu.classList.toggle("active");
  });
}
