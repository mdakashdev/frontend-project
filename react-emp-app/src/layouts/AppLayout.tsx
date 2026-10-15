import { Outlet } from 'react-router'
import Sidebar from '@/components/ui/Sidebar'
import Header from '@/components/ui/Header'

function AppLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>

            <div className="flex min-w-0 flex-1 flex-col">
                <Header/>

                <main className="flex-1 bg-gray-50 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AppLayout
