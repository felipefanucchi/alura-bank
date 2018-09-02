class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQntd: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#NegociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQntd = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(e: Event) {
        e.preventDefault();

        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(/-/g, '/')),
            parseInt(this.inputQntd.value),
            parseFloat(this.inputValor.value)
        );
        
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso!');

        setTimeout(e => {
            this.mensagemView.remove()
        }, 1500);
    }
}