document.addEventListener("DOMContentLoaded", function() {
    console.log("Reserve Script loaded");

    const reservePage = document.getElementById("reservePage");
    const showForm = document.getElementById("showForm");
    const closeForm = document.getElementById("close");

    closeForm.addEventListener("click", function() {
        reserveForm.style.display="none";
        reserveForm.style.zIndex = 0;
        reserveForm.style.opacity = 0;
        reservePage.style.opacity = 1;
    });

    showForm.addEventListener("click", function() {
        reserveForm.style.display="flex";
        reserveForm.style.zIndex = 2;
        reserveForm.style.opacity = 1;
        reservePage.style.opacity = 0.3;
    });

});
