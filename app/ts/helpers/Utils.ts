import { Imprimivel } from '../models/index';

export function toLog(...args: Imprimivel[]) {
    args.forEach(obj => obj.log());
}