import { Router } from '@vaadin/router';

export const initRouter = () => {
    const outlet = document.getElementById('app');
    const router = new Router(outlet);
    router.setRoutes([
        {path: '/', component: 'apartment-welcome'},
        {path: '/wohnung/gartenblick', component: 'apartment-garden-view'},
        {path: '/wohnung/rachelblick', component: 'apartment-rachel-view'},
        {path: '/aktivitaeten/sommer', component: 'summer-activities'},
        {path: '/aktivitaeten/winter', component: 'winter-activities'},
        {path: '/hausordnung', component: 'house-rules'},
        {path: '/preise', component: 'price-component'},
        {path: '/kontakt', component: 'impressum-component'}
    ]);
};
