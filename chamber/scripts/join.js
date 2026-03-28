// timestamp
document.getElementById("timestamp").value = new Date();

// modal functions
function openModal(id) {
    document.getElementById(id).showModal();
}

function closeModal(id) {
    document.getElementById(id).close();
}

// footer year
document.getElementById("year").textContent = new Date().getFullYear();