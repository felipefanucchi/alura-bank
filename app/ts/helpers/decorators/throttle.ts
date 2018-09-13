export function throttle() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        let timer = 0;

        descriptor.value = function(...args: any[]) {
            if(event) event.preventDefault();

            clearTimeout(timer);
            timer = setTimeout(() => {
                original.apply(this, args);
            }, 500);
        }

        return descriptor;
    }
}