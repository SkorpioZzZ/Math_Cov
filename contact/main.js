const form = document.querySelector('#devis-form');
const message = document.querySelector('#confirmation');
const bouton = document.querySelector("button");

// Quand on submit
form.addEventListener('submit', function (event) {
    // On empeche le rechargement de la page
    event.preventDefault();

    // On récupére les valeur de l'input name et de select service
    const nom = document.querySelector('input[name="nom"]').value;
    const service = document.querySelector('select[name="service"]').value;
    
    // Cette condition permet de vérifier qu'une prestations à bien était selectionné
    if(service === "") {
        console.log("Veuillez choisir une prestation");
        
        return;
    }

    // On transforme le texte du bouton en "Envoi en cours..."
    bouton.textContent = "Envoi en cours...";

    // On désactive le bouton
    bouton.disabled = true;

    // On créer un laps de temps pour simuler l'envoie d'un formulaire à un serveur
    setTimeout(() => {

        // On affiche un message personnalisé aprés le laps de temps
        message.textContent = `Merci ${nom}, votre demande de ${service} à bien été reçue !`;

        // On ajoute la class "success"
        message.classList.add("success");

        // On masque le formulaire
        form.style.display = "none";
    
    // On exprime le temps en ms au lieu de seconde
    }, 2000);
    
});

const boutonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (boutonMenu) {
    boutonMenu.addEventListener("click", () => {

        menu.classList.toggle("active");
    
    });
}