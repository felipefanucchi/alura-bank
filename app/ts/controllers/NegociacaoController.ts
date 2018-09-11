import { Negociacao, Negociacoes } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { logExecTime } from '../helpers/decorators/logExecTime';

enum DiaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
};
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

    @logExecTime(true)
    adiciona(e: Event):boolean | void {
        e.preventDefault();
        
        const date = new Date((this.inputData.val() as string).replace(/-/g, '/') );
        date.toLocaleDateString();

        if(this.isWeekend(date)) {
            this.mensagemView.update('Transações somente em dias úteis.', 'danger');
            setTimeout(e => {
                this.mensagemView.removeAlert()
            }, 1500);
            return false;
        }

        const negociacao = new Negociacao(
            date,
            parseInt((this.inputQntd.val() as string)),
            parseFloat((this.inputValor.val() as string))
        );
        
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso!', 'success');

        setTimeout(e => {
            this.mensagemView.removeAlert()
        }, 1500);
    }

    private isWeekend(day: Date):boolean {
        return day.getDay() === DiaSemana.Domingo || day.getDay() === DiaSemana.Sábado;
    }
}