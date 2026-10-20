import { createBrowserRouter } from "react-router"

import AppLayout from "@/layouts/AppLayout.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import Employee from "@/pages/Employee.tsx";
import Settings from "@/pages/Settings.tsx";
import Department from "@/pages/Department.tsx";
import EmployeeCreate from "@/pages/Employee/Create.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: Dashboard
            },
            {
                path: 'emp',
                Component: Employee
            },
            {
                path: 'emp/create',
                Component: EmployeeCreate
            },
            {
                path: 'setting',
                Component: Settings
            },
            {
                path: 'departments',
                Component: Department
            }
        ]
    }
])

export default router;