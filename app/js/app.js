System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController_1, elements, negociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            elements = {
                form: $('.form')
            };
            negociacaoController = new NegociacaoController_1.NegociacaoController();
            elements.form.submit(negociacaoController.adiciona.bind(negociacaoController));
        }
    };
});
