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
    _simpleSearch.on("keyup", "input", function (e) {
        if (e.which == "13") {
            _simpleSearch.find(".button").click();
        }
    });

    var $subscribeForm = $("#mc-embedded-subscribe-form");
    // $subscribeForm.on('submit', function (e) {
    //     e.preventDefault();
    //     var self = $(this);
    //     $.ajax({
    //         url: '//webcamp.us13.list-manage.com/subscribe/post?u=d9e9c415942a772cb0d43a4d8&id=57b2022d15',
    //         data: self.serialize(),
    //     }).done(function (data) {
    //         console.log("Sample of data:", data);
    //     });
    //     //4895f42d8e5a34fec12c7e136d322f92-us13
    // });
    // $.ajax({
    //         url: "https://us13.api.mailchimp.com/3.0/lists",
    //         beforeSend: function (xhr) {
    //             xhr.setRequestHeader ("Authorization", "Basic " + btoa("apikey:4895f42d8e5a34fec12c7e136d322f92-us13"));
    //         },
    //     })
    //
});