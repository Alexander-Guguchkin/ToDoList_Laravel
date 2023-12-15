'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');

let button__delete = document.querySelector('.delete');
let storage = [];

button__create.addEventListener('click', ()=>{
    let value__input = input__Create__Task.value;
    storage.push(value__input);
    let output = document.querySelector('.output');
    let labelTask = dociment.createElement('div');
    labelTask.classList.add('create__task');
    output.append(labelTask);
    let text = document.createElement('div')
    text.textContent = value__input;
    let checkboxRound = document.createElement('div');
    checkboxRound.type = 'checkbox';
    checkboxRound.classList.add('checkbox-round');
    checkboxRound.id = 'myCheckbox'; // Устанавливаем уникальный идентификатор
    checkboxRound.name = 'myCheckbox'; // Устанавливаем имя для отправки формы
    let buttons = document.createElement('div');
    buttons.classList.add('edits');
    labelTask.append(text, checkboxRound, buttons);
    let edits = document.createElement('div');
    edits.classList.add('edits');
    let editline = document.createElement('i');
    editline.classList.add('ri-edit-line');
    edits.append(editline);
    let deletes = document.createElement('div');
    deletes.classList.add('delete');
    let deleteline = document.createElement('i');
    deleteline.classList.add('ri-delete-bin-2-line');
    deletes.append(deleteline);
    buttons.append(edits, deletes);
});



// button__delete.addEventListener('click', ()=>{
//
// });
