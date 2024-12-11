import { LitElement, html } from 'lit';
import './apartment-home.scss'

export class ApartmentHome extends LitElement {
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
