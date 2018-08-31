var NegociacoesView = /** @class */ (function () {
    function NegociacoesView(selector) {
        this.element = document.querySelector(selector);
    }
    NegociacoesView.prototype.template = function (model) {
        return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n            \n            <tbody>\n                " + model.toArray().map(function (negociacao) {
            return "\n                    <tr>\n                        <td>" + negociacao.data.getDate() + "/" + (negociacao.data.getMonth() + 1) + "/" + negociacao.data.getFullYear() + "</td>\n                        <td>" + negociacao.quantidade + "</td>\n                        <td>" + negociacao.valor + "</td>\n                        <td>" + negociacao.volume + "</td>\n                    </tr>\n                    ";
        }).join('') + "\n            </tbody>\n            \n            <tfoot>\n            </tfoot>\n        </table>\n        ";
    };
    NegociacoesView.prototype.update = function (model) {
        this.element.innerHTML = this.template(model);
    };
    return NegociacoesView;
}());
