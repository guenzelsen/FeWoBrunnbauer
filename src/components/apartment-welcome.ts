import { css, html, LitElement } from "lit";

export class ApartmentWelcome extends LitElement {

    private welcomeText: string = "Unser neu gestaltetes Ferinehaus leigt direkt im Ortskern von Langdorf in ruhiger und dennoch zentraler Lage.\n" +
        "Aufgeteilt in zwei separate geschmackvolle Ferienwohnungen mit jeweils 110qm Wohnfläche.\n" +
        "Jede Wohneinheit bietet reichlich Platz für 2-5 Personen.\n" +
        "Diese sind aufgeteilt in eine modern ausgestattete offene Küche, Wohnzimmer, drei geräumige Schlafzimmer, Badezimmer mit Badewanne und Regendusche, große Balkone, Grillplatz im Garten.\n\n" +
        "Langdorf und seine Umgebung bietet sowohl für Aktivurlauber als auch für Erholungssuchende eine Vielzahl von Möglichkeiten - egal zu welcher Jahreszeit. Genießen Sie die traumhafte Landschaft " +
        "des Bayerischen Waldes am Fuße des großen Arbers, erkunden Sie den Nationpark Bayerischer Wald oder besuchen Sie historische Städte Passau oder des UNESCO Weltkulturerbe Regensburg.\n\n" +
        "Verbringen Sie schöne Tage in familiäre Atmosphäre, aber auch Zeit für sich und die Natur."

    private noteText: string = "Wir, die Gastgeber Karin und Michael Brunnbauer, freuen uns darauf Sie begrüßen zu dürfen.\n\n" +
        "Rufen Sie einfach an oder kontaktieren Sie uns über E-Mail."

    static styles = css`
        :host {
            display: block;
            background-color: #fff;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }
        .welcome {
            display: flex;
            align-items: center;
            flex-direction: row;
            width: 100%;
        }
        .welcome-left {
            width: 50%;
            padding: 0 50px;
        }
        .welcome-right {
            width: 15%;
            padding: 50px;
        }
        .apartments {
            display: flex;
            flex-direction: row;
        }
        apartment-card-first, apartment-card-second {
            width: 45%;
        }
    `;

    render() {
        return html`
            <div class="welcome">
                <div class="welcome-left">
                    <h2>Wilkommen</h2>
                    <p>${this.welcomeText}</p>
                    <p>${this.noteText}</p>
                </div>
                <div class="welcome-right">
                    <img src="/images/haus.png" alt="Welcome Image">
                </div>
            </div>
            <div class="apartments">
                <apartment-card-first></apartment-card-first>
                <apartment-card-second></apartment-card-second>
            </div>
        `;
    }
}

customElements.define('apartment-welcome', ApartmentWelcome);