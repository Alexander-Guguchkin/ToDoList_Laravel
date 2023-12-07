'use strict'
let sidebar = document.querySelector('.sidebar');
let burger__menu = document.querySelector('.burger__menu');
let burger__menu__close = document.querySelector('.burger-menu__close');
burger__menu.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar_none');
    console.log(12);
});
burger__menu__close.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar_none')
});
