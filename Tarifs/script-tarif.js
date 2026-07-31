const boutonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (boutonMenu) {
    boutonMenu.addEventListener("click", () => {

        menu.classList.toggle("active");
    
    });
}