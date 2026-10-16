import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

import {
    ChartNoAxesCombined,
    PieChart as PieIcon
} from 'lucide-react'

const growthData = [
  { month: 'Jan', employees: 8 },
  { month: 'Feb', employees: 15 },
  { month: 'Mar', employees: 13 },
  { month: 'Apr', employees: 21 },
  { month: 'May', employees: 18 },
  { month: 'Jun', employees: 28 },
]

const departmentData = [
  { name: 'Engineering', value: 34, color: '#2878ff' },
  { name: 'Marketing', value: 18, color: '#10b981' },
  { name: 'Design', value: 15, color: '#8b5cf6' },
  { name: 'Sales', value: 12, color: '#f59e0b' },
  { name: 'HR', value: 10, color: '#36c6c9' },
  { name: 'Others', value: 11, color: '#8299bb' },
]

export default function DashboardCharts() {
  return (
    <section className="grid grid-cols-1 gap-4 xl:grid-cols-5">
      {/* Employee Growth */}
      <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm xl:col-span-3">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <ChartNoAxesCombined size={20} />
          </div>

          <h3 className="font-semibold text-slate-900">
            Employee Growth
          </h3>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2878ff" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#2878ff" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#e2e8f0"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="employees"
                stroke="#2878ff"
                strokeWidth={2.5}
                fill="url(#growthFill)"
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Distribution */}
      <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm xl:col-span-2">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <PieIcon size={20} />
          </div>

          <h3 className="font-semibold text-slate-900">
            Department Distribution
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative h-52 w-full sm:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={82}
                  paddingAngle={2}
                  stroke="none"
                >
                  {departmentData.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>

                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-slate-900">
                1,248
              </span>
              <span className="text-xs text-slate-500">Total</span>
            </div>
          </div>

          <div className="w-full space-y-3 sm:w-1/2">
            {departmentData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-2 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-600">{item.name}</span>
                </div>

                <span className="font-medium text-slate-600">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
