'use strict'

let options = document.querySelector('.options');
let wraper__context__menu = document.querySelector('.wraper__context__menu');
options.addEventListener('click', ()=>{
    wraper__context__menu.classList.toggle('wraper__context__menu_none');
});
