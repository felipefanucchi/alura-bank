System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = (function () {
                function View(selector, escape) {
                    if (escape === void 0) { escape = false; }
                    this.escape = escape;
                    this.element = $(selector);
                }
                View.prototype.update = function (model, typeAlert) {
                    var template = this.template(model, typeAlert);
                    if (this.escape)
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    this.element.html(template);
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
