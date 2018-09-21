import { Negociacao, Negociacoes, Igualavel } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { logExecTime, domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { toLog } from '../helpers/Utils';

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
    @domInject('#data')
    private inputData: JQuery;
    @domInject('#quantidade')
    private inputQntd: JQuery;
    @domInject('#valor')
    private inputValor: JQuery;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#NegociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private service = new NegociacaoService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @throttle()
    //@logExecTime(true)
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
        toLog(negociacao, this.negociacoes);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso!', 'success');

        setTimeout(e => {
            this.mensagemView.removeAlert()
        }, 750);
    }

    private isWeekend(day: Date):boolean {
        return day.getDay() === DiaSemana.Domingo || day.getDay() === DiaSemana.Sábado;
    }

    @throttle()
    importarDados() {
        this.service.getNegociacoes(res => {
            if(res.ok) return res;
            throw new Error(res.statusText);
        })
        .then(negociacoesParaImportar => {
            const negociacoesJaImportadas = this.negociacoes.toArray(); 

            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(negociacaoJaImportada => 
                        negociacao.isEqual(negociacaoJaImportada)))
                .forEach(negociacao => {
                    this.negociacoes.adiciona(negociacao);
                });

            this.negociacoesView.update(this.negociacoes);
        })
    }
}