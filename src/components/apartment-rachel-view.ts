import {css, html, LitElement} from "lit";

export class ApartmentRachelView extends LitElement {
    private description: string = "In unserer neu gestalteten Ferienwohunung im EG ist für 2-5 Personen reichlich Platz vorhanden. Sie finden einen gehobenen Wohnkomfort auf 110qm Wohnfläche vor.\n" +
        "Die Wohnung wurde im Herbst 2024 nach umfangreicher Modernisierung und Renovierung fertiggestellt.\n\n" +
        "Das gemütliche Wohnzimmer mit großer Courch und Flachbildschirm Sat-TV lädt zum Verweilen ein. Der komplett ausgestattet offene Küchenbereich mit Tresen und Barhocker, Geschirrspüler, Kühlschrank, Gefrierschrank, E-Herd, Backofen, Mikrowelle, Wasserkocher, Kaffevollautomat und Toaster lässt keine Wünsche offen.\n\n" +
        "Die Ferienwohnung verfügt über 3 separate moderne Schlafzimmer mit Boxspringbetten. 2 Zimmer mit Doppelbett 180x200m, 1 Zimmer mit Einzelbett 140x200m.\n\n" +
        "Das geräumige Badezimmer mit ebenerdiger Dusche und Regenbrause, Badewanne, großenm Spiegel, Hand- und Badetücher runden das Gesamtbild ab.\n\n" +
        "Zudem steht ein gräumiger Ostbalkon, der sich über die gesamte Hauslägne erstreckt zur Verfügung. Von dort aus können Sie über eine Treppe ddirekt in den 'Garten gelangen.\n" +
        "Im Sommer können Sie entspannte Grillabende in unserem Garten mit Sitzmöglichkeiten verbringen. Gas- und Holzkohlegrill kann dafür bereitgestellt werden.\n\n" +
        "Elektrische Rolläden in der gesamten Wohnung."

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
    `;

    render() {
        return html`
            <h1>Ferienwohnung Gartenblick</h1>
            <p>${this.description}</p>
            <apartment-basic-info></apartment-basic-info>
        `;
    }
}

customElements.define('apartment-rachel-view', ApartmentRachelView);