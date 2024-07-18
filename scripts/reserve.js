document.addEventListener("DOMContentLoaded", function() {
    const showFormBtn = document.getElementById("showFormBtn");
    const popupForm = document.getElementById("popupForm");
    const closeBtn = document.querySelector(".close-btn");

    showFormBtn.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popupForm) {
            popupForm.style.display = "none";
        }
    });
});