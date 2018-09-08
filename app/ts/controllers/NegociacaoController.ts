import { Negociacao, Negociacoes } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
/**
 * @class NegociacaoController
 * Para integração da minha model juntamente a minha view. 
 */
export class NegociacaoController {
    private inputData: JQuery;
    private inputQntd: JQuery;
    private inputValor: JQuery;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#NegociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    
    constructor() {
        this.inputData = $('#data');
        this.inputQntd = $('#quantidade');
        this.inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(e: Event) {
        e.preventDefault();

        const negociacao = new Negociacao(
            new Date(this.inputData.val().toString().replace(/-/g, '/') ),
            parseInt(this.inputQntd.val().toString()),
            parseFloat(this.inputValor.val().toString())
        );
        
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso!');

        setTimeout(e => {
            this.mensagemView.removeAlert()
        }, 1000);
    }
}