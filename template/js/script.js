const mainMenu = document.getElementById("mainMenu");
const btnMobile = document.getElementById("btnMobile");

const itemServices = document.getElementById("services");
const itemBuyers = document.getElementById("buyers");

btnMobile.addEventListener("click", () => {
  mainMenu.classList.toggle("menu-mobile");
});
