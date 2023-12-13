'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');

let button__delete = document.querySelector('.delete');
let storage = [];

button__create.addEventListener('click', ()=>{
    let value__input = input__Create__Task.value;
    storage.push(value__input);
    let output = document.querySelector('.output');
    output.innerHTML += "             <div class=\"label__task create__task\">\n" +
        "                <div class=\"text\">`${{value__input}}`</div>\n" +
        "                <input type=\"checkbox\" class=\"checkbox-round\">\n" +
        "                <div class=\"buttons\">\n" +
        "                    <div class=\"edits\">\n" +
        "                        <i class=\"ri-edit-line\"></i>\n" +
        "                    </div>\n" +
        "                    <button class=\"delete\">\n" +
        "                        <i class=\"ri-delete-bin-2-line\"></i>\n" +
        "                    </button>\n" +
        "                </div>\n" +
        "            </div>";
    let text = document.querySelector('.text');
    //
    // text.textContent = value__input;


});



// button__delete.addEventListener('click', ()=>{
//
// });
