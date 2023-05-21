import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import UserList from './components/UserList.vue'
import CreateUser from './components/CreateUser.vue'
import EditUser from './components/EditUser.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: UserList
    },
    {
        path: '/create',
        component: CreateUser
    },
    {
        path: '/edit/:id',
        component: EditUser
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router