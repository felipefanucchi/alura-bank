import { Interfaces } from '../models/Interfaces';

export class Negociacao implements Interfaces<Negociacao> {

    constructor(
        readonly data: Date, 
        readonly quantidade: number, 
        readonly valor: number) {
        }

    get volume() {
        return this.quantidade * this.valor
    }

    log():void {
        console.log(`Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}`);
    }

    isEqual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}