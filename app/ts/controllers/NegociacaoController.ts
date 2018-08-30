class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQntd: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQntd = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(e: Event) {
        e.preventDefault();

        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(/-/g, ',')),
            parseInt(this.inputQntd.value),
            parseFloat(this.inputValor.value)
        );

        console.log(negociacao);
    }
}