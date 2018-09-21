System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = (function () {
                function Negociacao(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                Object.defineProperty(Negociacao.prototype, "volume", {
                    get: function () {
                        return this.quantidade * this.valor;
                    },
                    enumerable: true,
                    configurable: true
                });
                Negociacao.prototype.log = function () {
                    console.log("Data: " + this.data + "\n        Quantidade: " + this.quantidade + "\n        Valor: " + this.valor);
                };
                Negociacao.prototype.isEqual = function (negociacao) {
                    return this.data.getDate() == negociacao.data.getDate()
                        && this.data.getMonth() == negociacao.data.getMonth()
                        && this.data.getFullYear() == negociacao.data.getFullYear();
                };
                return Negociacao;
            }());
            exports_1("Negociacao", Negociacao);
        }
    };
});
