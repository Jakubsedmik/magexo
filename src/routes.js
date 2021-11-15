const routes = [
    { path: '/', component: () => import('@/components/Home')},
    { path: '/category/:id/:page', component: () => import('@/components/ProductList') },
]

export default routes;
