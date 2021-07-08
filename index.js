
const mainMenu = document.querySelector('.main_menu');
document.querySelector('#toogle').addEventListener('click', () => {
    mainMenu.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    mainMenu.style.display = 'none';
});