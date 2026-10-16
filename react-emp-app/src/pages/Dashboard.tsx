import StatsCards from '@/components/dashboard/StatsCards'
import DashboardCharts from '@/components/dashboard/DashboardCharts'
import RecentEmployeesTable from '@/components/dashboard/RecentEmployeesTable'

export default function Dashboard() {
  return (
    <div className="space-y-5">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening with your team today.
        </p>
      </div>

      {/* 1. Statistics cards */}
      <StatsCards />

      {/* 2. Charts */}
      <DashboardCharts />

      {/* 3. Employees table */}
      <RecentEmployeesTable />
    </div>
  )
}
