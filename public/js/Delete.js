function showTaskDelete(){
    fetch('/showTaskDelete').then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            for (const datum of data) {
                renderTask(datum.id, datum.deleteTask);
            }
        });
}
function renderTask(id, texts) {
    let output = document.querySelector('.output');
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
    checkboxRound.style.background = 'red';
    checkboxRound.id = id;
    checkboxRound.name = 'TaskCheckbox';
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    labelTask.append(text, checkboxRound, buttons);
}
showTaskDelete();