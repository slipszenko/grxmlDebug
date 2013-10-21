// Create a namespace for the program, if not already created
var szko = szko ? szko : {};

szko.grxmlDebug = (function () {
    "use strict";

    // Private vars
    var currendNode = 0,


    init = function() {
        
    };


    // Return exposes some private functions as public
    return {
        init : init.bind(szko.grxmlDebug)
    };

}());