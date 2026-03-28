// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Open modals
document.querySelectorAll(".open-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.modal).showModal();
    });
});

// Close modals
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("dialog").close();
    });
});