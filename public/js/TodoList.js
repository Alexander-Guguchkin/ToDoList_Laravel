'use strict'

let input__Create__Task = document.querySelector('.input__create__task');
let button__create = document.querySelector('.button__create');
let output = document.querySelector('.output');
let storage = [];
button__create.addEventListener('click', ()=>{
    //Создание
    let value__input = input__Create__Task.value;
    addTask(value__input);
    showTask();
});
function renderTask(id, texts){
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
    deletes.id = id;
    let deleteline = document.createElement('i');
    deleteline.classList.add('ri-delete-bin-2-line');
    deletes.append(deleteline);
    buttons.append(edits, deletes);
}

function showTask(status){
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
                        if(typeof iterator.taskText == 'string'){
                            renderTask(iterator.id,iterator.taskText);
                        }
                    }

                    // Сделать как отдельной функцией
                    // let var1
                    // for (const storageElement of storage) {
                    //     var1 = storageElement;
                    // }
                    // if(typeof var1.taskText == 'string'){
                    //     console.log(1);
                    //     renderTask(var1.id,var1.taskText);
                    // }

                if(storage !== null){
                    let button__delete = document.querySelectorAll('.delete');
                    button__delete.forEach((button)=>{
                        button.addEventListener('click', ()=>{
                            for (const storageElement of storage) {
                                if (button.id == storageElement.id){
                                    deleteTask(button.id,storageElement.taskText);
                                }
                            }
                        });
                    });
                }

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
