import { LitElement, html, css } from 'lit';

export class Impressum extends LitElement {
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

    h2 {
      margin-top: 1.5rem;
      color: #555;
    }

    p, 
    address {
      margin: 0.5rem 0;
    }

    a {
      color: #4CAF50;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `;

    render() {
        return html`
      <h2>Kontaktinformationen</h2>
      <address>
        <strong>Name:</strong> Max Mustermann<br>
        <strong>Adresse:</strong> Example Street 42, 12345 Berlin, Germany<br>
        <strong>Telefon:</strong> <a href="tel:+491234567890">+49 123 456 7890</a><br>
        <strong>Email:</strong> <a href="mailto:info@dreamapartments.de">info@dreamapartments.de</a><br>
      </address>
    `;
    }
}

customElements.define('impressum-component', Impressum);