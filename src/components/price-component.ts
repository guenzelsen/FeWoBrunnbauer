import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('price-component')
export class PriceComponent extends LitElement {
    static styles = css`
        :host {
            display: block;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f9;
            padding: 2rem;
            border-radius: 8px;
            margin: 0 25%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            
            .cards {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                gap: 16px;
            }
        }
    `;

    render() {
        return html`
            <h1>Preise</h1>
            <div class="cards">
                <price-card header="Sommer" range="(01.04.-30.09.)" twoPersons="85 Euro" threeToFourPersons="105 Euro" fivePersons="115 Euro"></price-card>
                <price-card header="Winter" range="(07.01.-31.03.) & (1.10.-21.12.)" twoPersons="95 Euro" threeToFourPersons="115 Euro" fivePersons="125 Euro"></price-card>
                <price-card header="Weihnachten/Neujahr" range="(22.12.-06.01.)" twoPersons="100 Euro" threeToFourPersons="120 Euro" fivePersons="130 Euro"></price-card>
            </div>
            <p>Kinder unter 3 Jahren frei, 3-7Jahre 10 Euro pro Tag,</p>
            <p>Endreinigung 60 Euro einmalig</p>
            <p>Kurzzeitzuschlag bis 3 Nächte 20 Euro einmalig</p>
        `;
    }
}
