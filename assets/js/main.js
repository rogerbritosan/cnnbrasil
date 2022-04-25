window.onload = () => {
    const header = document.querySelector('header');
    const menuMobile = document.querySelector('.header__nav__mobile');

    menuMobile.addEventListener('click',()=>{
        if(header.classList.contains('header--active')) {
            header.classList.remove('header--active');
        } else {
            header.classList.add('header--active');
        }
    });
}