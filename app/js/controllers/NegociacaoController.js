System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/NegociacaoService"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, NegociacaoService_1, DiaSemana, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (NegociacaoService_1_1) {
                NegociacaoService_1 = NegociacaoService_1_1;
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
                    this.service = new NegociacaoService_1.NegociacaoService();
                    this.negociacoesView.update(this.negociacoes);
                }
                NegociacaoController.prototype.adiciona = function (e) {
                    var _this = this;
                    e.preventDefault();
                    var date = new Date(this.inputData.val().replace(/-/g, '/'));
                    date.toLocaleDateString();
                    if (this.isWeekend(date)) {
                        this.mensagemView.update('Transações somente em dias úteis.', 'danger');
                        setTimeout(function (e) {
                            _this.mensagemView.removeAlert();
                        }, 1500);
                        return false;
                    }
                    var negociacao = new index_1.Negociacao(date, parseInt(this.inputQntd.val()), parseFloat(this.inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update('Negociação Adicionada com sucesso!', 'success');
                    setTimeout(function (e) {
                        _this.mensagemView.removeAlert();
                    }, 750);
                };
                NegociacaoController.prototype.isWeekend = function (day) {
                    return day.getDay() === DiaSemana.Domingo || day.getDay() === DiaSemana.Sábado;
                };
                NegociacaoController.prototype.importarDados = function () {
                    var _this = this;
                    function isOk(res) {
                        if (res.ok) {
                            return res.json();
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    this.service.getNegociacoes(isOk)
                        .then(function (negociacoes) {
                        negociacoes.forEach(function (negociacao) { return _this.negociacoes.adiciona(negociacao); });
                        _this.negociacoesView.update(_this.negociacoes);
                    });
                };
                __decorate([
                    index_3.domInject('#data')
                ], NegociacaoController.prototype, "inputData", void 0);
                __decorate([
                    index_3.domInject('#quantidade')
                ], NegociacaoController.prototype, "inputQntd", void 0);
                __decorate([
                    index_3.domInject('#valor')
                ], NegociacaoController.prototype, "inputValor", void 0);
                __decorate([
                    index_3.throttle(),
                    index_3.logExecTime(true)
                ], NegociacaoController.prototype, "adiciona", null);
                __decorate([
                    index_3.throttle()
                ], NegociacaoController.prototype, "importarDados", null);
                return NegociacaoController;
            }());
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
