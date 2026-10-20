import { Outlet } from 'react-router'
import Sidebar from '@/components/ui/Sidebar'
import Header from '@/components/ui/Header'

function AppLayout() {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50">
            <Sidebar/>

            <div className="flex min-w-0 flex-1 flex-col">
                <Header/>

                <main className="min-h-0 flex-1 overflow-y-auto p-5">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AppLayout
