const d = document,
$menu = d.querySelector('.banner__menu'),
$btnMenu = d.querySelector('.banner__btn')
$btnMenu.addEventListener('click', e =>{
        $btnMenu.firstElementChild.classList.toggle('none')
        $btnMenu.lastElementChild.classList.toggle('none')
        $menu.classList.toggle('is-active')
})
d.addEventListener("click", e =>{
    if(e.target.matches('.banner__menu a')){
        $btnMenu.firstElementChild.classList.remove('none')
        $btnMenu.lastElementChild.classList.add('none')
        $menu.classList.remove('is-active')
        console.log("holaaaaaaaa");
    }
})