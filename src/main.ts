import './style.scss'
import './components/apartment-welcome';
import './components/apartment-card-first'
import './components/apartment-card-second'
import './components/impressum'

import { initRouter } from './router';

window.addEventListener('load', () => {
    initRouter();
});