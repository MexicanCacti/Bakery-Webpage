document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded");

    const testForm = document.getElementById("reservation");

    testForm.addEventListener('submit', function(event) {
        console.log('Submit event triggered');
        event.preventDefault(); // Prevent form submission
        alert('Form submitted');
    });
});
