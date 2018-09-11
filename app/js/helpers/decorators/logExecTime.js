System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecTime(isSeconds) {
        if (isSeconds === void 0) { isSeconds = false; }
        return function (target, key, descriptor) {
            var original = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var unity = 'ms';
                var divider = 1;
                if (isSeconds) {
                    unity = 's';
                    divider = 1000;
                }
                console.log('---------------------------------------');
                console.log("Parametros do m\u00E9todo " + key + ": " + JSON.stringify(args));
                var t1 = performance.now();
                var res = original.apply(this, args);
                console.log("Resultado do m\u00E9todo: " + JSON.stringify(res));
                var t2 = performance.now();
                console.log(key + " demorou " + (t2 - t1) / divider + " " + unity);
                console.log('---------------------------------------');
                return res;
            };
            return descriptor;
        };
    }
    exports_1("logExecTime", logExecTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
