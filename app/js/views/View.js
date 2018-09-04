var View = (function () {
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
