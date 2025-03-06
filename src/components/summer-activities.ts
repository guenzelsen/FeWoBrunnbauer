import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('summer-activities')
export class SummerActivities extends LitElement {
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
            <h1>Sommer in Langdorf</h1>
            <p>Langdorf liegt am Südhang des Großen Arbers, im Herzen des Bayerischen Waldes. Der Ort und seine Umgebung bieten eine Fülle an individuellen Freizeitmöglichkeiten – egal, ob im Frühling, im Sommer oder im Herbst. Erleben Sie die schier unendlichen Wälder und die Natur des Bayerischen Waldes beim Wandern, Mountainbiken, Nordic-Walking, Kanu fahren, Rafting, Gleitschirmfliegen u.v.m. Die Möglichkeiten scheinen fast unbegrenzt.</p>
            <p>Die bekannten Bayerwald-Gipfel Großer Arber, Osser, Falkenstein und Rachel laden zu herrlichen Gipfeltouren ein.</p>
            <h2>Der Große Arber – „König des Bayerischen Waldes“</h2>
            <p>Der Große Arber ist mit 1456m der höchste Berg des Bayerischen Waldes. Zusammen mit dem Großen und dem kleinen Arbersee ist der Große Arber eines der attraktivsten Ziele im Bayerischen Wald.</p>
            <p>Eine Wanderung zum Großen Arber – z.B. über die Rißlochfälle – ist fast schon ein Muss für jeden Urlaubsgast.</p>
            <p>Wer nicht so gut zu Fuß ist, fährt mit der Arber Gondelbahn hoch zum Gipfel und genießt den herrlichen Panoramablick.</p>
            <h2>Aktivzentrum am Bretterschachten</h2>
            <p>Im Winter eines der bekanntesten Langlaufgebiete Mitteleuropas, bietet das 1120m hoch gelegene Aktivzentrum Bodenmais am Bretterschachten auch in den warmen Jahreszeiten eine Vielzahl von Freizeitmöglichkeiten.</p>
            <p>Es ist Ausgangspunkt für herrliche Nordic-Walking, Mountainbike- und Wandertouren.</p>
            <h2>Der Silberberg</h2>
            <p>Der 955m hohe Silberberg ist der Hausberg von Bodenmais. Früher wurden hier Erze abgebaut, heute ist der Silberberg ein Freizeit-Paradies und Ausflugsziel für die ganze Familie.</p>
            <p>Die Silberberg-Sesselbahn mit der Sommerrodelbahn, der neuen Tubingbahn, dem Kinder-Klettergarten, den Abenteuer-Spielplätzen und der Silberberg-Alm bieten Freizeitspaß für Groß und Klein.</p>
            <h2>Der Nationalpark Bayerischer Wald</h2>
            <p>Erfahren Sie Natur hautnah im Nationalpark Bayerischer Wald, dem 1. Nationalpark Deutschlands.</p>
            <p>Beobachten Sie Tiere in ihrer natürlichen Umgebung und bestaunen Sie seltene Pflanzen – alles gemäß dem Leitspruch „Natur Natur sein lassen“.</p>
            <p>Dazu gibt es sehens- und erlebenswerte Besuchereinrichtungen im Nationalpark Bayerischer Wald, wie z. B. das Nationalparkzentrum Falkenstein bei Ludwigsthal mit dem Besucherzentrum Haus zur Wildnis und dem Tierfreigelände mit Steinhöhle oder Nationalpark am Lusen bei Neuschönau mit dem Hans-Eisenmann-Haus, dem großen Tierfreigelände, dem Pflanzen- und dem Gesteinsfreigelände und dem abenteuerlichen Baumwipfelpfad.</p>
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
