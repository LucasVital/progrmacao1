const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', () => {
    
    const menu = document.getElementById('nav');

    menu.classList.toggle('active');

});