import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("apartment-rachel-view")
export class ApartmentRachelView extends LitElement {
  @state() private selectedImage: number = 1;

  @state() private currentIndex: number = 1;

  // Use createRenderRoot to render into the light DOM so global styles apply
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="apartment-view">
        <slider-component></slider-component>
        <div class="content">
          <h1>Ferienwohnung Rachelblick</h1>
          <p>
            In unserer neu gestalteten Ferienwohnung im EG ist für 2-5 Personen
            reichlich Platz vorhanden. Sie finden einen gehobenen Wohnkomfort auf
            110qm Wohnfläche vor.
          </p>
          <p>
            Die Wohnung wurde im Herbst 2024 nach umfangreicher Modernisierung und
            Renovierung fertiggestellt.
          </p>
          <p>
            Das gemütliche Wohnzimmer mit großer Couch und Flachbildschirm Sat-TV
            lädt zum Verweilen ein. Der komplett ausgestattet offene Küchenbereich
            mit Tresen und Barhocker, Geschirrspüler, Kühlschrank, Gefrierschrank,
            E-Herd, Backofen, Mikrowelle, Wasserkocher, Kaffeevollautomat und
            Toaster lässt keine Wünsche offen.
          </p>
          <p>
            Die Ferienwohnung verfügt über 3 separate moderne Schlafzimmer mit
            Boxspringbetten. 2 Zimmer mit Doppelbett 180x200m, 1 Zimmer mit
            Einzelbett 140x200m.
          </p>
          <p>
            Das geräumige Badezimmer mit ebenerdiger Dusche und Regenbrause,
            Badewanne, großen Spiegel, Hand- und Badetücher runden das Gesamtbild
            ab.
          </p>
          <p>
            Zudem steht ein geräumiger Ostbalkon, der sich über die gesamte
            Hauslänge erstreckt zur Verfügung. Von dort aus können Sie über eine
            Treppe direkt in den Garten gelangen.
          </p>
          <p>
            Im Sommer können Sie entspannte Grillabende in unserem Garten mit
            Sitzmöglichkeiten verbringen. Gas- und Holzkohlegrill kann dafür
            bereitgestellt werden.
          </p>
          <p>Elektrische Rolläden in der gesamten Wohnung.</p>
          <apartment-basic-info></apartment-basic-info>
          <div class="slider">
            <slider-component
              location="/images/rachel/"
              imageHeight="750px"
              updateIndex="${this.selectedImage}"
              numberOfPictures="16"
              imageExtension="avif"
              @index-changed="${(e: CustomEvent) =>
                (this.currentIndex = e.detail.index)}"
            ></slider-component>
          </div>
          <div class="pictures">
            ${Array.from(
              { length: 16 },
              (_, i) => html`
                <img
                  class="${this.currentIndex === i + 1 ? "active" : ""}"
                  src="/images/rachel/${i + 1}.avif"
                  alt="Rachelblick Bild ${i + 1}"
                  @click="${() => {
                    this.selectedImage = i + 1;
                    this.currentIndex = i + 1;
                  }}"
                />
              `,
            )}
          </div>
        </div>
      </div>
    `;
  }
}
