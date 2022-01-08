const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNawItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')
    handleNavItemsAnimation()
}

allNawItems.forEach(item => {
	item.addEventListener('click', () => {
		nav.classList.remove('nav--active')
	})
})

const handleNavItemsAnimation = ()=>{
    let delayTime = 0
    allNawItems.forEach(item=>{
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay=`.${delayTime}s`
        //in css atribut animation-delay = 1s
        delayTime++
    })
}

navBtn.addEventListener('click', handleNav)
