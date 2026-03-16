async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Filter gold & silver members
    const featured = members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);

    // Randomly pick 2-3 members
    const randomMembers = featured.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.getElementById('spotlight-container');

    randomMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.companyName} Logo">
            <h3>${member.companyName}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
        `;
        container.appendChild(card);
    });
}

loadSpotlights();