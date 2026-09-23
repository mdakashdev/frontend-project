import {
  createRouter,
  createWebHistory
} from 'vue-router';

import AppLayout from "@/layouts/AppLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import EmployeeList from "@/views/Employee/List.vue";
import NewEmp from "@/views/Employee/Create.vue";
import Login from "@/views/Auth/Login.vue";
import Department from "@/views/Department/List.vue";
import Task from "@/views/Task.vue";
import Report from "@/views/Report.vue"
import Calender from "@/views/Calender.vue"
import Settings from "@/views/Settings.vue"
import DepartmentCreate from "@/views/Department/Create.vue"

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
          path: 'employee',
          children: [
            {
              path: '',
              component: EmployeeList
            },
            {
              path: 'create',
              component: NewEmp
            }
          ]
        },
        {
          path: 'department',
          children: [
            {
              path: 'create',
              component: DepartmentCreate
            }
          ]
        },
        {
          path: 'task',
          component: Task
        },
        {
          path: 'report',
          component: Report
        },
        {
          path: 'calender',
          component: Calender
        },
        {
          path: 'settings',
          component: Settings
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
