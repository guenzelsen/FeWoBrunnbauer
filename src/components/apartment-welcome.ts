import { css, html, LitElement } from "lit";

export class ApartmentWelcome extends LitElement {
    static styles = css`
        :host {
            display: block;
            background-color: #fff;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }
        .welcome {
            display: flex;
            align-items: center;
            flex-direction: row;
            width: 100%;
        }
        .welcome-left {
            width: 50%;
            padding: 0 50px;
        }
        .welcome-right {
            width: 15%;
            padding: 50px;
        }
        .apartments {
            display: flex;
            flex-direction: row;
        }
        apartment-card-first, apartment-card-second {
            width: 45%;
        }
    `;

    render() {
        return html`
            <div class="welcome">
                <div class="welcome-left">
                    <h2>Wilkommen</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="welcome-right">
                    <img src="/images/haus.png" alt="Welcome Image">
                </div>
            </div>
            <div class="apartments">
                <apartment-card-first></apartment-card-first>
                <apartment-card-second></apartment-card-second>
            </div>
        `;
    }
}

customElements.define('apartment-welcome', ApartmentWelcome);