---
layout: post
title:  "Frontend Starter 3: Использование Sublime Text 3"
date:   14.05.2016 20:27 +0300
categories: tutorials
tags:   frontend_starter
level:  1
---

# Текстовый редактор Sublime Text 3

Итак, Вы уже готовы делать первые странички. Давайте подготовим инструмент, с помощью которого будет удобнее вести разработку.

**Sublime Text** - текстовый редактор с подсветкой синтаксиса, имеющий поддержку большого количества языков программирования и разметки. Удобен в использовании, быстрый и легко расширяем с помощью плагинов.

### <span class="icon-homecode" id="install" data-magellan-target="install"></span> Установка Sublime

Для начала скачайте и установите Sublime Text с официальной страницы разработчика: [скачать Sublime Text 3](https://www.sublimetext.com/3). Выберете установщик под Вашу операционную систему.

Запустите установщик и установите Sublime Text в любую удобную для Вас директорию (для Windows по умолчанию C:/Program Files/Sublime Text 3). 

После установки и запуска Вы увидите рабочее окно, поделенное на основные зоны:

![Рабочее окно Sublime Text 3](/img/Frontend_Starter/sublime_1.png)

- В **области 1** содержится структура папок и файлов проекта
- **Область 2** -- само окно редактора, где и будет происходить непосредственная разработка
- **Область 3** -- это миникарта текущего файла, по ней можно быстро перемещаться по документу
- **Область 4** -- выбор языка подсветки синтаксиса, в данном случае HTML

**Язык подсветки синтаксиса выбирается автоматически согласно выбранному расширению файла** (например для file**.html** будет выбран язык HTML). Если файл не сохранен с каким-либо расширением, Sublime Text распознает его как **Plain Text**.

Базовая версия редактора готова к использованию! Давайте добавим полезных плагинов чтобы сделать нашу работу проще и эффективнее.

### <span class="icon-homecode" id="packagecontrol" data-magellan-target="packagecontrol"></span> Установка Package Control

Есть два способа установки плагинов (модулей расширения) для Sublime: вручную распаковать и установить необходимый нам плагин либо установить на Sublime специальный установщик **Package Control**.

**Package Control** -- это пакетный менеджер дополнений, который работает из интерфейса редактора. Перейдем на сайт производителя и следуем [инструкциям по установке](https://packagecontrol.io/installation):

1. Запустите Sublime Text 3
2. Откройте консоль приложения с помощью комбинацией клавиш **Ctrl + \`** либо выбрать в меню `View -> Show Console`
3. Скопируйте установочный код в консоль Sublime Text
4. Нажмите `Enter`

```
import urllib.request,os,hashlib; 
h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; 
pf = 'Package Control.sublime-package'; 
ipp = sublime.installed_packages_path(); 
urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); 
by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); 
dh = hashlib.sha256(by).hexdigest(); 
print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```
![Консоль Sublime](/img/Frontend_Starter/sublime_2.png)

- Этот скрипт запустит установку Package Control
- После установки будет выброшено окно с текстом `1 missed dependency was installed` нажмите `OK`
- Перезапустите Sublime Text 3

После выполнения этих простых инструкций в меню `Preferences` появится пункт `Package Control`. Также его можно вызвать комбинацией клавиш `Ctrl + Shift + P`.

![Package Control консоль](/img/Frontend_Starter/sublime_3.png)

Вызывайте команду `Package Control:Install Package` (можно ввести команду вручную или выбрать мышкой или стрелками) и увидите огромное количество доступных для установки плагинов:

![Package Control Install Package](/img/Frontend_Starter/sublime_4.png)

Выбираете нужный плагин и жмёте `Enter` -- и спустя несколько секунд плагин установлен в Sublime.
- Некоторые плагины требуют перезагрузки Sublime.

Давайте рассмотрим неколько полезных плагинов.

### <span class="icon-homecode" id="emmet" data-magellan-target="emmet"></span> Плагин Emmet

**Emmet** -- один из самых популярных плагинов для редакторов. Emmet является также одним из самых значительных методов повышения продуктивности веб-разработчиков. После нажатия на табуляцию Emmet преобразует простые сокращения в объемные фрагменты кода для HTML и CSS.

![Emmet в работе](/img/Frontend_Starter/sublime_5.gif)

- Emmet позволяет генерировать код с помощью коротких инструкций
- Для избежания ошибок следует заранее представлять ожидаемый результат

Имеет большой набор сокращённых конструкций для генерации кода на HTML и СSS. С использованием можно ознакомится на [официальном сайте](http://docs.emmet.io/)

- [Синтаксис для генерации HTML](http://docs.emmet.io/abbreviations/syntax/)
- [Синтаксис для генерации CSS](http://docs.emmet.io/css-abbreviations/)

### <span class="icon-homecode" id="color" data-magellan-target="color"></span> Плагин Color Highlighter

**Color Highlighter** -- подсвечивает цвета, используемые в CSS-файле. Позволяет быстро визуально ориентироваться по цветовой схеме проекта.

![Color Highlighter пример](/img/Frontend_Starter/sublime_6.png)

Автоматически изменяет цвет фона или цвет текста в свойствах CSS. 

### <span class="icon-homecode" id="codeintel" data-magellan-target="codeintel"></span> Плагин CodeIntel

**CodeIntel** -- плагин для умного автодополнения введёных значений (автокомплит). Позволяет выбрать подходящее значение из выпадающего списка.

![CodeIntel пример](/img/Frontend_Starter/sublime_7.png)

Поддерживает большое количество языков: JavaScript, Mason, XBL, XUL, RHTML, SCSS, Python, HTML, Ruby, Python3, XML, Sass, XSLT, Django, HTML5, Perl, CSS, Twig, Less, Smarty, Node.js, Tcl, TemplateToolkit, PHP и тд.

### <span class="icon-homecode" id="bracket" data-magellan-target="bracket"></span> Плагин BracketHighlighter

**BracketHighlighter** -- плагин, показывающий на каких строках находится открывающий и закрывающий тег блока кода.

![BracketHighlighter пример](/img/Frontend_Starter/sublime_8.png)

Позволяет быстро соориентироваться в каком блоке кода вносятся текущие изменения и отслеживать не закрытые теги и скобочки.

### <span class="icon-homecode" id="git" data-magellan-target="git"></span> Плагин Git и GitGutter

**Git** -- интегрирует популярную систему контроля версий Git в Sublime. Команды Git вызываются напрямую из командной строки Sublime с помощтю комбинации `Ctrl + Shift + P`

![Git пример](/img/Frontend_Starter/sublime_9.png)

**GitGutter** -- подсвечивает строки, изменённые с последним коммитом в режиме реального времени:

![GitGutter пример](/img/Frontend_Starter/sublime_10.png)

- С системой контроля версий git мы подробнее познакомимся в дальнейшем

### <span class="icon-homecode" id="tips" data-magellan-target="tips"></span> Полезные советы

##### Неправильная кодировка

Sublime Text иногда некорректно отображает кириллические символы в кодировке Windows-1251 (стандартная кодировка для документов, созданные под операционной системой Windows). Для того чтобы исправить эту ошибку, отредактируйте файл пользовательских настроек.

Перейдите в пункт меню `Preferences -> Settings - User` и добавьте строчку кода:

```
fallback_encoding": "Cyrillic (Windows 1251)"
```

- не забудьте поставить запятую если в этом файле уже есть неколько настроек, так как файл хранит данные в формате JSON

##### Автовыравнивание кода

В Sublime Text по умолчанию не присвоено горячей клавиши для автовыравнивания кода. Чтобы выровнять форматирование документа, необходимо выделить весь текст и запустить выравнивание в меню `Edit -> Line -> Reindent`.

Эту задачу можно автоматизировать, добавив комбинацию горячих клавиш. Для этого выберете в меню `Preferencrs -> Key Bindings - User` и вставьте такую строку:

```
{ "keys": ["ctrl+alt+l"], "command": "reindent" , "args": { "single_line": false } }
```

Если документ был пустой, необходимо добавить квадратные скобки и сохранить:

```
[
	{ "keys": ["ctrl+alt+l"], "command": "reindent" , "args": { "single_line": false } }
]
```
- этот файл тоже хранит данные в формате JSON как и все настройки Sublime
- автоматическое форматирование документа запускается комбинацией клавиш `Ctrl + Alt + L`

##### Множественное редактирование

Просто зажмите `Ctrl` и выбирайте поставьте курсор туда, где необходимо внести изменения. Редактирование нескольких строк будет происходить одновременно:

![ctrl пример](/img/Frontend_Starter/sublime_11.gif)

- Больше горячих клавиш с примерами смотрите в полезных ссылках

##### Полезные ссылки

- Документация Sublime Text [на русском](http://sublimetext.ru/documentation) или [официальная](https://www.sublimetext.com/)
- Большая подборка [плагинов с описанием и аналогами на русском](https://habrahabr.ru/post/235901/)
- Наглядное пособие по [комбинациям горячих клавиш в Sublime](http://webdesign.tutsplus.com/tutorials/useful-shortcuts-for-a-faster-workflow-in-sublime-text-3--cms-22185)
- Больше полезных статей на [Student Webcamp](/)


