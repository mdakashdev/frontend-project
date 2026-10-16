import {
  Users,
  UserRoundCheck,
  Building2,
  DollarSign,
  TrendingUp,
} from 'lucide-react'

const stats = [
  {
    title: 'Total Employees',
    value: '1,248',
    growth: '+12.5%',
    icon: Users,
    color: 'blue',
  },
  {
    title: 'Active Employees',
    value: '1,182',
    growth: '+8.2%',
    icon: UserRoundCheck,
    color: 'emerald',
  },
  {
    title: 'Departments',
    value: '12',
    growth: '+10.0%',
    icon: Building2,
    color: 'purple',
  },
  {
    title: 'Revenue',
    value: '$24,780',
    growth: '+15.3%',
    icon: DollarSign,
    color: 'orange',
  },
]

const colorStyles = {
  blue: 'bg-blue-100 text-blue-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
}

function StatsCards() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-xl p-3 ${colorStyles[stat.color as keyof typeof colorStyles]}`}
                >
                  <Icon size={22} />
                </div>

                <p className="text-sm font-medium text-slate-600">
                  {stat.title}
                </p>
              </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              {stat.value}
            </h2>

            <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
              <TrendingUp size={15} className="text-emerald-500" />
              <span className="font-semibold text-emerald-600">
                {stat.growth}
              </span>
              <span>from last month</span>
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default StatsCards;
