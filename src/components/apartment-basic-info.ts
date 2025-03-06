import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('apartment-basic-info')
export class ApartmentBasicInfo extends LitElement {
    render() {
        return html`
            <p>Zum Reinigen Ihrer Kleidung steht eine Waschmaschine und Wäscheständer gegen kleinen Aufpreis zur Verfügung.</p>
            <p>NICHTRAUCHERWOHNUNG: (Auf dem Balkon oder im Freien kann selbstverständlich graucht werden)</p>
            <p>Der Konsum und die Mitnahme jeglicher Art von Cannabis ist auf dem Breich des Ferienhauses und in der Ferienwohnung einschließlich der Ausßenbereiche verboten.</p>
            <p>WLAN und Parkplätze stehen Ihnen kostenfrei zur Verfügung.</p>
            <h3>An- und Abreise:</h3>
            <p>Anreise ist von 14:00Uhr bis 21:00Uhr möglich.</p>
            <p>Abreise ist von 07:00Uhr bis spätestens 10:00Uhr möglich.</p>
            <p>Andere An- und Abreisezeiten sind nach Rücksprache möglich.</p>
            <p>Die Schlüsselübergabe erfolgt persönlich vor Ort.</p>
            <h3>Unsere Preise beinhalten:</h3>
            <p>Folgende Nebenkosten: Strom, Wasser, Bettwäsche, Handtücher, Heizung, gesetzliche Mehrwertsteuer</p>
            <p>Kostenlosen WLAN-Zugang</p>
            <p>Kinderhochstuhl, Kinderreisebett, Tritt fürs Waschbecken auf Anfrage</p>
            <p>Ski-/Radunterstellraum</p>
            <p>Schlittenverleih</p>
            <h3>Endreinigung</h3>
            <p>Gebühr wird separat erhoben</p>
            <h3>Aufenthaltsgebühr</h3>
            <p>Gebühr wird separat erhoben</p>
            <h3>Haustiere</h3>
            <p>Bitte haben Sie Verständnis, dass wir leider keine Haustiere aufnehmen können</p>
            <h3>Storno</h3>
            <p>Storno klingt unangenehm und ist es auch - für Sie wie für uns. Bitte schließen Sie bei Bedarf eine Reiserücktrittsversicherung ab</p>
        `;
    }
}