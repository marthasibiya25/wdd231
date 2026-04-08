import { itemsOfInterest } from '../data/items.mjs';

// Local Storage: Visitor message
const messageEl = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (diffDays < 1) {
        messageEl.textContent = "Back so soon! Awesome!";
    } else {
        messageEl.textContent = `You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
    }
}
localStorage.setItem('lastVisit', now);

// Create cards dynamically
const gridEl = document.getElementById('discover-grid');

itemsOfInterest.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
            <img src="${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
    `;

    gridEl.appendChild(card);
});