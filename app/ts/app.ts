import { NegociacaoController } from './controllers/NegociacaoController';

const elements = {
    form:$('.form'),
    btnImporta:$('#botao-importa')
};

const negociacaoController = new NegociacaoController();

elements.form.submit(negociacaoController.adiciona.bind(negociacaoController));
elements.btnImporta.on('click', negociacaoController.importarDados.bind(negociacaoController))

