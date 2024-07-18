document.addEventListener("DOMContentLoaded", function() {
    const reservePage = document.getElementById("reservePage");
    const reserveForm = document.getElementById("reserveForm");
    const showForm = document.getElementById("showForm");
    const closeForm = document.getElementById("close");
    closeForm.addEventListener("click", function() {
        reserveForm.style.zIndex = 0;
        reserveForm.style.opacity = 0;
        reservePage.style.opacity = 1;
    });

    showForm.addEventListener("click", function() {
        reserveForm.style.zIndex = 2;
        reserveForm.style.opacity = 1;
        reservePage.style.opacity = 0.3;
    });
});