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
            margin: 2rem auto;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            
            .cards {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
            }
        }
    `;

    render() {
        return html`
            <h1>Preise</h1>
            <div class="cards">
                <price-card header="Winter 2025" range="(06.01.25-31.03.25)" twoPersons="95Euro" threeToFourPersons="115Euro" fivePersons="125Euro"></price-card>
                <price-card header="Sommer 2025" range="(01.04.25-30.09.25)" twoPersons="85Euro" threeToFourPersons="105Euro" fivePersons="115Euro"></price-card>
                <price-card header="Weihnachten/Neujahr 25/26" range="(22.12.25-04.01.26)" twoPersons="100Euro" threeToFourPersons="120Euro" fivePersons="130Euro"></price-card>
                <price-card header="Winter 2026" range="(05.01.26-31.03.26)" twoPersons="95Euro" threeToFourPersons="115Euro" fivePersons="125Euro"></price-card>
            </div>
            <p>Kinder unter 3 Jahren frei, 3-7Jahre 10Euro pro Tag,</p>
            <p>Endreinigung 60Euro einmalig</p>
        `;
    }
}
