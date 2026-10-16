import {
    MoreVertical,
    Users,
    ArrowRight
} from 'lucide-react'

const employees = [
  {
    name: 'Ayesha Rahman',
    department: 'Engineering',
    email: 'ayesha@company.com',
    joinDate: 'Aug 20, 2025',
    status: 'Active',
  },
  {
    name: 'Tanvir Hasan',
    department: 'Marketing',
    email: 'tanvir@company.com',
    joinDate: 'Aug 16, 2025',
    status: 'Active',
  },
  {
    name: 'Nusrat Jahan',
    department: 'Design',
    email: 'nusrat@company.com',
    joinDate: 'Aug 15, 2025',
    status: 'Active',
  },
  {
    name: 'Rafid Islam',
    department: 'Sales',
    email: 'rafid@company.com',
    joinDate: 'Aug 12, 2025',
    status: 'Inactive',
  },
  {
    name: 'Sadia Akter',
    department: 'HR',
    email: 'sadia@company.com',
    joinDate: 'Aug 10, 2025',
    status: 'Active',
  },
]

export default function RecentEmployeesTable() {
  return (
    <section className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <Users size={20} />
          </div>

          <h3 className="font-semibold text-slate-900">
            Recent Employees
          </h3>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View all <ArrowRight size={16} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-left text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Department</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Join Date</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-3 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.email}
                className="border-t border-slate-100 hover:bg-blue-50/40"
              >
                <td className="whitespace-nowrap px-5 py-3 font-medium text-slate-700">
                  {employee.name}
                </td>

                <td className="whitespace-nowrap px-5 py-3 text-slate-600">
                  {employee.department}
                </td>

                <td className="whitespace-nowrap px-5 py-3 text-slate-500">
                  {employee.email}
                </td>

                <td className="whitespace-nowrap px-5 py-3 text-slate-600">
                  {employee.joinDate}
                </td>

                <td className="px-5 py-3">
                  <span
                    className={`rounded-md px-2 py-1 text-xs font-medium ${
                      employee.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>

                <td className="px-3 py-3">
                  <button
                    type="button"
                    aria-label={`More options for ${employee.name}`}
                    className="rounded p-1 text-slate-500 hover:bg-slate-100"
                  >
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
