import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('house-rules')
export class HouseRules extends LitElement {
    static styles = css`
    :host {
        display: block;
        text-align: center;
        line-height: 1.6;
        color: #333;
        background-color: #f4f4f9;
        padding: 2rem;
        border-radius: 8px;
        margin: 2rem auto;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        section {
            margin-bottom: 20px;
        }
        .note {
            margin-top: 100px;
        }
    }
  `;
    render() {
        return html`
            <h1>Hausordnung</h1>

            <section>
                <h2>Liebe Feriengäste,</h2>
                <p>Unsere Ferienwohnung soll Ihnen ein zweites Zuhause sein. Sie sollen sich wohlfühlen und ausruhen können. Wir haben uns mit der Einrichtung viel Mühe gegeben und hoffen, dass Sie alles vorfinden, was Sie benötigen. Die nachstehende Hausordnung soll eine Hilfestellung für einen harmonischen Aufenthalt sein. Außerdem haben wir einige Regeln aufgeführt, von denen wir hoffen, dass sie Ihr Verständnis finden. Durch eine ordentliche Behandlung der Wohnung helfen Sie uns auch in Zukunft, Ihnen und anderen Gästen zufriedenstellende Räumlichkeiten anzubieten.</p>
            </section>

            <section>
                <h2>Allgemein</h2>
                <p>Sollten Sie irgendetwas in der Einrichtung vermissen oder wenn Sie Hilfe brauchen, wenden Sie sich vertrauensvoll an uns. Sämtliche Dinge, die sich in der Ferienwohnung oder auf dem Balkon bzw. der Terrasse befinden, sind dort zuhause und sollen von den Gästen benutzt werden. Bitte gehen Sie mit der gesamten Einrichtung und dem Inventar sorgsam um und behandeln Sie das Mietobjekt pfleglich. Tragen Sie bitte Sorge dafür, dass auch Ihre Mitreisenden die Mietbedingungen einhalten.</p>
            </section>

            <section>
                <h2>Küche</h2>
                <p>Bitte gehen Sie pfleglich mit der Kücheneinrichtung und den technischen Geräten um. Da eine verschmutzte Küche niemanden erfreut, stellen Sie bitte Geschirr, Töpfe und Besteck nur in sauberem und trockenem Zustand in die Schränke. Stellen Sie heiße Töpfe und andere heiße Gegenstände bitte nicht ohne Untersetzer auf die Tische oder die Arbeitsplatte. Benutzen Sie zum Schneiden immer ein Schneidebrett als Unterlage. Hinterlassen Sie den Innenraum von Backofen und Mikrowelle bitte im sauberen Zustand.</p>
            </section>

            <section>
                <h2>Raucher</h2>
                <p>Rauchen ist in der Ferienwohnung nicht erlaubt. Auch jegliche Art von Cannabis ist im Bereich des Ferienhauses verboten. Bitte verlassen Sie zum Rauchen die Ferienwohnung oder benutzen Sie dazu den Balkon. Entsorgen Sie bitte die vollständig erkalteten Zigarettenreste in die Mülltonne.</p>
            </section>

            <section>
                <h2>Beschädigungen</h2>
                <p>Niemand beschädigt absichtlich Sachen, es kann jedoch jedem passieren, dass einmal etwas kaputt geht. Wir würden uns freuen, wenn Sie den entstandenen Schaden mitteilen und ihn nicht erst nach Ihrer Abreise bei der Endreinigung feststellen. Der Mieter haftet für Beschädigungen in Höhe der Wiederbeschaffungskosten.</p>
            </section>

            <section>
                <h2>Lüften</h2>
                <p>Wir bitten Sie, die Räume ausreichend zu lüften, mindestens 1x Stoßlüftung am Tag für 5-10 min. Bei gekippten Fenstern bitten wir Sie, die Heizung dementsprechend zu drosseln. Im Winter ausschließlich Stoßlüftung, zur Vermeidung von Schimmelbildung, drosseln Sie zudem die Heizung während des Lüftvorgangs. Im Winter bitte keine gekippten Fenster.</p>
            </section>

            <section>
                <h2>Sorgfaltspflicht</h2>
                <p>Wir bitten unsere Gäste, das Mietobjekt pfleglich zu behandeln und dafür Sorge zu tragen, dass auch Mitreisende und Angehörige die Mietbedingungen einhalten. Die Eingangstür soll grundsätzlich geschlossen sein und beim Verlassen des Hauses per Schlüssel verschlossen werden. Ebenso sind alle Fenster bei Verlassen der Wohnung zu schließen, um mögliche Schäden durch Unwetter oder Einbruch zu vermeiden. Mit den Ressourcen Wasser und Strom ist schonend umzugehen.</p>
            </section>

            <section>
                <h2>Entsorgung</h2>
                <p>Der Abfall wird nach Restmüll, Papier in der Küche sortiert. Für Glas, Dosen, Folien, Tetra Pak stehen Ihnen separate Behältnisse zur Mülltrennung zur Verfügung. Alle Mülleimer und der Kosmetikeimer im Bad bitte nur mit Mülltüten benutzen. In die Küchenspüle, der Toilette, die Waschbecken und Dusche dürfen keine Abfälle, Essensreste, schädliche Flüssigkeiten oder Ähnliches geworfen bzw. geschüttet werden! Vermeiden Sie alles, was zu Verstopfung der Leitungen führen kann (keine Hygieneartikel in die Toilette).</p>
            </section>

            <section>
                <h2>Reinigung</h2>
                <p>Sollten Ihnen mal ein Missgeschick (extremer Schmutz, Flüssigkeiten auf den Boden oder Arbeitsflächen usw.) passieren, bitten wir Sie, dies sofort zu beseitigen. Wir bitten Sie, die Ferienwohnung bei Abreise besenrein zu hinterlassen und alles benutzte Geschirr wieder sauber in die Schränke einzuräumen.</p>
            </section>

            <section>
                <h2>Internet/WLAN</h2>
                <p>In der Ferienwohnung ist ein kabelloser Internetanschluss (WLAN) vorhanden. Bitte fragen Sie uns nach dem Zugangs-Code. Die Nutzung des Internets mit Ihrem eigenen WLAN-fähigen Endgerät (Notebook, Smartphone etc.) über den WLAN-Anschluss ist für den Mieter kostenlos. Sie nutzen das Internet auf eigene Gefahr, der Vermieter schließt jede Haftung im Zusammenhang mit der Internetnutzung des Mieters aus. Für die Nutzung des Internetzugangs über WLAN sind zusätzlich die WLAN-Nutzungsregeln zu berücksichtigen. Bitte haben Sie aber Verständnis dafür, dass wir uns gegen Missbrauch mit einer Unterschrift ihrerseits absichern müssen.</p>
            </section>

            <section>
                <h2>Haustiere</h2>
                <p>Das Mitbringen von Haustieren ist nicht erlaubt.</p>
            </section>
            
            <section>
                <h2>Parkmöglichkeiten</h2>
                <p>Es kann 1 Auto direkt im Innenhof geparkt werden, ein weiterer Parkplatz kann auf Anfrage durch den Vermieter zugewiesen werden. Soweit Ihnen ein Stellplatz zur Verfügung gestellt wird, kommt dadurch kein Verwahrungsvertrag zustande. Bei Abhandenkommen oder Beschädigung auf dem Grundstück abestellter oder rangierter Kraftfarhzeuge und deren Inhalte haftet der Vermieter nicht, außer bei Vorsatz oder grober Fahrlässigkeit.</p>
            </section>
            
            <section>
                <h2>Hausrecht</h2>
                <p>Bei sofort notwendiger Reparatur kann es unerlässlich sein, dass der Vermieter die Ferienwohung ohne Wissen des Gastes betreten muss.</p>
            </section>
            
            <section>
                <h2>Schlüssel</h2>
                <p>Bitte geben Sie die Schlüssel nie aus der Hand. Ein Verlust der Schlüssel ist umgehend zu melden und der Gast haftet bis zur Höhe der Wiederbeschaffungskosten.</p>
            </section>
            
            <section>
                <h2>Kündigung</h2>
                <p>Bei mehrfachen Verstoß gegen die Mietbedingungen kann der Vermieter den Mietvertrag einseitig kündigen und der Gast hat die Ferienwohung sofort zu verlassen. Ein Anspruch auf Rückerstattung des Mietpreises besteht in diesem Falle nicht.</p>
            </section>
            
            <section>
                <h2>Haftung</h2>
                <p>Der Vermieter haftet nicht für Wertgegenstände des Gastes/der Gäste.</p>
            </section>
            
            <section>
                <h2>An- und Abreise</h2>
                <p>Die Anreise erfolgt nach Absprache. Am Abreisetag bitten wir unsere Gäste die Ferienwohnung bis spätestens 10 Uhr freizugeben. Bei Ihrer Abreise sollte die Ferienwohung wieder so aussehen, wie Sie sie vorgefunden haben. Die Endreinigung wird vom Hauseigentümer übernommen.</p>
            </section>
            
            <section class="note">
                <p>Mit der Buchung der Ferienwohnung gehen wir davon aus, dass die Hausordnung anerkannt wird.</p>
                <p>Vielen Dank für Ihre Aufmerksamkeit</p>
                <p>Wir wünschen Ihnen einen angenehmen Aufenthalt, viel Spaß, Entspannung und Erholung. Bei Fragen stehen wir Ihnen gern zur Verfügung.</p>
                <b>Ihre Gastgeber</b>
                <p><b>Familie Brunnbauer</b></p>
            </section>
        `;
    }
}
