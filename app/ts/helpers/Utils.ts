export function imprime(...args: any[]) {
    args.forEach(obj => obj.toText());
}