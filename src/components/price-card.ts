import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement('price-card')
export class PriceCard extends LitElement {
    @property({ type: String })
    public header: string = "";

    @property({ type: String })
    public range: string = "";

    @property({ type: String })
    public twoPersons: string = "";

    @property({ type: String })
    public threeToFourPersons: string = "";

    @property({ type: String })
    public fivePersons: string = "";

    // Use createRenderRoot to render into the light DOM so global styles apply
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="price-card">
                <h4>${this.header}</h4>
                ${this.range}<br>
                2 Personen: ${this.twoPersons}<br>
                3-4 Personen: ${this.threeToFourPersons}<br>
                5 Personen: ${this.fivePersons}
            </div>
        `;
    }
}