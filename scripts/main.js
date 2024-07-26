document.addEventListener("DOMContentLoaded", function() {
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
});