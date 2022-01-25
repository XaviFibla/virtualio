import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue"
Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: {
            name: "HelloWorld"
        }
    },
    { path: '/hello', component: HelloWorld, name: 'HelloWorld' },
];

export function createRouter() {
    const router = new Router({
        routes,
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }
            if (to.hash) {
                return { selector: to.hash }
            }
            return { x: 0, y: 0 }
        }
    });

    return router;
}
