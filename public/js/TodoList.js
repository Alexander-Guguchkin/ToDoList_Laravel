'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');
let output = document.querySelector('.output');
button__create.addEventListener('click', () => {
    let value__input = input__Create__Task.value;
    addTask(value__input);
    autoFetch();
});
function renderTask(id, texts) {
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
    checkboxRound.id = id;
    checkboxRound.name = 'TaskCheckbox';
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    labelTask.append(text, checkboxRound, buttons);
    let edits = document.createElement('div');
    edits.classList.add('edits');
    edits.id = id;
    let editline = document.createElement('i');
    editline.classList.add('ri-edit-line');
    edits.append(editline);
    let deletes = document.createElement('div');
    deletes.classList.add('delete');
    deletes.id = id;
    let deleteline = document.createElement('i');
    deleteline.classList.add('ri-delete-bin-2-line');
    deletes.append(deleteline);
    buttons.append(edits, deletes);
}

function showTask() {
    fetch("/showTask").then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            for (const datum of data) {
                renderTask(datum.id, datum.taskText);
            }
            if (data !== null) {
                let button__delete = document.querySelectorAll('.delete');
                button__delete.forEach(button => {
                    button.addEventListener('click', () => {
                        for (const datum of data) {
                            if (button.id == datum.id) {
                                deleteTask(button.id, datum.taskText);
                                autoFetch();
                            }
                        }
                    });
                });
                let button__edits = document.querySelectorAll('.edits');
                button__edits.forEach(button => {
                    button.addEventListener('click', () => {
                        let label__task = button.closest('.label__task');
                        let text = label__task.querySelector('.text');
                        input__Create__Task.value = text.textContent;
                        for (const datum of data) {
                            if (button.id == datum.id) {
                                input__Create__Task.addEventListener('keyup', (e) => {
                                    if (e.key == 'Enter') {
                                        editTask(button.id, input__Create__Task.value);
                                        autoFetch();
                                    }
                                });
                            }
                        }
                    });
                });
                let acceptButton = document.querySelectorAll('.checkbox-round');
                acceptButton.forEach(button => {
                    button.addEventListener('click', ()=>{
                        let label__task = button.closest('.label__task');
                        let text = label__task.querySelector('.text');
                        for (const datum of data) {
                            if (button.id == datum.id) {
                                successTask(button.id,text.textContent);
                                autoFetch();
                            }
                        }
                    })
                });
            }
        }
    );
}
function addTask(text) {
    fetch(`/addTask/${text}`);
}
function deleteTask(id, text) {
    fetch(`/deleteTask/${id}/${text}`);
}
function editTask(id, text) {
    fetch(`/editTask/${id}/${text}`);
}
function successTask(id, text){
    fetch(`/successTask/${id}/${text}`);
}
function autoFetch() {
    let tasks = document.querySelectorAll(".label__task");
    for (const iterator of tasks) {
        output.removeChild(iterator);
    }
    showTask()
}
showTask();
