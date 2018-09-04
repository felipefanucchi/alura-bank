System.register(["../models/Negociacao", "../models/Negociacoes", "../views/NegociacoesView", "../views/MensagemView"], function (exports_1, context_1) {
    "use strict";
    var Negociacao_1, Negociacoes_1, NegociacoesView_1, MensagemView_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = (function () {
                function NegociacaoController() {
                    this.negociacoes = new Negociacoes_1.Negociacoes();
                    this.negociacoesView = new NegociacoesView_1.NegociacoesView('#NegociacoesView');
                    this.mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this.inputData = $('#data');
                    this.inputQntd = $('#quantidade');
                    this.inputValor = $('#valor');
                    this.negociacoesView.update(this.negociacoes);
                }
                NegociacaoController.prototype.adiciona = function (e) {
                    var _this = this;
                    e.preventDefault();
                    var negociacao = new Negociacao_1.Negociacao(new Date(this.inputData.val().toString().replace(/-/g, '/')), parseInt(this.inputQntd.val().toString()), parseFloat(this.inputValor.val().toString()));
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
