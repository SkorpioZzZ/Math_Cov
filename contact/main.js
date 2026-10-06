const form = document.querySelector('#devis-form');
const message = document.querySelector('#confirmation');
const bouton = form.querySelector(".submit-btn");

// Quand on submit
form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    const nom = form.elements.nom.value.trim();
    const service = form.elements.service.value;

    bouton.textContent = "Envoi en cours...";
    bouton.disabled = true;

    // On créer un laps de temps pour simuler l'envoie d'un formulaire à un serveur
    setTimeout(() => {

        message.textContent = `Démonstration uniquement : aucune demande de ${service} n'a été envoyée.`;
        message.classList.add("success");
        message.setAttribute("role", "status");
        form.style.display = "none";
    }, 2000);

});

const boutonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (boutonMenu) {
    boutonMenu.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("active");
        boutonMenu.setAttribute("aria-expanded", String(isOpen));
        boutonMenu.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });
}