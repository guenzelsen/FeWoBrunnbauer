import { css, html, LitElement } from "lit";
import {customElement} from "lit/decorators.js";

@customElement('apartment-home-content')
export class ApartmentHomeContent extends LitElement {
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
    `;

    render() {
        return html`
            <div class="welcome">
                <h2>Wilkommen</h2>
                <p>
                    Unser neu gestaltetes Ferienhaus liegt direkt im Ortskern von Langdorf in ruhiger und dennoch zentraler Lage.
                    Aufgeteilt in zwei separate geschmackvolle Ferienwohnungen mit jeweils 110qm Wohnfläche. 
                    Jede Wohneinheit bietet reichlich Platz für 2-5 Personen.
                </p>
                <p>
                    Diese sind aufgeteilt in eine modern ausgestattete offene Küche, Wohnzimmer, drei geräumige Schlafzimmer, Badezimmer mit Badewanne und Regendusche, große Balkone, Grillplatz im Garten.
                </p>
                <p>
                    Langdorf und seine Umgebung bietet sowohl für Aktivurlauber als auch für Erholungssuchende eine Vielzahl von Möglichkeiten - egal zu welcher Jahreszeit. Genießen Sie die traumhafte Landschaft des Bayerischen Waldes am Fuße des großen Arbers, erkunden Sie den Nationpark Bayerischer Wald oder besuchen Sie historische Städte Passau oder des UNESCO Weltkulturerbe Regensburg. 
                    Verbringen Sie schöne Tage in familiäre Atmosphäre, aber auch Zeit für sich und die Natur.
                </p>
                <p>
                    Wir, die Gastgeber Karin und Michael Brunnbauer, freuen uns darauf Sie begrüßen zu dürfen.
                </p>
                <p>
                    Rufen Sie einfach an oder kontaktieren Sie uns über E-Mail.
                </p>
            </div>
        `;
    }
}
