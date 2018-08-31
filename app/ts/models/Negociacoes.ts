class Negociacoes {
    private negociacoes: Negociacao[] = new Array();

    adiciona(negociacao: Negociacao):void {
        this.negociacoes.push(negociacao)
    }

    toArray():Negociacao[] {
        return [].concat(this.negociacoes);
    }
}