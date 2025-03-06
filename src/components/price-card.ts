import {css, html, LitElement} from "lit";
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

    static styles = css`
        :host {
            display: block;
            line-height: 1.6;
            color: #333;
            background-color: grey;
            padding: 8px;
            border-radius: 8px;
            margin: 2rem auto;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 350px;
            text-align: center;
        }
    `;

    render() {
        return html`
            <h4>${this.header}</h4>
            ${this.range}<br>
            2 Personen: ${this.twoPersons}<br>
            3-4 Personen: ${this.threeToFourPersons}<br>
            5 Personen: ${this.fivePersons}
        `;
    }
}