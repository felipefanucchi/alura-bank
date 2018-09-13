System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle() {
        return function (target, propertyKey, descriptor) {
            var original = descriptor.value;
            var timer = 0;
            descriptor.value = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (event)
                    event.preventDefault();
                clearTimeout(timer);
                timer = setTimeout(function () {
                    original.apply(_this, args);
                }, 500);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
