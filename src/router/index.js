import { createRouter, createWebHistory } from "vue-router";
import Myshop from '../components/MyShop'
import MyCategory from '../components/MyCategory'

const routes = [
    {
        path: "/",
        name: "MyShop",
        component: Myshop,
    },
    {
        path: "/MyCategory",
        name: "MyCategory",
        component: MyCategory,
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;