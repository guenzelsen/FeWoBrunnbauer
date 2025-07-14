import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('apartment-home')
export class ApartmentHome extends LitElement {
    static styles = css`
        :host {
            display: block;
            align-items: center;

            apartment-home-content {
                margin: -150px 25% 0;
            }
        }
    `

    protected render() {
        return html`
            <slider-component></slider-component>
            <apartment-home-content></apartment-home-content>
        `;
    }
}