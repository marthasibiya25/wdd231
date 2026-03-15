const button = document.querySelector("#menuButton");
const nav = document.querySelector("#navMenu");

button.addEventListener("click", () => {
    nav.classList.toggle("open");
});