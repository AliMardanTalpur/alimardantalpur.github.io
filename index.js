// script.js

function moveCards(direction) {
    let length = 250;
    var cardsContainer = document.querySelector('.cards');
    var scrollAmount = length; // Adjust this value as needed

    if (direction === 'left') {
        cardsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth' // Smooth scroll
        });
    } else if (direction === 'right') {
        cardsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth' // Smooth scroll
        });
    }
}
