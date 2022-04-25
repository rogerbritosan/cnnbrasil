window.onload = () => {
    const mobileMenu = document.querySelector('.header__nav__mobile_button');
    const menuBox = document.querySelector('.header__nav__menu');
    const menuSearch = document.querySelector('.header__nav__search');
    const menuBoxWrap = document.querySelector('.header__nav__menu--wrap');
    const navMobile = document.querySelector('.header__nav__mobile');

    mobileMenu.addEventListener('click',()=>{
        if(mobileMenu.classList.contains('header__nav__mobile_button--active')) {
            mobileMenu.classList.remove('header__nav__mobile_button--active');
            menuBox.classList.remove('header__nav__menu--active');
            menuSearch.classList.remove('header__nav__search--active');
            menuBoxWrap.classList.remove('header__nav__menu--wrap--active');
            navMobile.classList.remove('header__nav__mobile--active');
        } else {
            mobileMenu.classList.add('header__nav__mobile_button--active');
            menuBox.classList.add('header__nav__menu--active');
            menuSearch.classList.add('header__nav__search--active');
            menuBoxWrap.classList.add('header__nav__menu--wrap--active')
            navMobile.classList.add('header__nav__mobile--active');
        }
    });
}