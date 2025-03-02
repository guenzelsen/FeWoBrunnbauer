import './style.scss'
import './components/apartment-basic-info'
import './components/apartment-welcome';
import './components/apartment-card-first'
import './components/apartment-card-second'
import './components/apartment-garden-view'
import './components/apartment-rachel-view'
import './components/summer-activities'
import './components/winter-activities'
import './components/house-rules'
import './components/impressum'

import { initRouter } from './router';

window.addEventListener('load', () => {
    initRouter();
});