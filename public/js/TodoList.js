'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');
let output = document.querySelector('.output');
let storage = [];
button__create.addEventListener('click', ()=>{
    //Создание
    let value__input = input__Create__Task.value;
    addTask(value__input);
    showTaskOne();
});
function renderTask(texts){
    let labelTask = document.createElement('div');
    labelTask.classList.add('label__task');
    labelTask.classList.add('create__task');
    output.append(labelTask);
    let text = document.createElement('div')
    text.classList.add('text');
    text.textContent = texts;
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
    if(storage != null){
        let button__delete = document.querySelectorAll('.delete'); // Выберите все кнопки удаления
        button__delete.forEach((button)=>{ // Для каждого элемента кнопки удаления
            button.addEventListener('click', (e)=>{ // Добавьте обработчик событий
                let x = e.target.closest('.label__task'); // Выберите ближайший родительский элемент с классом 'label__task'
                let text1 = x.querySelector('.text');
                let value = text1.textContent;
                // console.log(value); // Выведите этот элемент в консоль
            });
        });
    }
}
function showTask(){
    fetch("/showTask").then(
        response=>{
            return response.json();
        }
    ).then(
        data=>{
            for (const iterator of data) {
                storage.push({id:iterator['id'], taskText:iterator['taskText']});
            }
            for (const iterator of storage) {
                for (const iteratorKey in iterator) {
                    if(typeof iterator[iteratorKey] == 'string'){
                        renderTask(iterator[iteratorKey]);
                    }
                }
                // console.log(storage)
            }
        }
    );
}
function showTaskOne(){
    fetch("/showTask").then(
        response=>{
            return response.json();
        }
    ).then(
        data=>{
            for (const iterator of data) {
                storage.push(iterator['taskText']);
            }
            renderTask(storage[storage.length-1]);
        }
    );
}
function addTask(text){
    fetch(`/addTask/${text}`);
}
function deleteTask(id, text){
    fetch(`/deleteTask/${id}/${text}`);
}
showTask();
