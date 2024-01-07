'use strict'

let inputCreateTask = document.querySelector('.input__create__task');
let buttonCreate = document.querySelector('.button__create');
let output = document.querySelector('.output');

// Отправка задачи на сервер
function addTask(text) {
    fetch(`/addTask/${text}`);
}

// Отправка задачи на удаление 
function deleteTask(id, text) {
    fetch(`/deleteTask/${id}/${text}`);
}

// Отправка задачи на сервер 
function editTask(id, text) {
    fetch(`/editTask/${id}/${text}`);
}

// Отправка задачи на выполнение  
function successTask(id, text){
    fetch(`/successTask/${id}/${text}`);
}

// Сортировка и поиск эллемента  
function searchElement (objData, callback, id){
    for (const datum of objData) {
        if (id == datum.id) {
            callback(id, datum.taskText);
            autoFetch();
        }
    }
} 

// Обновление страницы
function autoFetch() {
    let labelTask = document.querySelectorAll(".label__task");
    for (const iterator of labelTask) {
        output.removeChild(iterator);
    }
    showTask();
}

// Создание задачи
buttonCreate.addEventListener('click', () => {
    let valueInput = inputCreateTask.value;
    addTask(valueInput); 
    autoFetch(); 
});

//Получение и обработка задач с сервера
function showTask() {
    fetch("/showTask").then(
        response => {
            return response.json();
        }
    ).then(
        data => {

            // Обработка и рендеринг этой задачи
            for (const datum of data) {
                renderTask(datum.id, datum.taskText);
            }

            if (data !== null) {
                // Удаление задачи
                let buttonDelete = document.querySelectorAll('.delete');
                buttonDelete.forEach(button => {
                    button.addEventListener('click', () => {
                        searchElement(data, deleteTask, button.id);
                    });
                });

                // Редактирование задачи
                // callback функция прописанная
                let buttonEdits = document.querySelectorAll('.edits');
                buttonEdits.forEach(button => {
                    button.addEventListener('click', () => {
                        let labelTask = button.closest('.label__task');
                        let text = labelTask.querySelector('.text');
                        inputCreateTask.value = text.textContent;
                        for (const datum of data) {
                            if (button.id == datum.id) {
                                inputCreateTask.addEventListener('keyup', (e) => {
                                    if (e.key == 'Enter') {
                                        editTask(button.id, inputCreateTask.value, button.id);
                                        autoFetch();
                                    }
                                });
                            }
                        }
                    });
                });

                // Выполенение задачи
                let acceptButton = document.querySelectorAll('.checkbox-round');
                acceptButton.forEach(button => {
                    button.addEventListener('click', ()=>{
                        searchElement(data, successTask, button.id);
                    })
                });
            }
        }
    );
}
//Рендеринг задач
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

showTask();