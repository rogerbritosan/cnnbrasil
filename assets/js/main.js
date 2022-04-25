window.onload = () => {
    const header = document.querySelector('header');

    header.addEventListener('click',()=>{
        if(header.classList.contains('header--active')) {
            header.classList.remove('header--active');
        } else {
            header.classList.add('header--active');
        }
    });
}