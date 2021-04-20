const navSlide = function() {
    const menuBar = document.querySelector('.menu-bar');
    const nav = document.querySelector('nav ul');

    menuBar.addEventListener('click', function() {
        nav.classList.toggle('slidemenu');

        menuBar.classList.toggle('line');
    });
}

navSlide();