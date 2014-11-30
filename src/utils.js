/*jslint browser: true*/ /*global $, jQuery, alert*/
;(function ( $, window, document, undefined )
{
    "use strict";

    $.getQueryParam = function(name, url) {
        if (!url) {
            url = window.location.href;
        }
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
        if (!results) {
            return undefined;
        }
        return results[1] || undefined;
    };


})( jQuery, window, document );