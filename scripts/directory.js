const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
  <img src="images/${member.image}" alt="${member.name}">
  <h3>${member.name}</h3>
  <p>${member.address}</p>
  <p>${member.phone}</p>
  <a href="${member.website}" target="_blank">Visit Website</a>
  `;

        container.appendChild(card);

    });

}

getMembers();

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;