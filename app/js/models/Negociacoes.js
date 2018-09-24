System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = (function () {
                function Negociacoes() {
                    this.negociacoes = new Array();
                }
                Negociacoes.prototype.adiciona = function (negociacao) {
                    this.negociacoes.push(negociacao);
                };
                Negociacoes.prototype.toArray = function () {
                    return [].concat(this.negociacoes);
                };
                Negociacoes.prototype.log = function () {
                    console.log(JSON.stringify(this.negociacoes));
                };
                Negociacoes.prototype.isEqual = function (negociacoes) {
                    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.toArray());
                };
                return Negociacoes;
            }());
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
