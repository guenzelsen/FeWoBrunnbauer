import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("apartment-home-content")
export class ApartmentHomeContent extends LitElement {
  @state() private selectedImage: string | null = null;

  // Use createRenderRoot to render into the light DOM so global styles apply
  createRenderRoot() {
    return this;
  }

  /** Opens the modal with the selected image */
  private openImage(src: string) {
    this.selectedImage = src;
  }

  /** Closes the modal */
  private closeImage() {
    this.selectedImage = null;
  }

  render() {
    return html`
      <div class="home-content">
        <div class="welcome">
          <h2>Wilkommen</h2>
          <p>
            Unser neu gestaltetes Ferienhaus liegt direkt im Ortskern von Langdorf
            in ruhiger und dennoch zentraler Lage. Aufgeteilt in zwei separate
            geschmackvolle Ferienwohnungen mit jeweils 110qm Wohnfläche. Jede
            Wohneinheit bietet reichlich Platz für 2-5 Personen.
          </p>
          <p>
            Diese sind aufgeteilt in eine modern ausgestattete offene Küche,
            Wohnzimmer, drei geräumige Schlafzimmer, Badezimmer mit Badewanne und
            Regendusche, große Balkone, Grillplatz im Garten.
          </p>
          <p>
            Langdorf und seine Umgebung bietet sowohl für Aktivurlauber als auch
            für Erholungssuchende eine Vielzahl von Möglichkeiten - egal zu
            welcher Jahreszeit. Genießen Sie die traumhafte Landschaft des
            Bayerischen Waldes am Fuße des großen Arbers, erkunden Sie den
            Nationpark Bayerischer Wald oder besuchen Sie historische Städte
            Passau oder des UNESCO Weltkulturerbe Regensburg. Verbringen Sie
            schöne Tage in familiäre Atmosphäre, aber auch Zeit für sich und die
            Natur.
          </p>
          <p>
            Wir, die Gastgeber Karin und Michael Brunnbauer, freuen uns darauf Sie
            begrüßen zu dürfen.
          </p>
          <p>Rufen Sie einfach an oder kontaktieren Sie uns über E-Mail.</p>
        </div>
        <div class="pictures">
          ${Array.from(
            { length: 4 },
            (_, i) => html`
              <img
                src="/images/start/0${i}.avif"
                alt="Startseite Bild ${i + 1}"
                @click="${() => this.openImage(`/images/start/0${i}.avif`)}"
              />
            `,
          )}
        </div>

        ${this.selectedImage
          ? html`
              <div class="modal" @click="${this.closeImage}">
                <div class="image-container">
                  <img src="${this.selectedImage}" alt="Vergrößerte Ansicht" />
                </div>
              </div>
            `
          : null}
      </div>
    `;
  }
}
