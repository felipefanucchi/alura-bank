export function logExecTime(isSeconds: boolean = false) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let unity =  'ms';
            let divider = 1; 
            if(isSeconds) {
                unity = 's';
                divider = 1000;
            }
            console.log('---------------------------------------');
            console.log(`Parametros do método ${key}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const res =  original.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(res)}`);
            const t2 = performance.now();
            console.log(`${key} demorou ${(t2 - t1)/divider} ${unity}`);
            console.log('---------------------------------------');

            return res;
        }

        return descriptor;
    }
}