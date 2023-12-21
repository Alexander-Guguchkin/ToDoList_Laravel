<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$title}}</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.6.0/fonts/remixicon.css" rel="stylesheet">
</head>
<body>
<div class="sidebar sidebar_none">
    <div class="wraper__spisok">
        <ul>
            <li><a href="/Main">Главная</a></li>
            <li><a href="/Delete">Удалённые</a></li>
            <li><a href="/Success">Выполненные</a></li>
        </ul>
    </div>
    <div class="wraper__burger-menu__close">
        <button class="burger-menu__close">
            <span class="line3"></span>
            <spam class="line4"></spam>
        </button>
    </div>
</div>
    <div class="wraper__head">
        <div class="wraper__burger__menu">
            <button class="burger__menu">
                <div class="element">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
        <div class="wraper__label">
            <div class="label">
                {{$title}}
            </div>
        </div>
    </div>
    <main>
        {{$slot}}
    </main>
    <script src="{{asset('js/sidebar.js')}}"></script>
    <script src="{{asset('js/TodoList.js')}}"></script>
</body>
</html>
