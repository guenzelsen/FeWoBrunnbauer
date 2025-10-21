import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("apartment-home-content")
export class ApartmentHomeContent extends LitElement {
  @state() private selectedImage: string | null = null;

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.8);
    }

    .welcome {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .pictures {
      align-content: center;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        display: block;
      }

      img:hover {
        transform: scale(1.1);
      }
    }

    /* Modal styling */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    .modal .image-container {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      max-width: 60%;
      max-height: 80%;
    }

    .modal img {
      display: block;
      max-width: 50%;
      max-height: 50%;
      width: 50%;
      height: 50%;
      border-radius: 10px;
      animation: fadeIn 0.3s ease-in-out;
    }

    .modal .close-btn {
      position: absolute;
      top: 20px;
      right: 400px;
      background: white;
      color: black;
      font-size: 24px;
      border: none;
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      transition: background 0.2s;
    }

    .modal .close-btn:hover {
      background: red;
      color: white;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

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
              alt=""
              @click="${() => this.openImage(`/images/start/0${i}.avif`)}"
            />
          `,
        )}
      </div>

      ${this.selectedImage
        ? html`
            <div class="modal" @click="${this.closeImage}">
              <div class="image-container">
                <img src="${this.selectedImage}" alt="" />
              </div>
            </div>
          `
        : null}
    `;
  }
}
