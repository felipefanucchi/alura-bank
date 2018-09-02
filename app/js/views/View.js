var View = /** @class */ (function () {
    function View(selector) {
        this.element = document.querySelector(selector);
    }
    View.prototype.update = function (model) {
        this.element.innerHTML = this.template(model);
    };
    View.prototype.remove = function () {
        this.element.removeChild(this.element.firstChild);
    };
    return View;
}());
