import {
    Search,
    Bell,
    ChevronDown,
} from "lucide-react";

export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
            {/* Left Section */}
            <div>
                <h1 className="text-lg font-semibold text-gray-800">
                    Dashboard
                </h1>

                <p className="text-sm text-gray-500">
                    Welcome back! Here's your overview.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-5">
                {/* Search */}
                <button
                    type="button"
                    aria-label="Search"
                    className="text-gray-500 transition hover:text-gray-900"
                >
                    <Search size={20} />
                </button>

                {/* Notification */}
                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative text-gray-500 transition hover:text-gray-900"
                >
                    <Bell size={20} />

                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
                </button>

                {/* Profile */}
                <button
                    type="button"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                        AU
                    </div>

                    <div className="hidden text-left sm:block">
                        <p className="text-sm font-medium text-gray-800">
                            Admin User
                        </p>

                        <p className="text-xs text-gray-500">
                            Administrator
                        </p>
                    </div>

                    <ChevronDown
                        size={16}
                        className="text-gray-500"
                    />
                </button>
            </div>
        </header>
    );
}
