---
layout: post
title:  "Google рекомендует"
date:   2016-09-21 19:00:00 +0300
categories: tutorials
tags: css html
related_courses: frontend_starter frontend_basic
permalink: google-recommends
level: 1
---

# Google рекомендует

#### Как Google рекомендует писать HTML и CSS

Google обновил рекомендации для написания HTML и CSS, давайте посмотрим, что нам предлагает этот гигант мысли.

Это перевод, [оригинал здесь](https://google.github.io/styleguide/htmlcssguide.xml?utm_source=html5weekly&utm_medium=email)

### <span class="icon-homecode" id="general" data-magellan-target="general"></span> Общие правила стиля 

![smart vs ugly css](/img/post-images/css/google_recommends.svg)

##### Протокол

Не нужно указывать протокол ( http:, https:) в URL адресах, указывающих на изображения и другие медиа - файлы, таблицы стилей и скриптов, если соответствующие файлы не доступны по обоим протоколам.

Без указания протокола, URL становится относительным, что предотвращает проблемы со смешанным типом контента контентом и приводит к небольшой экономии размеров файла.

* * *

### <span class="icon-homecode" id="general_format" data-magellan-target="general_format"></span> Общие правила форматирования 

##### Отступы

<div class="row">
<div class="small-6 columns" markdown="1">
Используйте отступы в 2 пробела. НЕ используйте табуляции и не смешивайте табуляции с пробелами.
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>
```html
<ul>
  <li>Fantastic
  <li>Great
</ul>
```
</div>
</div>

* * *

##### Верхний регистр

Весь код должен быть в нижнем регистре: Это относится и к названиям элементов HTML, атрибутам, значениям атрибутов (если текст / CDATA), CSS селекторам, свойствам и значениям свойств (за исключением строк).

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо 

```html
<!-- Not recommended -->
<A HREF="/">Home</A>

/* Not recommended */
color: #E5E5E5;
```

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```html
<!-- Recommended -->
<img src="google.png" alt="Google">

/* Recommended */
color: #e5e5e5;
```

</div>
</div>

* * *

### <span class="icon-homecode" id="general_meta" data-magellan-target="general_meta"></span> Общие правила метаданных

Google рекомендует:

- Использовать UTF-8 (не BOM). `<meta charset="utf-8">`;
- Использовать комментарии. Объяснять код по мере необходимости, когда это возможно;
- Отмечать запланированные задачи так: ``TODO: action item.``, но не ``@@``;

* * *

### <span class="icon-homecode" id="html_style" data-magellan-target="html_style"></span> Правильный HTML

По поводу HTML, Google намекает, что хороший программист:

- Указывает тип документа `<!DOCTYPE html>` (плохому программисту это может обернуться серьезными проблемами с CSS, JavaScript и отделом QA);
- Пишет валидный HTML и пользуется валидатором типа [W3C HTML validator](https://validator.w3.org/nu/) (да, это скучно, но все еще полезно);
- Использует элементы (теги) по назначению: `h` - для заголовков, `p` - для параграфов, `a` - для ссылок, а таблицы - для таблиц;
- Для мультимедиа данных, таких как изображения, видео, анимированные объекты в `canvas`, не упускает предложить альтернативный доступ. Для изображений - использование осмысленного альтернативного текста `alt`, для видео и аудио - стенограммы и подписи;

* * *

##### Разделяйте структуру от представления и от поведения.

Разделяйте структуру (html), представление (css) и поведение (script), и попытайтесь свести их взаимодействие до абсолютного минимума.

То есть, убедитесь, что документы и шаблоны содержат только HTML и HTML, который исключительно служит для структурных целей. Переместите всю презентационную часть в таблицы стилей, а всю поведенческую - в script.

Кроме того, следует держать площадь контакта как можно меньше, связывая, как можно меньше таблиц стилей и скриптов, из документов и шаблонов.

Разделение структуры (html), представления (css) и поведения (script) имеет важное значение для выполнения дальшейшего обслуживания. Изменить HTML документы и шаблоны, всегда сложнее, чем обновлять таблицы стилей и скрипты.

Плохо 

```html
<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>
```

<p class="text--warning">Хорошо</p>

```html
<!-- Recommended -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
```

* * *

##### Не используйте ссылки на HTML сущности.

Нет необходимости использовать ссылки на сущности, как `&mdash;`, `&Rdquo;`, или `&#x263a;`, предполагая одинаковую кодировку (UTF-8) во всех файлах и проектах.

Единственное исключение распространяется на символы со специальным значением в HTML (например, `<` и `&`), а также касается «невидимых» символов (например, неразрывный пробел `&nbsp;`).

* * *

##### Не указывайте атрибуты типа для таблиц стилей и скриптов.

Не используйте атрибуты типа для таблиц стилей (если не используете CSS) и сценарии (если не используете JavaScript).

Указание атрибутов типа в этих контекстах не является необходимым, как HTML5 подразумевает text/css и text/javascript как значения по умолчанию. 

Плохо 

```html
<!-- Not recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css"
  type="text/css">
<script src="//www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"></script>
```

<p class="text--warning">Хорошо</p>

```html
<!-- Recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

```

* * *

### <span class="icon-homecode" id="html_format" data-magellan-target="html_format"></span> HTML Правила форматирования

##### Общие форматирование

Используйте новую строку для каждого блока, списка или таблицы, и задавайте отступ для каждого дочернего элемента.
Независимо от стиля элемента, поместите каждый блок, список или элемент таблицы на новой строке.

(Если у вас возникают сомнения, связанные с пробелами между элементами списка - это приемлемо, поместить все элементы `li` в одной строке.)

<p class="text--warning">Хорошо</p>

```html
<!-- Recommended -->
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>
<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
  <tbody>
    <tr>
      <td>$ 5.00
      <td>$ 4.50
</table>
```

##### HTML Кавычки
Для указания значения атрибутов, используйте двойные кавычки.
Используйте двойные (""), а не одиночные кавычки ('') вокруг значений атрибутов.

Плохо

```html
<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>
```

<p class="text--warning">Хорошо</p>
```html
<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

* * *

### <span class="icon-homecode" id="css_style" data-magellan-target="css_style"></span> Правила CSS стилей

##### Используйте правильный CSS

Используйте инструменты, такие как [W3C CSS валидатор](https://jigsaw.w3.org/css-validator/) для проверки правильности CSS.

Использование действительного CSS является показателем качества, который позволяет определить CSS код, который не будет иметь эффекта и его можно удалить, а также обеспечивает правильное использование CSS.

* * *

##### Названия ID и классов 

Используйте значимые или обобщенные ID и имена классов.

Вместо того, чтобы использовать презентационные или загадочные имена, всегда используйте ID и имена классов, которые отражают цель данного элемента, или указывают общий характер.

Имена, которые являются специфическими и отражают цель элемента должны быть предпочтительнымы, поскольку они являются наиболее понятным и наименее вероятно, изменятся.

Общие имена для элементов, которые не имеют никакого особого значения, отличного от соседних элементов. Они, как правило, необходимы в качестве «помощников».

Использование функциональных или общих имен уменьшает вероятность ненужных изменений документа или шаблона.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо 

```css
/* Not recommended: бессмысленные */
#yee-1901 {}

/* Not recommended: презентационные */
.button-green {}
.clear {}
```

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended: специфические */
#gallery {}
#login {}
.video {}

/* Recommended: общие */
.aux {}
.alt {}
```

</div>
</div>

* * *

Используйте имена ID и классов, которые являются как можно более коротким, но достаточно длинными, в случае необходимости.
Постарайтесь передать смысл идентификатора или класса, в то же время будьте как можно более кратким.

Использование имен идентификаторов и классов таким образом способствует достижениею достачного уровня понятности и эффективности кода.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо 

```css
/* Not recommended */
#navigation {}
.atr {}
```

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
#nav {}
.author {}
```

</div>
</div>

* * *

Избегайте использрвания ID и классов с селекторами типа.
Если только это неизбежно (например, со вспомогательными классами), не используйте селекторы элементов в сочетании с ID или классами.

Избегание ненужных селекторов полезно для увеличения производительности.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо 

```css
/* Not recommended */
ul#example {}
div.error {}
```

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
#example {}
.error {}
```

</div>
</div>

* * *

##### Сокращённые формы свойств

Используйте сокращенные свойства, где это возможно.
CSS предлагает множество свойств сокращенной записи (например, `font`), которые должны использоваться всякий раз, когда это возможно, даже в тех случаях, когда только одно значение явно устанавливается.

Использование сокращённого свойства полезно для эффективности кода и большей наглядности.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо 

```css
/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

</div>
</div>

* * *

<div class="row">
<div class="small-6 columns" markdown="1">

##### 0 и единицы измерения

Пропускайте единицы измерения после "0".

Пропускайте ведущие "0" в значениях.
Не используйте 0 перед значениями между -1 и 1.

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
margin: 0;
padding: 0;
font-size: .8em;
```

</div>
</div>

* * *

##### Шестнадцатеричное представление
Используйте 3 символа в шестнадцатеричном представлении, где это возможно.
Для получения значений цвета, которые позволяют это, 3 символа в шестнадцатеричном представлении короче и лаконичнее.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо

```css
/* Not recommended */
color: #eebbcc;
```
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
color: #ebc;
```

</div>
</div>

* * *

<div class="row">
<div class="small-6 columns" markdown="1">
##### Префиксы

Добавляйте префиксы в селекторы для конкретного приложения (необязательно).
В крупных проектах, а также для кода, который встраивается в других проектах или на внешних сайтах желательно использовать префиксы (в качестве пространств имен) для имен идентификаторов и классов. Используйте короткие, уникальные идентификаторы с последующим тире.

</div>

<div class="small-6 columns" markdown="1">
Использование пространств имен помогает предотвратить конфликты и может сделать обслуживание проще, например, при поиске и замене.

<p class="text--warning">Хорошо</p>

```css
.adw-help {} /* AdWords */
#maia-note {} /* Maia */
```

</div>
</div>

* * *

##### ID и имя класса Разделители

Разделяйте слова в названиях ID и класса дефисом.
Не объединяйте слова и сокращения в селекторах любыми символами, кроме дефиса, с целью улучшения понимания и просматривания кода.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо

```css
/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {}

/* Not recommended: uses underscore instead of hyphen */
.error_status {}
```
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
#video-id {}
.ads-sample {}
```

</div>
</div>

* * *

Избегайте определения браузера, а также CSS "хаки" - попробуйте другой подход в первую очередь.
Вы можете решить использовать уловки по определению браузера пользователя для того что бы решить проблемы с неодинаковым применением стелей в браузерах, или захотите использовать специальные фильтры CSS, обходные пути или хаки.

Воздержитесь от этого. Оба подхода следует считать последним средством для достижения и поддержания эффективной и управляемой кодовой базы. Иными словами, такой проход будет вредить проекту в долгосрочной перспективе, поскольку проекты, как правило, идут по пути наименьшего сопротивления.

* * *

### <span class="icon-homecode" id="css_format" data-magellan-target="css_format"></span> Правила CSS форматирования

<div class="row">
<div class="small-6 columns" markdown="1">
##### Порядок размещения деклараций

Поместите декларации в алфавитном порядке, с тем чтобы добиться последовательного так, чтобы было легче запомнить и сохранить.

Игнорируйте префиксы конкретного производителя для целей сортировки. Тем не менее, несколько конкретных префиксов для определенного CSS свойства должны быть отсортированы (например, -moz префикс предшествует -webkit).
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

</div>
</div>

* * *

<div class="row">
<div class="small-6 columns" markdown="1">
##### Отступы для блоков

Добавляйте отступы для содержимого блока, то есть правил в рамках правил, а также деклараций, так, чтобы отразить иерархию и улучшить понимание.
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}
```

</div>
</div>

* * *

##### Используйте точку с запятой после каждой декларации.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо

```css
/* Not recommended */
.test {
  display: block;
  height: 100px
}
```
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
.test {
  display: block;
  height: 100px;
}
```

</div>
</div>

* * *

##### Используйте пробел после названия свойства с двоеточием

В интересах единообразия, всегда используйте один пробел между свойством и значением (но без пробелов между свойством и двоеточием).

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо

```css
/* Not recommended */
h3 {
  font-weight:bold;
}
```
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
h3 {
  font-weight: bold;
}
```

</div>
</div>

* * *

##### Используйте пробел между последним селектором и блоком декларации

Всегда используйте один пробел между последним селектором и открывающей скобкой, с которой начинается блок декларации.

Открывающая скобка должна быть на той же строке, что и последний селектор в данном правиле.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо

```css
/* Not recommended: missing space */
#video{
  margin-top: 1em;
}

