var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('nav').classList.remove('nav_active');
    } else {
        document.getElementById('nav').classList.add('nav_active');
    }
    prevScrollpos = currentScrollPos;
}