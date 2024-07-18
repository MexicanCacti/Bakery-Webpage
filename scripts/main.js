document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header-container', '../partials/header.html', function() {
        console.log('header loaded')
    });
    loadHTML('footer-container', '../partials/footer.html', function() {
        // Link social media buttons to URLs
        const urls = [
            'https://www.instagram.com',
            'https://www.facebook.com'
        ];
        const socials = document.querySelectorAll('.socials');
        for(let i = 0; i < socials.length; i++){
            socials[i].onclick = function(){
                window.open(urls[i], '_blank');
            };
        }
        console.log('footer loaded')
    });

});

function loadHTML(containerId, url, callback) {
    const container = document.getElementById(containerId);
    fetch(url)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error('Error loading HTML:', error));
}