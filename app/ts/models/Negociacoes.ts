import { Negociacao } from './Negociacao';
export class Negociacoes {
    private negociacoes: Negociacao[] = new Array();

    adiciona(negociacao: Negociacao):void {
        this.negociacoes.push(negociacao)
    }

    toArray():Negociacao[] { 
        return ([] as Negociacao[]).concat(this.negociacoes);
    }

    toText():void {
        console.log(JSON.stringify(this.negociacoes));
    }
}