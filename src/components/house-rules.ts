import {html, LitElement} from "lit";

export class HouseRules extends LitElement {
    render() {
        return html`
            <h1>Hausordnung</h1>
        `;
    }
}

customElements.define('house-rules', HouseRules);