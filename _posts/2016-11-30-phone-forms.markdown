---
layout: post
title:  "The BEST number inputs"
date:   2016-11-30 14:35 +0300
categories: webcamp
tags: frontend_starter
related_courses: frontend_starter frontend_basic
---

# Лучшие формы для ввода номера (если Вы ненавидите своих клиентов)

На сегодняшний день самый лучший способ спугнуть клиента - сделать свой веб-ресурс неудобным в использовании.

Сегодня мы рассмотрим подборку форм для введения телефонного номера на сайте. 
По мнению автора это подборка **самых неудобных форм**, взятых из интернетов :)

Код для реализации приведён не будет.

### <span class="icon-homecode" id="one" data-magellan-target="one"> Собери свой номер из выпадающего списка

Не завидую тому, кто вручную набирал все эти элементы `<select>` !

![Phone input form with selection](/img/forms/01.jpg)


### <span class="icon-homecode" id="two" data-magellan-target="two"> Собери свой номер из чекбоксов

Чекбоксы можно было сделать и поменьше. И главное: ни в коем случае не связывать чекбокс с элементом `<label>` !

![Phone input form with checkboxes](/img/forms/02.jpg)


### <span class="icon-homecode" id="three" data-magellan-target="three"> Перетяни ползунок

![Phone input form with input range](/img/forms/03.jpg)
 
Можете потренироваться выбрать свой номер на примере:
 
<input id="range" type="range" min="0" max="999999999999" step="1" value="0" style="width:50%" onfocus="range()"/>
<span> + <b id="result">000000000000</b></span>

<script type="text/javascript">
    function range(){
        var el = document.getElementById('range');
        var res = document.getElementById('result');
        el.addEventListener('change', function(){
            res.innerHTML = el.value;
        });        
    } 
</script>

### <span class="icon-homecode" id="four" data-magellan-target="four"> И снова чекбоксы

Ну этот пример хотя бы выглядит дружелюбно:

![Phone input form with input checkboxes](/img/forms/04.gif)


### <span class="icon-homecode" id="five" data-magellan-target="five"> Для любителей кликать

Просто нужно успеть поймать нужную цифру. У вас есть 6 попыток отточить мастерство быстрого клика.

![Phone input form with input click 1](/img/forms/05.gif)


### <span class="icon-homecode" id="six" data-magellan-target="six"> Для любителей много кликать

Просто нажать на кнопку небходимое число миллионов раз.

![Phone input form with input click 2](/img/forms/06.gif)


### <span class="icon-homecode" id="seven" data-magellan-target="seven"> Для любителей кликать "как в Диабло II"

![Phone input form with input click 3](/img/forms/07.gif)

### <span class="icon-homecode" id="eight" data-magellan-target="eight"> Игра Больше-Меньше

По мотивам игры "Угадай число", которую мы иногда реализуем на курсе [JavaScript](https://www.webcamp.com.ua/courses/js_basic)

![Phone input form with input click 3](/img/forms/08.gif)

### <span class="icon-homecode" id="nine" data-magellan-target="nine"> ПИ$#%!@й номеронабиратель

Заодно проверите свои знания числа Пи

![Phone input form with input pi](/img/forms/09.gif)

### <span class="icon-homecode" id="ten" data-magellan-target="ten"> Святой Рэндом на страже порядка

![Phone input form with input pi](/img/forms/10.gif)

Или так - всё зависит от фантазии дизайнера

![Phone input form with input pi](/img/forms/11.gif)

### <span class="icon-homecode" id="eleven" data-magellan-target="eleven"> Классика

Для олдфагов или просто ценителей старины. Такой даже самому реализовать приятно.

![Phone input form with input pi](/img/forms/12.gif)


На этом подборка отличных решений дл явзаимодействия с пользователем закончена.

Как сделать удобный интерфейс мы рассказываем на таких курсах:

- [Курс для новичков](https://www.webcamp.com.ua/courses/frontend_starter)
- [Курс для желающих осознать глубины вёрстки](https://www.webcamp.com.ua/courses/frontend_basic)
- [Быстрокурс по Bootstrap](https://www.webcamp.com.ua/courses/boostrap)