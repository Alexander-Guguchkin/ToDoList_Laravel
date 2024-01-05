function showTaskAccept(){
    fetch('/showTaskAccept').then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            for (const datum of data) {
                renderTask(datum.id, datum.task);
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
    checkboxRound.id = id;
    checkboxRound.name = 'TaskCheckbox';
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    labelTask.append(text, checkboxRound, buttons);
    let deletes = document.createElement('div');
    deletes.classList.add('delete');
    deletes.id = id;
    let deleteline = document.createElement('i');
    deleteline.classList.add('ri-delete-bin-2-line');
    deletes.append(deleteline);
    buttons.append(deletes);
}
showTaskAccept();