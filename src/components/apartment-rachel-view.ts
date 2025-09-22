import {css, html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";

@customElement('apartment-rachel-view')
export class ApartmentRachelView extends LitElement {
    @state() private selectedImage: number = 1;

    @state() private currentIndex: number  = 1

    static styles = css`
        :host {
            .pictures {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 16px;

                img {
                    width: 100%;
                    height: auto;
                    aspect-ratio: 1/1;
                    object-fit: cover;
                    display: block;
                }

                img:hover, img.active {
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
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .content {
                margin: -150px 25% 0;
                display: block;
                line-height: 1.6;
                color: #333;
                background: rgba(255, 255, 255, 0.8);
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .slider {
                padding-bottom: 2rem;
                display: block;
            }
        }
    `;


    render() {
        return html`
            <slider-component></slider-component>
            <div class="content">
                <h1>Ferienwohnung Rachelblick</h1>
                <p>In unserer neu gestalteten Ferienwohunung im EG ist für 2-5 Personen reichlich Platz vorhanden. Sie finden einen gehobenen Wohnkomfort auf 110qm Wohnfläche vor.</p>
                <p>Die Wohnung wurde im Herbst 2024 nach umfangreicher Modernisierung und Renovierung fertiggestellt.</p>
                <p>Das gemütliche Wohnzimmer mit großer Courch und Flachbildschirm Sat-TV lädt zum Verweilen ein. Der komplett ausgestattet offene Küchenbereich mit Tresen und Barhocker, Geschirrspüler, Kühlschrank, Gefrierschrank, E-Herd, Backofen, Mikrowelle, Wasserkocher, Kaffevollautomat und Toaster lässt keine Wünsche offen.</p>
                <p>Die Ferienwohnung verfügt über 3 separate moderne Schlafzimmer mit Boxspringbetten. 2 Zimmer mit Doppelbett 180x200m, 1 Zimmer mit Einzelbett 140x200m.</p>
                <p>Das geräumige Badezimmer mit ebenerdiger Dusche und Regenbrause, Badewanne, großenm Spiegel, Hand- und Badetücher runden das Gesamtbild ab.</p>
                <p>Zudem steht ein gräumiger Ostbalkon, der sich über die gesamte Hauslägne erstreckt zur Verfügung. Von dort aus können Sie über eine Treppe ddirekt in den 'Garten gelangen.</p>
                <p>Im Sommer können Sie entspannte Grillabende in unserem Garten mit Sitzmöglichkeiten verbringen. Gas- und Holzkohlegrill kann dafür bereitgestellt werden.</p>
                <p>Elektrische Rolläden in der gesamten Wohnung.</p>
                <apartment-basic-info></apartment-basic-info>
                <div class="slider">
                    <slider-component
                            sliderZIndex="5"
                            location="/images/rachel/"
                            imageHeight="750px"
                            updateIndex="${this.selectedImage}"
                            numberOfPictures="16"
                            @index-changed="${(e: CustomEvent) => this.currentIndex = e.detail.index}"
                    ></slider-component>
                </div>
                <div class="pictures">
                    ${Array.from({ length: 16 }, (_, i) => html`
                        <img class="${this.currentIndex === i + 1 ? 'active' : ''}" src="/images/rachel/${i+1}.jpg" alt="" @click="${() => {
                            this.selectedImage = i + 1;
                            this.currentIndex = i + 1;
                        }}">
                `)}
                </div>
            </div>
        `;
    }
}
