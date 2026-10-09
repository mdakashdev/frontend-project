import './App.css'
import Sidebar from '@/components/ui/Sidebar'
import Header from '@/components/ui/Header'

function App() {
    return (
        <div className="min-h-screen">
            <div className="flex min-h-screen">
                <Sidebar/>

                <div className="flex min-w-0 flex-1 flex-col">
                    <Header/>

                    <main className="flex-1 bg-gray-50 p-6">
                        content
                    </main>
                </div>

            </div>
        </div>
    )
}

export default App
