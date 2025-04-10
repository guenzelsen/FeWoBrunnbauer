import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('apartment-home')
export class ApartmentHome extends LitElement {
    static styles = css`
        :host {
            display: block;
            align-items: center;

            home-slider {
                z-index: -1;
            }

            apartment-home-content {
                margin: -150px 25% 0;
            }
        }
    `

    protected render() {
        return html`
            <home-slider></home-slider>
            <apartment-home-content></apartment-home-content>
        `;
    }
}