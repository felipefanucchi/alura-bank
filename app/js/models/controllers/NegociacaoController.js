var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQntd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    NegociacaoController.prototype.adiciona = function (e) {
        e.preventDefault();
        var negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, '/')), parseInt(this.inputQntd.value), parseFloat(this.inputValor.value));
        this.negociacoes.adiciona(negociacao);
    };
    return NegociacaoController;
}());
