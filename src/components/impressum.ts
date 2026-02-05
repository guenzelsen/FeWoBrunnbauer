import { LitElement, html } from 'lit';
import { customElement } from "lit/decorators.js";

@customElement('impressum-component')
export class Impressum extends LitElement {
    // Use createRenderRoot to render into the light DOM so global styles apply
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
      <div class="content-page">
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
          <p>Steuernummer: 170/207/91470</p>
          <br>
          <p>Gerne können Sie auch telefonisch bei uns buchen, rufen Sie uns an unter Tel. 09921/959790 oder Mobil. 0151/28991796.</p>
          <p>Wir möchten Ihnen das Buchen oder Anfrage so einfach und schnell wie möglich anbieten, deshalb verzichten wir auf ein Kontaktformular.</p>
          <p>Zögern Sie nicht und rufen Sie uns an, wir werden alle Ihre Fragen beantworten.<br></p>
          <br>
          <p>Wir freuen uns auf Ihre Nachricht oder Anruf.</p>
          <br>
          <p>Ihre Familie Brunnbauer</p>
      </div>
    `;
    }
}
