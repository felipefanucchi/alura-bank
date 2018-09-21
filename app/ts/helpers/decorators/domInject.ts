export function domInject(selector: string) {
    return function(object: any, key: string) {
        let el: JQuery;

        const getter = function() {
            if(!el) {
                // console.log(`Seletor ${selector} adicionado a propriedade ${key}`);
                el = $(selector)
            }
            return el;
        }

        Object.defineProperty(object, key, {
            get: getter
        });
    }
}