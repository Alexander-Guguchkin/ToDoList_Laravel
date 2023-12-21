<x-layout>
    <x-slot:title>Выполненные</x-slot:title>
    <div class="wraper__succes">
        <div class="label__task create__task">
            <div class="text">Задача номер 1</div>
            <input type="checkbox" class="checkbox-round__accept ">
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
</x-layout>
