System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NegociacaoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = (function () {
                function NegociacaoService() {
                }
                NegociacaoService.prototype.getNegociacoes = function (handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(function (res) { return handler(res); })
                        .then(function (dados) {
                        return dados.map(function (dado) { return new index_1.Negociacao(new Date(), dado.vezes, dado.montante); });
                    })
                        .catch(function (err) { return console.error(err.message); });
                };
                return NegociacaoService;
            }());
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
