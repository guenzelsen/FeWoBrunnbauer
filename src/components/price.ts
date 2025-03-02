import {html, LitElement} from "lit";

export class Price extends LitElement {
    render() {
        return html`
            <h1>Preise</h1>
        `;
    }
}

customElements.define('price', Price);