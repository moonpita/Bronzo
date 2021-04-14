document.querySelector('.burger-menu__button').addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('burger-menu--active');
    if (this.classList.contains('is-active')){
        this.classList.remove('is-active');
        document.querySelector('.burger-menu__nav').classList.remove('nav-active');
        document.querySelector('.burger-menu__overlay').classList.remove('overlay-active')
        document.body.classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.burger-menu__nav').classList.add('nav-active');
    }

})