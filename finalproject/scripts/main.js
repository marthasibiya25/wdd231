// GAME DATA
const games = [
    {
        name: "Elden Ring",
        genre: "RPG",
        rating: 10
    },
    {
        name: "Cyberpunk 2077",
        genre: "Action RPG",
        rating: 8
    },
    {
        name: "Minecraft",
        genre: "Sandbox",
        rating: 10
    },
    {
        name: "The Witcher 3",
        genre: "RPG",
        rating: 10
    },
    {
        name: "Fortnite",
        genre: "Battle Royale",
        rating: 7
    }
];

// RUN ONLY WHEN PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {

    const featuredContainer = document.getElementById("featured");
    const gamesContainer = document.getElementById("games-container");

    if (featuredContainer) {
        loadFeaturedGames(featuredContainer);
    }

    if (gamesContainer) {
        loadAllGames(gamesContainer);
    }

});

// FEATURED GAMES (first 3)
function loadFeaturedGames(container) {
    const featured = games.slice(0, 3);

    featured.forEach(game => {
        const card = createCard(game);
        container.appendChild(card);
    });
}

// ALL GAMES
function loadAllGames(container) {
    games.forEach(game => {
        const card = createCard(game);
        container.appendChild(card);
    });
}

// CREATE GAME CARD
function createCard(game) {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <h3>${game.name}</h3>
        <p>Genre: ${game.genre}</p>
        <p>Rating: ${game.rating}/10</p>
    `;

    return div;
}