/* Not recommended: unnecessary line break */
#video
{
  margin-top: 1em;
}
```
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
#video {
  margin-top: 1em;
}
```

</div>
</div>

* * *

##### Разделяйте селекторы и декларации по строкам
Всегда используйте новую строку для каждого селектора и декларации.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо

```css
/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}
```
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

</div>
</div>

* * *

<div class="row">
<div class="small-6 columns" markdown="1">
##### Разделяйте правила по строкам.

Всегда ставьте пустую строку между правилами.

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

</div>
</div>

* * *

##### Используйте одинарные кавычки для селекторов атрибутов и значений свойств
Используйте одинарные `''`, а не двойные `""` кавычки для селекторов атрибутов или значений свойств. Не используйте кавычки в uri значений `url()`.

Исключение: Если вам нужно использовать правило @charset, используйте двойные кавычки-одиночные кавычки не допускаются.

<div class="row">
<div class="small-6 columns" markdown="1">
Плохо

```css
/* Not recommended */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}
```
</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>

```css
/* Recommended */
@import url(//www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
```

</div>
</div>

* * *

<div class="row">
<div class="small-6 columns" markdown="1">
##### Группируйте секции с помощью комментариев (необязательно).

Желательно, группировать разделы таблицы стилей, используя комментарии. 

</div>

<div class="small-6 columns" markdown="1">
<p class="text--warning">Хорошо</p>
```css
/* Header */

#adw-header {}

/* Footer */

#adw-footer {}

/* Gallery */

.adw-gallery {}
```

</div>
</div>

* * *

##### Напутствие

Будьте последовательны

Если вы редактируете код, потратратьте несколько минут, чтобы посмотреть на весь код и определить его стиль. Если все в проекте используют пробелы вокруг всех арифметических операторов, вы должны тоже. Если их комментарии используют хэш-знаки вокруг, ваши комментарии тоже.

Смысл в руководящих принципах стиля в том, чтобы иметь общий словарь кодирования, чтобы люди могли сосредоточиться на том, что вы говорите, а не на том, как вы говорите это. Мы представляем глобальные правила стиля, чтобы люди знали словарный запас, но локальный стиль также имеет важное значение. Если код, который вы добавляете в файл резко отличается от существующего кода вокруг него, он выбрасывает читателей из общего ритма, когда они читают его. Избегайте этого.

Как говорится, безобразно, но единообразно.