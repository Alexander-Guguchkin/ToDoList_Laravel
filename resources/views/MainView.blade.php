<x-layout>
    <x-slot:title>
        TODO LIST
    </x-slot:title>
    <div class="form">
        <div class="input">
            <input type="text" class="create__task input__create__task" name="input_create_task" placeholder="Введите текст...">
            <button class="create__task button__create"><span class="line1"><span class="line2"></span></span></button>
        </div>
        <div class="output">
            <div class="label__task create__task">
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
            </div>
        </div>
    </div>
</x-layout>
