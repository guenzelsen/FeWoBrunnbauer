import {html, LitElement} from "lit";

export class ApartmentBasicInfo extends LitElement {
    private basicInfo: string = "Zum Reinigen Ihrer Kleidung steht eine Waschmaschine und Wäscheständer gegen kleinen Aufpreis zur Verfügung.\n\n" +
        "NICHTRAUCHERWOHNUNG: (Auf dem Balkon oder im Freien kann selbstverständlich graucht werden)\n" +
        "Der Konsum und die Mitnahme jeglicher Art von Cannabis ist auf dem Breich des Ferienhauses und in der Ferienwohnung einschließlich der Ausßenbereiche verboten.\n" +
        "WLAN und Parkplätze stehen Ihnen kostenfrei zur Verfügung."

    private travelInfo: string = "Anreise ist von 14:00Uhr bis 21:00Uhr möglich.\n" +
        "Abreise ist von 07:00Uhr bis spätestens 10:00Uhr möglich.\n" +
        "Andere An- und Abreisezeiten sind nach Rücksprache möglich.\n" +
        "Die Schlüsselübergabe erfolgt persönlich vor Ort."

    private priceInfo: string = "Folgende Nebenkosten: Strom, Wasser, Bettwäsche, Handtücher, Heizung, gesetzliche Mehrwertsteuer\n" +
        "Kostenlosen WLAN-Zugang\n" +
        "Kinderhochstuhl, Kinderreisebett, Tritt fürs Waschbecken auf Anfrage\n" +
        "Ski-/Radunterstellraum\n" +
        "Schlittenverleih";

    render() {
        return html`
            <p>${this.basicInfo}</p>
            <h3>An- und Abreise:</h3>
            <p>${this.travelInfo}</p>
            <h3>Unsere Preise beinhalten:</h3>
            <p>${this.priceInfo}</p>
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

customElements.define('apartment-basic-info', ApartmentBasicInfo);