import {html, LitElement} from "lit";

export class WinterActivities extends LitElement {
    private langdorfText: string = "Diese 1,1 km lange Langlaufloipe eignet sich hervorragend als Übungs- und Trainingsrunde und ist sowohl für Diagonal- als auch für Skatingtechnik präpariert. " +
        "Längere, bestens präparierte Loipen befinden sich in der näheren Umgebung.";

    private silberbergText: string = "Praktisch vor der Haustür lockt das familienfreundliche Skigebiet Silberberg mit dem Kinder-Skipark – ideal für die ersten Steh- und Rutschversuche auf zwei Brettern.";

    private arberText: string = "Der 1456 m hohe Große Arber bietet ausgedehnte Abfahrten in allen Schwierigkeitsgraden. " +
        "Eine moderne Gondelbahn, zwei 6er-Sesselbahnen und mehrere Schlepplifte bringen große und kleine Skifahrer sowie Snowboarder, Skitourengeher und Besucher in wenigen Minuten hinein ins Skivergnügen.\n" +
        "Das Loipennetz im Aktivzentrum Bodenmais am Bretterschachten zählt zu den besten und schneesichersten Skilanglaufgebieten in Mitteleuropa." +
        "114 Loipenkilometer für die klassische Technik und 110 km für die Skating-Technik bieten auf einer Höhe zwischen 1100 und 1300 Metern Laufspaß pur.";

    private snowshoeText: string = "Erleben Sie den unberührten Winterwald, Natur und glitzernden Schnee auf einer Schneeschuhtour durch das Winterwonderland rund um Langdorf. Vorkenntnisse sind nicht erforderlich.";

    private stadiumText: string = "Die Eishalle Regen bietet im Winter für Familien Freizeitspaß für Groß und Klein.\n" +
        "Der Öffenltich eislauf ist ein Spaß für die ganze Familie. Egal, ob es draußen regnet oder die Sonne scheint, hier kann man sich jeden Dienstag, Mittwoch und Sonntag so richtig austoben.";

    render() {
        return html`
            <h1>Winter in Langdorf</h1>
            <p>Langdorf und seine Umgebung bieten eine Vielzahl von Wintersportmöglichkeiten.</p>
            <h2>Flutlichtloipe Langdorf</h2>
            <p>${this.langdorfText}</p>
            <h2>Skigebiet Silberberg</h2>
            <p>${this.silberbergText}</p>
            <h2>Familienspaß Großer Arber</h2>
            <p>${this.arberText}</p>
            <h2>Schneeschuhtouren</h2>
            <p>${this.snowshoeText}</p>
            <h2>Winterrodelbahnen</h2>
            <p>Die Winterrodelbahn direkt im Dorf oder am Silberberg bietet Rodelspaß pur.</p>
            <h2>Eishalle Regen</h2>
            <p>${this.stadiumText}</p>
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

customElements.define("winter-activities", WinterActivities)