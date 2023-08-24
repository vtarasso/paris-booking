const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav')
const close = document.querySelector('.header__nav-close')
const menuElements = document.querySelectorAll('.header__link')

for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].addEventListener('click', function(e){
        e.preventDefault()
        let href = this.getAttribute('href')

        let currentSection = document.getElementById(href)

        let offset = currentSection.offsetTop

        menu.classList.remove('header__nav-open')

        window.scrollTo(document.body, offset, 0);
    })
}

burger.addEventListener('click', function(e){
    e.preventDefault()
    menu.classList.add('header__nav-open')
})

close.addEventListener('click', function(e){
    e.preventDefault()
    menu.classList.remove('header__nav-open')
})