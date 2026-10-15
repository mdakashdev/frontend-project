import {
  LayoutDashboard,
  Users,
  ClipboardList,
  CalendarCheck,
  CalendarDays,
  ChartNoAxesColumn,
  Settings,
} from 'lucide-react'

import { NavLink } from 'react-router'

const menuItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Employees',
    path: '/emp',
    icon: Users,
  },
  {
    title: 'Departments',
    path: '/departments',
    icon: ClipboardList,
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: CalendarCheck,
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: CalendarDays,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: ChartNoAxesColumn,
  },
  {
    title: 'Settings',
    path: '/setting',
    icon: Settings,
  },
]

function Sidebar() {
  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-blue-100 bg-white px-3 py-5">
      {/* Logo */}
      <div className="mb-7 flex h-10 items-center gap-3 px-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
          V
        </div>

        <span className="text-lg font-bold text-slate-900">
          Admin
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                }`
              }
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.title}</span>
            </NavLink>
          )
        })}
      </nav>

      {/* Promotional Card */}
      <div className="mt-auto rounded-lg border border-blue-100 bg-blue-50/70 p-3">
        <div className="mb-3 flex h-28 items-center justify-center rounded-md bg-gradient-to-br from-blue-100 to-white">
          <div className="text-center">
            <Users
              size={44}
              className="mx-auto mb-2 text-blue-500"
              strokeWidth={1.5}
            />
            <span className="text-xs font-medium text-blue-600">
              Team Dashboard
            </span>
          </div>
        </div>

        <h3 className="text-sm font-semibold leading-5 text-slate-900">
          Great teams
          <br />
          build great products
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Keep going! You're doing amazing.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar;
