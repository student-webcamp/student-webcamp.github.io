$(document).ready(function () {
    // Handler for .ready() called.
    var _simpleSearch = $(".simple-search");
    _simpleSearch.on("click", ".button", function (e) {
        var self = $(this);
        var parent = self.parent();
        var val = parent.find('input').val();
        var selector = "#" + parent.attr('data-target');
        var dataItems = $(selector).find('.simple-search__item');
        var reg = new RegExp(val, 'i');

        dataItems.each(function (index) {
            var _self = $(this);
            var _contains = reg.test(_self.text());
            if (!_contains) {
                _self.hide();
            } else {
                _self.show();
            }

        });
    });
    _simpleSearch.on("keyup", "input", function(e){
        if(e.which == "13"){
            _simpleSearch.find(".button").click();
        }
    })
});