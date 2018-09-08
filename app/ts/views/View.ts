export abstract class View<T> {
    private element: JQuery;

    constructor(selector: string, private escape: boolean = false) {
        this.element = $(selector);
    }

    update(model: T, typeAlert?: T):void {
        let template = this.template(model, typeAlert);
        
        if(this.escape) template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this.element.html(template); 
    }

    removeAlert():void {
        this.element.children().remove();
    }

    abstract template(model: T, typeAlert?: T):string
}