const url = "data/members.json";

async function getSpotlights() {
    const response = await fetch(url);
    const data = await response.json();

    const members = data.members.filter(
        m => m.membership === "Gold" || m.membership === "Silver"
    );

    const shuffled = members.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const container = document.getElementById("spotlight-members");

    selected.forEach(member => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit</a>
            <p>${member.membership}</p>
        `;

        container.appendChild(div);
    });
}

getSpotlights();