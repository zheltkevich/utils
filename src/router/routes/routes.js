import HomeView from '@views/HomeView.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/another',
        name: 'another',
        component: () => import('@views/AnotherView.vue'),
    },
]
