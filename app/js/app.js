var elements = {
    form: $('.form')
};
var negociacaoController = new NegociacaoController();
elements.form.submit(negociacaoController.adiciona.bind(negociacaoController));
