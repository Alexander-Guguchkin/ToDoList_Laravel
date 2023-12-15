'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');
let storage = [];

button__create.addEventListener('click', ()=>{
    let value__input = input__Create__Task.value;
    storage.push(value__input);
    let output = document.querySelector('.output');
    let labelTask = document.createElement('div');
    labelTask.classList.add('label__task')
    labelTask.classList.add('create__task');
    output.append(labelTask);
    let checkboxRound = document.createElement('input');
    // Установка атрибутов для созданного элемента
    checkboxRound.type = 'checkbox'; // Устанавливаем тип чекбокса
    checkboxRound.id = 'myCheckbox'; // Устанавливаем уникальный идентификатор
    checkboxRound.name = 'myCheckbox'; // Устанавливаем имя для отправки формы
    labelTask.append(checkboxRound);
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    labelTask.append(buttons);
    let  edits =document.createElement('div');
    edits.classList.add('edits');
    buttons.append(edits);
    let iedit = document.createElement('i');
    iedit.classList.add('ri-edit-line');
    edits.append(iedit);
    let deletes = document.createElement('div');
    deletes.classList.add('delete');
    buttons.append(deletes);
    let idelete = document.createElement('i');
    idelete.classList.add('ri-delete-bin-2-line');
    deletes.append(idelete);
});



// button__delete.addEventListener('click', ()=>{
//
// });
