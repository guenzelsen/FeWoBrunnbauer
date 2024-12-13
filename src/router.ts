import { Router } from '@vaadin/router';

export const initRouter = () => {
    const outlet = document.getElementById('app');
    const router = new Router(outlet);
    router.setRoutes([
        { path: '/', component: 'apartment-welcome' },
        { path: '/apartment/1', component: 'apartment-detail-first' },
        { path: '/apartment/2', component: 'apartment-detail-second' },
        { path: '/impressum', component: 'impressum-component' }
    ]);
};
