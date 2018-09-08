import { View } from './View';

export class MensagemView extends View<string> {

    template(model: string, type?: string):string {
        return `<p class="alert alert-${type}">${model}</p>`
    }
}