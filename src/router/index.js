import Vue from 'vue'
import Router from 'vue-router'

// 路由按需加载（懒加载）
const Home = () => import('../view/home/Home')
const Category = () => import('../view/categery/Categery')
const Shopcart = () => import('../view/cart/Cart')
const Profile = () => import('../view/profile/Profile')

// 安装vue-router插件到vue
Vue.use(Router)

// 配置路由
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/shopcart',
        name: 'Shopcart',
        component: Shopcart
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

// 创建路由对象
const router = new Router({
    mode: 'history',
    routes
})

// 导出路由对象
export default router