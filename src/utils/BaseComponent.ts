import { LitElement, css, CSSResult } from 'lit';
// @ts-ignore
import { TWStyles } from '../../temp/tw';

export class BaseComponent extends LitElement {
    static get styles() {
        return [
            ...this.customStyles(),
            TWStyles,
        ];
    }

    static customStyles(): CSSResult[] {
        return [];
    }
}
