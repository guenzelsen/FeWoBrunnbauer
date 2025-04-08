import './style.scss'
import './components/apartment-basic-info'
import './components/apartment-home-content';
import './components/apartment-home';
import './components/apartment-garden-view'
import './components/apartment-rachel-view'
import './components/summer-activities'
import './components/winter-activities'
import './components/house-rules'
import './components/price-component'
import './components/price-card'
import './components/impressum'
import './components/home-slider-component'

import { initRouter } from './router';

window.addEventListener('load', () => {
    initRouter();
});