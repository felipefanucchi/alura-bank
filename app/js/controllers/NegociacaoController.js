System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, DiaSemana, NegociacaoController;
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
            (function (DiaSemana) {
                DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
                DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
                DiaSemana[DiaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
                DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
                DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
                DiaSemana[DiaSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
            })(DiaSemana || (DiaSemana = {}));
            ;
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
                    var dateValue = this.inputData.val();
                    var qntdValue = this.inputQntd.val();
                    var valorValue = this.inputValor.val();
                    var date = new Date(dateValue.replace(/-/g, '/'));
                    date.toLocaleDateString();
                    if (this.isWeekend(date)) {
                        this.mensagemView.update('Transações somente em dias úteis.', 'danger');
                        setTimeout(function (e) {
                            _this.mensagemView.removeAlert();
                        }, 1500);
                        return false;
                    }
                    var negociacao = new index_1.Negociacao(date, parseInt(qntdValue), parseFloat(valorValue));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update('Negociação Adicionada com sucesso!', 'success');
                    setTimeout(function (e) {
                        _this.mensagemView.removeAlert();
                    }, 1500);
                };
                NegociacaoController.prototype.isWeekend = function (day) {
                    return day.getDay() === DiaSemana.Domingo || day.getDay() === DiaSemana.Sábado;
                };
                return NegociacaoController;
            }());
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
