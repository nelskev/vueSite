import { createApp } from 'vue'
import App from './App.vue'
import './styles.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/shoppingCartPage.vue'
import productsPage from './pages/productsPage.vue'
import ProductDetailPage from './pages/productDetailPage.vue'
import notFoundPage from './pages/notFoundPage.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart', 
        component: ShoppingCartPage,
    }, {
        path: '/products',
        component: productsPage,
    }, {
        path: '/products/:productId',
        component: ProductDetailPage,
    }, {
    path: '/:pathMatch(.*)*',
    component: notFoundPage,
   } ],
}))
.mount('#app')
