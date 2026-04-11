import games from "../data/games.json" assert { type: "json" };

const container = document.querySelector("#games-container");

function displayGames(list) {
    container.innerHTML = "";

    list.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${game.name}</h3>
            <p>🎮 ${game.genre}</p>
            <p>⭐ Rating: ${game.rating}</p>
            <p>🕹️ ${game.platform}</p>
            <button onclick="saveFavorite('${game.name}')">❤ Favorite</button>
        `;

        container.appendChild(card);
    });
}

displayGames(games);

/* LOCAL STORAGE */
window.saveFavorite = function (name) {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    favs.push(name);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert(name + " added to favorites!");
};