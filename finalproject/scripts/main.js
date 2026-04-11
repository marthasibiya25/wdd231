
// ===============================
// 1. GAME DATA (15+ ITEMS REQUIRED)
// ===============================
const games = [
    { id: 1, name: "Elden Ring", genre: "RPG", rating: 10, platform: "PC/PS5" },
    { id: 2, name: "Minecraft", genre: "Sandbox", rating: 10, platform: "All" },
    { id: 3, name: "Cyberpunk 2077", genre: "RPG", rating: 8, platform: "PC/PS5" },
    { id: 4, name: "The Witcher 3", genre: "RPG", rating: 10, platform: "PC/PS4" },
    { id: 5, name: "Fortnite", genre: "Battle Royale", rating: 7, platform: "All" },
    { id: 6, name: "GTA V", genre: "Action", rating: 10, platform: "All" },
    { id: 7, name: "Red Dead Redemption 2", genre: "Action", rating: 10, platform: "PS4/PC" },
    { id: 8, name: "Valorant", genre: "Shooter", rating: 8, platform: "PC" },
    { id: 9, name: "Apex Legends", genre: "Shooter", rating: 8, platform: "All" },
    { id: 10, name: "Hollow Knight", genre: "Indie", rating: 9, platform: "All" },
    { id: 11, name: "God of War", genre: "Action", rating: 10, platform: "PS5" },
    { id: 12, name: "FIFA 24", genre: "Sports", rating: 7, platform: "All" },
    { id: 13, name: "Call of Duty", genre: "Shooter", rating: 8, platform: "All" },
    { id: 14, name: "Stardew Valley", genre: "Simulation", rating: 9, platform: "All" },
    { id: 15, name: "Overwatch 2", genre: "Shooter", rating: 7, platform: "All" }
];

// ===============================
// 2. DOM ELEMENTS
// ===============================
const featuredContainer = document.getElementById("featured");
const gamesContainer = document.getElementById("games-container");

// ===============================
// 3. INIT PAGE LOAD
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    if (featuredContainer) {
        renderFeatured();
    }

    if (gamesContainer) {
        renderGames(games);
    }

    setupHamburgerMenu();
});

// ===============================
// 4. RENDER ALL GAMES
// ===============================
function renderGames(list) {
    gamesContainer.innerHTML = "";

    list.forEach(game => {
        const card = createGameCard(game);
        gamesContainer.appendChild(card);
    });
}

// ===============================
// 5. FEATURED (FILTER + MAP REQUIRED)
// ===============================
function renderFeatured() {
    const featured = games
        .filter(game => game.rating >= 9)
        .map(game => game);

    featuredContainer.innerHTML = "";

    featured.forEach(game => {
        const card = createGameCard(game);
        featuredContainer.appendChild(card);
    });
}

// ===============================
// 6. CREATE CARD (TEMPLATE LITERALS)
// ===============================
function createGameCard(game) {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
    <h3>${game.name}</h3>
    <p><strong>Genre:</strong> ${game.genre}</p>
    <p><strong>Rating:</strong> ${game.rating}/10</p>
    <p><strong>Platform:</strong> ${game.platform}</p>
    <button onclick="openModal(${game.id})">View Details</button>
  `;

    return div;
}

// ===============================
// 7. MODAL SYSTEM (REQUIRED)
// ===============================
function openModal(id) {
    const game = games.find(g => g.id === id);

    let modal = document.getElementById("modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "modal";
        modal.classList.add("modal");
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
    <div class="modal-content">
      <h2>${game.name}</h2>
      <p>Genre: ${game.genre}</p>
      <p>Rating: ${game.rating}</p>
      <p>Platform: ${game.platform}</p>
      <button onclick="closeModal()">Close</button>
    </div>
  `;

    modal.style.display = "block";
}

// CLOSE MODAL
function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
}

// ===============================
// 8. LOCAL STORAGE (REQUIRED)
// ===============================
function saveFavorite(gameName) {
    localStorage.setItem("favoriteGame", gameName);
}

// Example usage:
saveFavorite("Minecraft");

// ===============================
// 9. HAMBURGER MENU (REQUIRED)
// ===============================
function setupHamburgerMenu() {
    const nav = document.querySelector("nav");

    const button = document.createElement("button");
    button.innerHTML = "☰";
    button.classList.add("hamburger");

    document.querySelector("header").prepend(button);

    button.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// ===============================
// 10. ASYNC DATA (FOR VIDEO REQUIREMENT)
// ===============================
async function loadJSONData() {
    try {
        const response = await fetch("data/games.json");
        const data = await response.json();
        console.log("Async JSON loaded:", data);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

loadJSONData();