import { createBrowserRouter } from "react-router"

import Dashboard from "@/pages/Dashboard.tsx";
import Employee from "@/pages/Employee.tsx";
import Settings from "@/pages/Settings.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/emp',
        element: <Employee/>
    },
    {
        path: '/setting',
        element: <Settings/>
    }
])

export default router;