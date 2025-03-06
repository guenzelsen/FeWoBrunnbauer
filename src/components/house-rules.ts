import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('house-rules')
export class HouseRules extends LitElement {
    render() {
        return html`
            <h1>Hausordnung</h1>
        `;
    }
}
