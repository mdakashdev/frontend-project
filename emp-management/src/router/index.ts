import {
  createRouter,
  createWebHistory
} from 'vue-router';

import AppLayout from "@/layouts/AppLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import AddEmp from "@/views/AddEmp.vue";
import NewEmp from "@/views/NewEmp.vue";
import ListEmp from "@/views/ListEmp.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: Dashboard
        },
        {
          path: 'new',
          component: NewEmp
        },
        {
          path: 'new-emp',
          component: AddEmp
        },
        {
          path: 'emp',
          component: ListEmp
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router;
