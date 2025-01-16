const leftToggle = document.getElementById('left-toggle');

leftToggle.addEventListener('click', function () {
    const leftMenu = document.getElementById('left-menu');
    leftMenu.classList.toggle('collapsed');

})


function applyScale() {
    const width = window.innerWidth;

    console.log(width)

    const mainContainer = document.querySelector('.main-container');
    const mainContent = document.querySelector('.main-content');
    const leftMenu = document.querySelector('.left-menu');
    const rightPanel = document.querySelector('.right-panel');
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('footer');

    mainContainer.style.transformOrigin = 'top left';
    mainContent.style.transformOrigin = 'top left';
    leftMenu.style.transformOrigin = 'top left';
    rightPanel.style.transformOrigin = 'top left';
    navbar.style.transformOrigin = 'top left';
    footer.style.transformOrigin = 'top left';

    if (width >= 992 && width <= 1600) {
        mainContainer.style.transform = 'scale(0.9)';
        mainContent.style.transform = 'scale(0.9)';
        leftMenu.style.transform = 'scale(0.9)';
        rightPanel.style.transform = 'scale(0.9)';
        navbar.style.transform = 'scale(0.9)';
        footer.style.transform = 'scale(0.9)';
    } else if(width >= 700 && width <= 767){
        mainContainer.style.transform = 'scale(0.8)';
        mainContent.style.transform = 'scale(0.8)';
        leftMenu.style.transform = 'scale(0.8)';
        rightPanel.style.transform = 'scale(0.8)';
        navbar.style.transform = 'scale(0.8)';
        footer.style.transform = 'scale(0.8)';

    }else if(width >= 600 && width <= 700){
        mainContainer.style.transform = 'scale(0.75)';
        mainContent.style.transform = 'scale(0.75)';
        leftMenu.style.transform = 'scale(0.75)';
        rightPanel.style.transform = 'scale(0.75)';
        navbar.style.transform = 'scale(0.75)';
        footer.style.transform = 'scale(0.75)';

    }else if(width < 600){
        mainContainer.style.transform = 'scale(0.5)';
        mainContent.style.transform = 'scale(0.5)';
        leftMenu.style.transform = 'scale(0.5)';
        rightPanel.style.transform = 'scale(0.5)';
        navbar.style.transform = 'scale(0.5)';
        footer.style.transform = 'scale(0.5)';
    }else{
        mainContainer.style.transform = 'scale(1)';
        mainContent.style.transform = 'scale(1)';
        leftMenu.style.transform = 'scale(1)';
        rightPanel.style.transform = 'scale(1)';
        navbar.style.transform = 'scale(1)';
        footer.style.transform = 'scale(1)';
    }
}

window.addEventListener('resize', applyScale);

applyScale();
