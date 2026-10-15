import { createBrowserRouter } from "react-router"

import AppLayout from "@/layouts/AppLayout.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import Employee from "@/pages/Employee.tsx";
import Settings from "@/pages/Settings.tsx";

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
                path: 'setting',
                Component: Settings
            }
        ]
    }
])

export default router;