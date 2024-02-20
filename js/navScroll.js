document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector('.page-nav');
    var logo = document.querySelector('.logo-img');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
