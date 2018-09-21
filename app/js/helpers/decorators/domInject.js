System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(selector) {
        return function (object, key) {
            var el;
            var getter = function () {
                if (!el) {
                    el = $(selector);
                }
                return el;
            };
            Object.defineProperty(object, key, {
                get: getter
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
