import {css, html, LitElement} from "lit";
import {customElement, property, state} from "lit/decorators.js";

@customElement('slider-component')
export class SliderComponent extends LitElement{

    @property({ type: Number})
    private updateIndex = 5;

    @property({ type: String })
    private location = "/images/start/"

    @property({ type: Number})
    private sliderZIndex = -1;

    @property({ type: String })
    private imageHeight = "60rem"

    @property({ type: Number})
    private numberOfPictures = 6

    @property({ type: String })
    private imageExtension = "avif";

    @state()
    private fading = false;

    @state()
    private currentIndex = 5

    private pendingIndex: number | null = null;

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
                display: block;
                opacity: 1;
                transition: opacity 0.2s ease-in-out;
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

    private changeImage(newIndex: number) {
        if (this.fading) return; // prevent overlapping animations
        this.fading = true;
        this.pendingIndex = newIndex;

        const nextImageSrc = `${this.location}${newIndex}.${this.imageExtension}`;
        const imgLoader = new Image();
        imgLoader.src = nextImageSrc;

        // Wait for both the fade-out animation (200ms) AND the image to load
        const animationPromise = new Promise(resolve => setTimeout(resolve, 200));
        const loadPromise = new Promise(resolve => {
            imgLoader.onload = resolve;
            imgLoader.onerror = resolve; // proceed even on error to avoid getting stuck
        });

        Promise.all([animationPromise, loadPromise]).then(() => {
            this.currentIndex = this.pendingIndex!;
            this.pendingIndex = null;
            this.fading = false;
        });
    }

    public shift(step: number) {
        const newIndex = (this.currentIndex + step - 1 + this.numberOfPictures) % this.numberOfPictures + 1;
        this.dispatchEvent(new CustomEvent('index-changed', {
            detail: { index: newIndex },
            bubbles: true, // so it travels up the DOM tree
            composed: true // so it crosses shadow DOM boundary
        }));
        this.changeImage(newIndex);
    }

    updated(changedProps: Map<string, unknown>) {
        if (changedProps.has("updateIndex") && this.pendingIndex === null) {
            // external change → run fade flow
            this.changeImage(this.updateIndex);
        }
    }

    render(){
        return html`
            <div class="slider-container">
                <button @click="${() => this.shift(-1)}"> < </button>
                <img class="${this.fading ? 'fade-out' : ''}" style="z-index: ${this.sliderZIndex}; max-height: ${this.imageHeight}" src="${this.location}${this.currentIndex}.${this.imageExtension}" alt="">
                <button @click="${() => this.shift(1)}"> > </button>
            </div>
        `
    }
}