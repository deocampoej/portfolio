'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', homepage, true),            
            new Route('portfolio', portfolio),
            new Route('contact', contact)
        ]);
    }
    init();
}());
