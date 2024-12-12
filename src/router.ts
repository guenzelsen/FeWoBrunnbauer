import { Router } from '@vaadin/router';

export const initRouter = () => {
    const outlet = document.getElementById('app');
    const router = new Router(outlet);
    router.setRoutes([
        { path: '/', component: 'apartment-welcome' },
        { path: '/appone', component: 'apartment-welcome' },
        { path: '/apptwo', component: 'apartment-welcome' },
        { path: '/impressum', component: 'impressum-component' }
    ]);
};
