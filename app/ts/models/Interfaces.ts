import {Igualavel} from './index';
import {Imprimivel} from './index';

export interface Interfaces<T> extends Imprimivel, Igualavel<T> {}