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

            .textWithPic {
                display: flex;
                flex-direction: row;
                align-items: center;
                img {
                    min-width: 150px;
                    min-height: 150px;
                    height: 150px;
                    width: 150px;
                    padding: 20px;
                }
            }
        }
    `;

    render() {
        return html`
            <h1>Sommer in Langdorf</h1>
            <div class="textWithPic">
                <div>
                    <p>Langdorf liegt am Südhang des Großen Arbers, im Herzen des Bayerischen Waldes. Der Ort und seine Umgebung bieten eine Fülle an individuellen Freizeitmöglichkeiten – egal, ob im Frühling, im Sommer oder im Herbst. Erleben Sie die schier unendlichen Wälder und die Natur des Bayerischen Waldes beim Wandern, Mountainbiken, Nordic-Walking, Kanu fahren, Rafting, Gleitschirmfliegen u.v.m. Die Möglichkeiten scheinen fast unbegrenzt.</p>
                    <p>Die bekannten Bayerwald-Gipfel Großer Arber, Osser, Falkenstein und Rachel laden zu herrlichen Gipfeltouren ein.</p>
                </div>
                <img src="/images/summer/2.jpg" alt="">
            </div>
            <h2>Der Große Arber – „König des Bayerischen Waldes“</h2>
            <p>Der Große Arber ist mit 1456m der höchste Berg des Bayerischen Waldes. Zusammen mit dem Großen und dem kleinen Arbersee ist der Große Arber eines der attraktivsten Ziele im Bayerischen Wald.</p>
            <div class="textWithPic">
                <p>Eine Wanderung zum Großen Arber – z.B. über die Rißlochfälle – ist fast schon ein Muss für jeden Urlaubsgast.</p>
                <img src="/images/summer/1.jpg" alt="">
            </div>
            <div class="textWithPic">
                <img src="/images/summer/0.jpg" alt="">
                <p>Wer nicht so gut zu Fuß ist, fährt mit der Arber Gondelbahn hoch zum Gipfel und genießt den herrlichen Panoramablick.</p>
            </div>
            <h2>Aktivzentrum am Bretterschachten</h2>
            <div class="textWithPic">
                <p>
                    Im Winter eines der bekanntesten Langlaufgebiete Mitteleuropas, bietet das 1120m hoch gelegene Aktivzentrum Bodenmais am Bretterschachten auch in den warmen Jahreszeiten eine Vielzahl von Freizeitmöglichkeiten.
                    Es ist Ausgangspunkt für herrliche Nordic-Walking, Mountainbike- und Wandertouren.
                </p>
                <img src="/images/summer/6.jpg" alt="">
            </div>
            <h2>Der Silberberg</h2>
            <div class="textWithPic">
                <p>
                    Der 955m hohe Silberberg ist der Hausberg von Bodenmais. Früher wurden hier Erze abgebaut, heute ist der Silberberg ein Freizeit-Paradies und Ausflugsziel für die ganze Familie. 
                    Die Silberberg-Sesselbahn mit der Sommerrodelbahn, der neuen Tubingbahn, dem Kinder-Klettergarten, den Abenteuer-Spielplätzen und der Silberberg-Alm bieten Freizeitspaß für Groß und Klein.
                </p>
                <img src="/images/summer/3.jpg" alt=""></img>
            </div>
            <h2>Der Nationalpark Bayerischer Wald</h2>
            <p>Erfahren Sie Natur hautnah im Nationalpark Bayerischer Wald, dem 1. Nationalpark Deutschlands.</p>
            <div class="textWithPic">
                <p>Beobachten Sie Tiere in ihrer natürlichen Umgebung und bestaunen Sie seltene Pflanzen – alles gemäß dem Leitspruch „Natur Natur sein lassen“.</p>
            </div>
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
