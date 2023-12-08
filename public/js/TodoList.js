'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');
let button__edits = document.querySelector('.edits');
let button__delete = document.querySelector('.delete');
let storage = [];

function addArray(text){
    storage.push(text);
}

button__create.addEventListener('click', ()=>{
    let value__input = input__Create__Task.value;
    addArray(value__input);
    let output = document.querySelector('.output');

});
// button__edits.addEventListener('click', ()=>{
//
// });
// button__delete.addEventListener('click', ()=>{
//
// });
