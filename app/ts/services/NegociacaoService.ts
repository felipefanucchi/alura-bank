import { NegociacaoParcial, Negociacao } from '../models/index';
export class NegociacaoService {

    getNegociacoes(handler: Function):Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then((dados: any) => 
                dados.map((dado: any) => new Negociacao( new Date(), dado.vezes, dado.montante) )
            )
            .catch((err: any) => console.error(err.message))
    }
}