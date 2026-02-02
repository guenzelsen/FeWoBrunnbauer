import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('apartment-home')
export class ApartmentHome extends LitElement {
    // Use createRenderRoot to render into the light DOM so global styles apply
    createRenderRoot() {
        return this;
    }

    protected render() {
        return html`
            <div class="apartment-home">
                <slider-component></slider-component>
                <div class="home-content-wrapper">
                    <apartment-home-content></apartment-home-content>
                </div>
            </div>
        `;
    }
}