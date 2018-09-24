import { Negociacao, Interfaces } from '../models/index';

export class Negociacoes implements Interfaces<Negociacoes> {
    private negociacoes: Negociacao[] = new Array();

    adiciona(negociacao: Negociacao):void {
        this.negociacoes.push(negociacao)
    }

    toArray():Negociacao[] { 
        return ([] as Negociacao[]).concat(this.negociacoes);
    }

    log():void {
        console.log(JSON.stringify(this.negociacoes));
    }

    isEqual(negociacoes: Negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.toArray())
    }
}