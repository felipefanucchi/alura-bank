var Negociacoes = (function () {
    function Negociacoes() {
        this.negociacoes = new Array();
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this.negociacoes.push(negociacao);
    };
    Negociacoes.prototype.toArray = function () {
        return [].concat(this.negociacoes);
    };
    return Negociacoes;
}());
