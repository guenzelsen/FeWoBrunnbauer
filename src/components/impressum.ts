import { LitElement, html, css } from 'lit';
import {customElement} from "lit/decorators.js";

@customElement('impressum-component')
export class Impressum extends LitElement {
    static styles = css`
    :host {
      display: block;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f9;
      padding: 2rem;
      border-radius: 8px;
        margin: 0 50rem;
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
      <h2>Kontakt:</h2>
      <p>Unsere E-Mail-Adressen:</p>
      <a href="mailto:Fwh.gartenblick@gmail.com">Fwh.gartenblick@gmail.com</a>
      <br>
      <a href="mailto:Fwh.rachelblick@gmail.com">Fwh.rachelblick@gmail.com</a>
      <br>
      <br>
      <p>Unsere Adresse:</p>
      <address>
          <p>Ferienhaus Brunnbauer</p>
          <p>Regenerstraße 11</p>
          <p>94264 Langdorf</p>
      </address>
      <br>
      <p>Gerne können Sie auch telefonisch bei uns buchen, rufen Sie uns an unter Tel. 09921/959790 oder Mobil. 0151/28991796.</p>
      <p>Wir möchten Ihnen das Buchen oder Anfrage so einfach und schnell wie möglich anbieten, deshalb verzichten wir auf ein Kontaktformular.</p>
      <p>Zögern Sie nicht und rufen Sie uns an, wir werden alle Ihre Fragen beantworten.<br></p>
      <br>
      <p>Wir freuen uns auf Ihre Nachricht oder Anruf.</p>
      <br>
      <p>Ihre Familie Brunnbauer</p>
    `;
    }
}
