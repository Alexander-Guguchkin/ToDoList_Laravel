'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');
let button__edits = document.querySelector('.edits');
let button__delete = document.querySelector('.delete');
let storage = [];

function addArray(text){
    storage.push(text);
}
function createTask(){
    let output = document.querySelector('.output');
    output.innerHTML += `<div class="label__task create__task">
    <div class="text">Задача номер 1</div>
    <input type="checkbox" class="checkbox-round">
    <button class="options">
        <img src="{{asset('image/selections.png')}}">
    </button>
</div>
<div class="wraper__context__menu wraper__context__menu_none">
    <div class="context_menu">
        <button class="edits">Редактровать</button>
        <button class="delete">Удалить</button>
    </div>
</div>`;

}
button__create.addEventListener('click', ()=>{
    let value__input = input__Create__Task.value;
    addArray(value__input);
    createTask();
});
button__edits.addEventListener('click', ()=>{

});
button__delete.addEventListener('click', ()=>{

});
