export abstract class View<T> {
    private element: JQuery;

    constructor(selector: string) {
        this.element = $(selector)
    }

    update(model: T):void {
        this.element.html(this.template(model));
    }

    removeAlert():void {
        this.element.children().remove();
    }

    abstract template(model: T):string
}