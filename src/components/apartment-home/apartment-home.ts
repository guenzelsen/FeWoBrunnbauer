import {LitElement, html, css} from 'lit';

export class ApartmentHome extends LitElement {
    static styles = css`
        :host {
            display: block;
            background-color: #fff;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 900px;
            margin: 0 auto;
        }
        .image-container img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .details h2 {
            margin-top: 0;
        }
        .details p {
            margin: 8px 0;
        }
    `;

    render() {
        return html`
      <h2>Modern Apartment in the Heart of the City</h2>
      <div class="details">
        <h2>About This Apartment</h2>
        <p>This stylish, modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living area. It’s located in the heart of the city, close to restaurants, shopping, and public transport.</p>
      </div>
    `;
    }
}

customElements.define('apartment-home', ApartmentHome);
