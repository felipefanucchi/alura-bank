const negociacao = new Negociacao(new Date(), 10, 100);
negociacao.quantidade = 1;
negociacao._quantidade = 20;
console.log(negociacao.quantidade);