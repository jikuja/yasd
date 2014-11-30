// Bad plugin. does only formatting. Should be done with CSS.

;(function ( $, window, document, undefined ) {
    "use strict";

    $.fn.prettifyTable = function() {
        this.find("table").addClass("table table-striped table-bordered");
        return this;
    };
})( jQuery, window, document );