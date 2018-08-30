var elements = {
    form: document.querySelector('.form')
};
var negociacaoController = new NegociacaoController();
elements.form
    .addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));
