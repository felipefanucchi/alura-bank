import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';

export class Negociacoes implements Imprimivel {
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
}