document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('navigation');

    hamburger.addEventListener('click', function() {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 650) {
            nav.style.display = '';
        }
    });
});
