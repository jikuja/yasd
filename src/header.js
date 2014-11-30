// Bad plugin. does only formatting. Should be done with CSS.

;(function ( $, window, document, undefined ) {
    "use strict";

    $.header2 = function(str) {
        var name = "";
        if (typeof str === "string" && str.length > 0) {
            name = $.getQueryParam(str);
        } else {
            name = $.getQueryParam("page");
        }

        var selectorString = "a[href*='" + name + "']";
        $(selectorString).parent().addClass("active");
    };
})( jQuery, window, document );