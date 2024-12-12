import {css, html, LitElement} from "lit";

export class ApartmentCardFirst extends LitElement {
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
        }
        
        .card {
            display: flex;
            img {
                width: 50%;
            }
        }
    `;

    render() {
        return html`
           <h1>Wohung 1</h1>
           <div class="card">
               <img src="/images/haus.png" alt="Wohnung">
               <ul>
                   <li>Punkt 1</li>
                   <li>Punkt 2</li>
                   <li>Punkt 3</li>
               </ul>
           </div>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        `;
    }
}

customElements.define('apartment-card-first', ApartmentCardFirst);