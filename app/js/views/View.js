System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = (function () {
                function View(selector) {
                    this.element = $(selector);
                }
                View.prototype.update = function (model) {
                    this.element.html(this.template(model));
                };
                View.prototype.removeAlert = function () {
                    this.element.children().remove();
                };
                return View;
            }());
            exports_1("View", View);
        }
    };
});
