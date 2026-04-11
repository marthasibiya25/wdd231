fetch("data/games.json")
    .then(res => res.json())
    .then(data => {
        const featured = data.slice(0, 3);

        document.querySelector("#featured-container").innerHTML =
            featured.map(game => `
            <div class="card">
                <h3>${game.name}</h3>
                <p>${game.genre}</p>
            </div>
        `).join("");
    });