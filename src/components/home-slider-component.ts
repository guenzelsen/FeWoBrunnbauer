import {css, html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";

@customElement('home-slider')
export class HomeSlider extends LitElement{

    @state()
    private currentIndex = 5;

    static styles = css`
        :host {
            display: flex;
            width: 100%;

            .slider-container {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .fade-out {
                opacity: 0 !important;
            }
            
            img {
                width: 100%;
                max-height: 60rem;
                display: block;
                z-index: -1;
                opacity: 1;
                transition: opacity 0.5s ease-in-out;
            }
            
            button {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 10px;
                cursor: pointer;
                font-size: 24px;
                z-index: 9999;
            }
            
            button:hover {
                background: rgba(0, 0, 0, 0.7);
            }
            
            button:first-of-type {
                left: 10px;
            }

            button:last-of-type {
                right: 10px;
            }
        }
    `;

    public shift(index: number) {
        const img = this.shadowRoot?.querySelector("img");
        if (img) {
            img.classList.add("fade-out"); // Fade out
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + index - 1 + 6) % 6 + 1; // Update image index
                img.classList.remove("fade-out"); // Fade in after update
            }, 250); // Wait for fade-out animation
        }
    }

    render(){
        return html`
            <div class="slider-container">
                <button @click="${() => this.shift(-1)}"> < </button>
                <img src="/images/start/${this.currentIndex}.jpg" alt="">
                <button @click="${() => this.shift(1)}"> > </button>
            </div>
        `
    }
}