import {createRouter, createWebHashHistory} from "vue-router";

// Pages
import Dashboard from './pages/Dashboard.vue'
import Components from "./pages/Components.vue";

const routes = [
    {path: '/', component: Dashboard},
    {path: '/dashboard', component: Dashboard},
    {path: '/components', component: Components},
]


const router = createRouter({
        history: createWebHashHistory(),
        routes
    }
)
export default router;
