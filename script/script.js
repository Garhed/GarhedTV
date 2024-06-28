document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produit ajouté au panier !');
        });
    });
});

// Fonction pour afficher l'URL dans la div avec l'id "urlDisplay"
function afficherURL() {
    // Obtenir l'URL actuelle
    var urlSpecifique = 'https://www.tiktok.com/@garhed';

    // Trouver la div avec l'id "urlDisplay"
    var divAffichage = document.getElementById('urlDisplay');

    // Afficher l'URL dans la div
    divAffichage.textContent = urlSpecififique;
}

// Appeler la fonction lorsque la page est chargée
window.onload = afficherURL;