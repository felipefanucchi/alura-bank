var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#NegociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = $('#data');
        this.inputQntd = $('#quantidade');
        this.inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    NegociacaoController.prototype.adiciona = function (e) {
        var _this = this;
        e.preventDefault();
        var negociacao = new Negociacao(new Date(this.inputData.val().toString().replace(/-/g, '/')), parseInt(this.inputQntd.val().toString()), parseFloat(this.inputValor.val().toString()));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso!');
        setTimeout(function (e) {
            _this.mensagemView.removeAlert();
        }, 1000);
    };
    return NegociacaoController;
}());
