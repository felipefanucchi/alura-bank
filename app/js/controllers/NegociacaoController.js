var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#NegociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQntd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    NegociacaoController.prototype.adiciona = function (e) {
        e.preventDefault();
        var negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, '/')), parseInt(this.inputQntd.value), parseFloat(this.inputValor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
    };
    return NegociacaoController;
}());
