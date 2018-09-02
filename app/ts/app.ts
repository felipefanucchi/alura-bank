const elements = {
    form:document.querySelector('.form')
};

const negociacaoController = new NegociacaoController();

elements.form.addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));