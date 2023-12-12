var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('nav').classList.add('nav_active');
        document.getElementById('nav').style.top = "0";
    } else {
        document.getElementById('nav').classList.add('nav_active');
        document.getElementById('nav').style.top = "-150px";
    }

    if (currentScrollPos == 0) {
        document.getElementById('nav').classList.remove('nav_active');
    }
    prevScrollpos = currentScrollPos;
}