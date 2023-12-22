'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');
let output = document.querySelector('.output');
let storage = [];
button__create.addEventListener('click', ()=>{
    let addstorage = [];
    //Создание
    let value__input = input__Create__Task.value;
    addstorage.push(value__input);
    renderTask(addstorage);
    //Удаление
    let labelTask = document.querySelector('.label__task');
    let text = document.querySelector('.text');
    let textValue = text.textContent;
    let dataDelete = [];
    labelTask.querySelector('.delete').addEventListener('click', ()=>{
        dataDelete.push(textValue);
        output.removeChild(labelTask);
    });


});

function renderTask(array){
    let labelTask = document.createElement('div');
    labelTask.classList.add('label__task');
    labelTask.classList.add('create__task');
    output.append(labelTask);
    let text = document.createElement('div')
    text.classList.add('text');
    text.textContent = array[array.length-1];
    let checkboxRound = document.createElement('input');
    checkboxRound.type = 'checkbox';
    checkboxRound.classList.add('checkbox-round');
    checkboxRound.id = 'myCheckbox';
    checkboxRound.name = 'myCheckbox';
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
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
}

function fetchTask(){
    fetch("/");
}
