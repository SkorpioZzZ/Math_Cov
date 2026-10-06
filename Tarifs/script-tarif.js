const boutonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (boutonMenu && menu) {
    boutonMenu.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("active");
        boutonMenu.setAttribute("aria-expanded", String(isOpen));
        boutonMenu.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            boutonMenu.setAttribute("aria-expanded", "false");
            boutonMenu.setAttribute("aria-label", "Ouvrir le menu");
        });
    });
}
