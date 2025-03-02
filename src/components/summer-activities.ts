import {html, LitElement} from "lit";

export class SummerActivities extends LitElement {
    private description: string = "Langdorf liegt am Südhang des Großen Arbers, im Herzen des Bayerischen Waldes. " +
        "Der Ort und seine Umgebung bieten eine Fülle an individuellen Freizeitmöglichkeiten – egal, ob im Frühling, im Sommer oder im Herbst. " +
        "Erleben Sie die schier unendlichen Wälder und die Natur des Bayerischen Waldes beim Wandern, Mountainbiken, Nordic-Walking, Kanu fahren, Rafting, Gleitschirmfliegen u.v.m. " +
        "Die Möglichkeiten scheinen fast unbegrenzt.\n" +
        "Die bekannten Bayerwald-Gipfel Großer Arber, Osser, Falkenstein und Rachel laden zu herrlichen Gipfeltouren ein."

    private arberText: string = "Der Große Arber ist mit 1456m der höchste Berg des Bayerischen Waldes. " +
        "Zusammen mit dem Großen und dem kleinen Arbersee ist der Große Arber eines der attraktivsten Ziele im Bayerischen Wald.\n" +
        "Eine Wanderung zum Großen Arber – z.B. über die Rißlochfälle – ist fast schon ein Muss für jeden Urlaubsgast.\n" +
        "Wer nicht so gut zu Fuß ist, fährt mit der Arber Gondelbahn hoch zum Gipfel und genießt den herrlichen Panoramablick.";

    private bretterschachtenText: string = "Im Winter eines der bekanntesten Langlaufgebiete Mitteleuropas, bietet das 1120m hoch gelegene Aktivzentrum Bodenmais am Bretterschachten auch in den warmen Jahreszeiten eine Vielzahl von Freizeitmöglichkeiten.\n" +
        "Es ist Ausgangspunkt für herrliche Nordic-Walking, Mountainbike- und Wandertouren.";

    private silberbergText: string = "Der 955m hohe Silberberg ist der Hausberg von Bodenmais. Früher wurden hier Erze abgebaut, heute ist der Silberberg ein Freizeit-Paradies und Ausflugsziel für die ganze Familie.\n" +
        "Die Silberberg-Sesselbahn mit der Sommerrodelbahn, der neuen Tubingbahn, dem Kinder-Klettergarten, den Abenteuer-Spielplätzen und der Silberberg-Alm bieten Freizeitspaß für Groß und Klein.";

    private bayerischerWaldText: string = "Erfahren Sie Natur hautnah im Nationalpark Bayerischer Wald, dem 1. Nationalpark Deutschlands.\n" +
        "Beobachten Sie Tiere in ihrer natürlichen Umgebung und bestaunen Sie seltene Pflanzen – alles gemäß dem Leitspruch „Natur Natur sein lassen“.\n" +
        "Dazu gibt es sehens- und erlebenswerte Besuchereinrichtungen im Nationalpark Bayerischer Wald, wie z. B. das Nationalparkzentrum Falkenstein bei Ludwigsthal mit dem Besucherzentrum Haus zur Wildnis und dem Tierfreigelände mit Steinhöhle oder Nationalpark am Lusen bei Neuschönau mit dem Hans-Eisenmann-Haus, dem großen Tierfreigelände, dem Pflanzen- und dem Gesteinsfreigelände und dem abenteuerlichen Baumwipfelpfad.";

    render() {
        return html`
            <h1>Sommer in Langdorf</h1>
            <p>${this.description}</p>
            <h2>Der Große Arber – „König des Bayerischen Waldes“</h2>
            <p>${this.arberText}</p>
            <h2>Aktivzentrum am Bretterschachten</h2>
            <p>${this.bretterschachtenText}</p>
            <h2>Der Silberberg</h2>
            <p>${this.silberbergText}</p>
            <h2>Der Nationalpark Bayerischer Wald</h2>
            <p>${this.bayerischerWaldText}</p>
            <h2>Nähere Informationen und weitere Freizeitmöglichkeiten</h2>
            <ul>
                <li>Langdorfer Aussichtsturm</li>
                <li>Rißlochfälle Bodenmais</li>
                <li>Baumwipfelpfad Neuschönau, St. Englmar</li>
                <li>Schwellhäusl</li>
                <li>Arbersee</li>
                <li>Joska Glasparadies</li>
                <li>Glasdorf Weinfurtner</li>
                <li>Pullman City Eging am See</li>
                <li>Bikepark Geisskopf</li>
                <li>Freibad Regen</li>
                <li>Freibad Bodenmais</li>
            </ul>
        `;
    }
}

customElements.define('summer-activities', SummerActivities)