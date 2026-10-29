import { createBrowserRouter } from "react-router"

import AppLayout from "@/layouts/AppLayout.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import EmployeeList from "@/pages/Employee/List.tsx";
import Settings from "@/pages/Settings.tsx";
import EmployeeCreate from "@/pages/Employee/Create.tsx";
import DepartmentCreate from "@/pages/Department/Create.tsx";
import DepartmentList from "@/pages/Department/List.tsx";

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
                Component: EmployeeList
            },
            {
                path: 'emp/create',
                Component: EmployeeCreate
            },
            {
                path:'emp/:empId/edit',
                Component: EmployeeCreate
            },
            {
                path: 'setting',
                Component: Settings
            },
            {
                path: 'departments',
                Component: DepartmentList
            },
            {
                path: 'departments/create',
                Component: DepartmentCreate
            }
        ]
    }
])

export default router;