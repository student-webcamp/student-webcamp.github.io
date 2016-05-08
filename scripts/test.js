/**
 * Created by lenka on 5/8/16.
 */
/*ES5*/
var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        alert('li number ' + i);
    });
}