const container = document.querySelector("#games-container");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

async function loadGames() {
    try {
        const res = await fetch("data/games.json");
        const games = await res.json();

        games.forEach(game => {
            const card = document.createElement("div");
            card.classList.add("game-card");

            card.innerHTML = `
                <h3>${game.name}</h3>
                <p>${game.genre}</p>
                <p>${game.platform}</p>
                <p>⭐ ${game.rating}</p>
                <button>View</button>
            `;

            card.querySelector("button").addEventListener("click", () => {
                modalContent.innerHTML = `
                    <h2>${game.name}</h2>
                    <p>Genre: ${game.genre}</p>
                    <p>Platform: ${game.platform}</p>
                    <p>Rating: ${game.rating}</p>
                `;
                modal.showModal();
            });

            container.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}

loadGames();