System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = (function () {
                function NegociacaoController() {
                    this.negociacoes = new index_1.Negociacoes();
                    this.negociacoesView = new index_2.NegociacoesView('#NegociacoesView');
                    this.mensagemView = new index_2.MensagemView('#mensagemView');
                    this.inputData = $('#data');
                    this.inputQntd = $('#quantidade');
                    this.inputValor = $('#valor');
                    this.negociacoesView.update(this.negociacoes);
                }
                NegociacaoController.prototype.adiciona = function (e) {
                    var _this = this;
                    e.preventDefault();
                    var negociacao = new index_1.Negociacao(new Date(this.inputData.val().toString().replace(/-/g, '/')), parseInt(this.inputQntd.val().toString()), parseFloat(this.inputValor.val().toString()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update('Negociação Adicionada com sucesso!');
                    setTimeout(function (e) {
                        _this.mensagemView.removeAlert();
                    }, 1000);
                };
                return NegociacaoController;
            }());
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
