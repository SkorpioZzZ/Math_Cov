// On sélectionne tous les éléments qui possèdent la classe "reveal".
const elements = document.querySelectorAll(".reveal");

// On ajoute un écouteur d'événement avec "addEventListener" sur la fenetre lorsque l'événement "scroll" est déclanché.
window.addEventListener("scroll", () => {

    // On parcourt chaque élément trouvé précédemment
    elements.forEach(element => {
        
        // Donne la position par rapport à la fenétres visible du navigateur les éléments séléctionnés plus haut dans le code
        const position = element.getBoundingClientRect();

        // On vérifie si l'élément est visible dans l'écran
        if(position.top < window.innerHeight) {
            
            // On vérifie si l'élément ne posséde pas déja la class active
            if(!element.classList.contains("active")){

                // Ajoute la classe "active"
                element.classList.add("active");
            }
        }
    })
})

const boutonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (boutonMenu) {
    boutonMenu.addEventListener("click", () => {

        menu.classList.toggle("active");
    
    });
}