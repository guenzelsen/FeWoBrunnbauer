import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('winter-activities')
export class WinterActivities extends LitElement {
    static styles = css`
        :host {
            display: block;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f9;
            padding: 2rem;
            border-radius: 8px;
            margin: 0 25%;
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
            <h1>Winter in Langdorf</h1>
            <p>Langdorf und seine Umgebung bieten eine Vielzahl von Wintersportmöglichkeiten.</p>
            <h2>Flutlichtloipe Langdorf</h2>
            <p>Diese 1,1 km lange Langlaufloipe eignet sich hervorragend als Übungs- und Trainingsrunde und ist sowohl für Diagonal- als auch für Skatingtechnik präpariert. Längere, bestens präparierte Loipen befinden sich in der näheren Umgebung.</p>
            <h2>Skigebiet Silberberg</h2>
            <p>Praktisch vor der Haustür lockt das familienfreundliche Skigebiet Silberberg mit dem Kinder-Skipark – ideal für die ersten Steh- und Rutschversuche auf zwei Brettern.</p>
            <h2>Familienspaß Großer Arber</h2>
            <div class="textWithPic">
                <p>Der 1456 m hohe Große Arber bietet ausgedehnte Abfahrten in allen Schwierigkeitsgraden. Eine moderne Gondelbahn, zwei 6er-Sesselbahnen und mehrere Schlepplifte bringen große und kleine Skifahrer sowie Snowboarder, Skitourengeher und Besucher in wenigen Minuten hinein ins Skivergnügen.</p>
                <img src="/images/winter/1.jpg" alt="">
            </div>
            <div class="textWithPic">
                <p>Das Loipennetz im Aktivzentrum Bodenmais am Bretterschachten zählt zu den besten und schneesichersten Skilanglaufgebieten in Mitteleuropa. 114 Loipenkilometer für die klassische Technik und 110 km für die Skating-Technik bieten auf einer Höhe zwischen 1100 und 1300 Metern Laufspaß pur.</p>
                <img src="/images/winter/4.jpg" alt="">
            </div>
            <h2>Schneeschuhtouren</h2>
            <div class="textWithPic">
                <p>Erleben Sie den unberührten Winterwald, Natur und glitzernden Schnee auf einer Schneeschuhtour durch das Winterwonderland rund um Langdorf. Vorkenntnisse sind nicht erforderlich.</p>
                <img src="/images/winter/3.jpg" alt="">
            </div>
            <h2>Winterrodelbahnen</h2>
            <p>Die Winterrodelbahn direkt im Dorf oder am Silberberg bietet Rodelspaß pur.</p>
            <h2>Eishalle Regen</h2>
            <p>Die Eishalle Regen bietet im Winter für Familien Freizeitspaß für Groß und Klein.</p>
            <p>Der Öffenltich eislauf ist ein Spaß für die ganze Familie. Egal, ob es draußen regnet oder die Sonne scheint, hier kann man sich jeden Dienstag, Mittwoch und Sonntag so richtig austoben.</p>
            <h2>Nähere Informationen und weitere Freizeitmöglichkeiten:</h2>
            <ul>
                <li>Hallenbad Aquacur Bad Kötzing</li>
                <li>Hallenbad und Bayerwaldsauna Zwiesel</li>
                <li>Hallenbad Elypso Deggendorf</li>
                <li>Joska Glasparadis</li>
                <li>Glasdorf Weinfurtner</li>
            </ul>
        `;
    }
}
