import { NegociacaoController } from './controllers/NegociacaoController';

const elements = {
    form:$('.form')
};

const negociacaoController = new NegociacaoController();

elements.form.submit(negociacaoController.adiciona.bind(negociacaoController));