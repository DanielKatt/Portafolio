const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

hamburguer.addEventListener('click', () =>{
    menu.classList.toggle("spread")
})

console.log(menu)