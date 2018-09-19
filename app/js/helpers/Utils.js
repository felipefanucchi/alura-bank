System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function imprime() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (obj) { return obj.toText(); });
    }
    exports_1("imprime", imprime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
