const form = document.querySelector("#favForm");
const output = document.querySelector("#saved");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const game = document.querySelector("#game").value;

    localStorage.setItem("favoriteGame", game);

    output.textContent = `Saved: ${game}`;
});