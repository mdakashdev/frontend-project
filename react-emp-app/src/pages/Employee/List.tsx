import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import {
    Users,
    Plus,
    Filter,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    ArrowUpDown,
    X,
} from 'lucide-react'

const employees = [
    { id: 1, name: 'Ayesha Rahman', email: 'ayesha@company.com', department: 'Engineering', status: 'Active', initials: 'AR', color: 'bg-orange-100 text-orange-700' },
    { id: 2, name: 'Tanvir Hasan', email: 'tanvir@company.com', department: 'Marketing', status: 'Active', initials: 'TH', color: 'bg-blue-100 text-blue-700' },
    { id: 3, name: 'Nusrat Jahan', email: 'nusrat@company.com', department: 'Design', status: 'Active', initials: 'NJ', color: 'bg-pink-100 text-pink-700' },
    { id: 4, name: 'Rafid Islam', email: 'rafid@company.com', department: 'Sales', status: 'Inactive', initials: 'RI', color: 'bg-amber-100 text-amber-700' },
    { id: 5, name: 'Sadia Akter', email: 'sadia@company.com', department: 'HR', status: 'Active', initials: 'SA', color: 'bg-purple-100 text-purple-700' },
    { id: 6, name: 'Imran Hossain', email: 'imran@company.com', department: 'Engineering', status: 'Active', initials: 'IH', color: 'bg-cyan-100 text-cyan-700' },
    { id: 7, name: 'Megha Rahman', email: 'megha@company.com', department: 'Marketing', status: 'Active', initials: 'MR', color: 'bg-rose-100 text-rose-700' },
    { id: 8, name: 'Faisal Ahmed', email: 'faisal@company.com', department: 'Design', status: 'Active', initials: 'FA', color: 'bg-indigo-100 text-indigo-700' },
]

function Employee() {
    const navigate = useNavigate()

    const [filterOpen, setFilterOpen] = useState(false)
    const [statusFilter, setStatusFilter] = useState('All')
    const [selected, setSelected] = useState<number[]>([])
    const [page, setPage] = useState(1)
    const [sortAsc, setSortAsc] = useState(true)

    const filteredEmployees = useMemo(() => {
        const result = employees.filter(
            (employee) =>
                statusFilter === 'All' || employee.status === statusFilter,
        )

        return [...result].sort((a, b) =>
            sortAsc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name),
        )
    }, [statusFilter, sortAsc])

    const toggleAll = () => {
        setSelected(
            selected.length === filteredEmployees.length
                ? []
                : filteredEmployees.map((employee) => employee.id),
        )
    }

    const toggleEmployee = (id: number) => {
        setSelected((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id],
        )
    }

    return (
        <div className="space-y-6">
            {/* Page heading */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Employees
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Manage your team members and their information.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {/* Filter */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                            <Filter size={16} />
                            Filter
                            <ChevronDown size={15} />
                        </button>

                        {filterOpen && (
                            <div className="absolute right-0 z-10 mt-2 w-44 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
                                <p className="mb-2 text-xs font-semibold text-slate-500">
                                    Filter by status
                                </p>

                                {['All', 'Active', 'Inactive'].map((status) => (
                                    <button
                                        key={status}
                                        type="button"
                                        onClick={() => {
                                            setStatusFilter(status)
                                            setFilterOpen(false)
                                            setPage(1)
                                            setSelected([])
                                        }}
                                        className={`block w-full rounded-md px-3 py-2 text-left text-sm ${
                                            statusFilter === status
                                                ? 'bg-blue-50 font-medium text-blue-600'
                                                : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Add Employee */}
                    <button
                        type="button"
                        onClick={() => navigate('/emp/create')}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                    >
                        <Plus size={17} />
                        Add Employee
                    </button>
                </div>
            </div>

            {/* Table card */}
            <section className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-2">
                        <Users size={19} className="text-blue-600" />
                        <h2 className="font-semibold text-slate-800">
                            All Employees
                        </h2>
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
              {filteredEmployees.length}
            </span>
                    </div>

                    {selected.length > 0 && (
                        <button
                            type="button"
                            onClick={() => setSelected([])}
                            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
                        >
                            <X size={14} />
                            Clear selection ({selected.length})
                        </button>
                    )}
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500">
                        <tr>
                            <th className="w-12 px-5 py-4">
                                <input
                                    type="checkbox"
                                    aria-label="Select all employees"
                                    checked={
                                        filteredEmployees.length > 0 &&
                                        selected.length === filteredEmployees.length
                                    }
                                    onChange={toggleAll}
                                    className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                                />
                            </th>

                            <th className="px-3 py-4 font-medium">
                                <button
                                    type="button"
                                    onClick={() => setSortAsc(!sortAsc)}
                                    className="flex items-center gap-2 hover:text-blue-600"
                                >
                                    Name
                                    <ArrowUpDown size={14} />
                                </button>
                            </th>

                            <th className="px-3 py-4 font-medium">Email</th>
                            <th className="px-3 py-4 font-medium">Department</th>
                            <th className="px-3 py-4 font-medium">Status</th>
                            <th className="px-5 py-4 text-right font-medium">Actions</th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                        {filteredEmployees.map((employee) => (
                            <tr
                                key={employee.id}
                                className={`transition-colors hover:bg-blue-50/40 ${
                                    selected.includes(employee.id) ? 'bg-blue-50/50' : ''
                                }`}
                            >
                                <td className="px-5 py-4">
                                    <input
                                        type="checkbox"
                                        aria-label={`Select ${employee.name}`}
                                        checked={selected.includes(employee.id)}
                                        onChange={() => toggleEmployee(employee.id)}
                                        className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                                    />
                                </td>

                                <td className="whitespace-nowrap px-3 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${employee.color}`}
                                        >
                                            {employee.initials}
                                        </div>
                                        <span className="font-medium text-slate-800">
                        {employee.name}
                      </span>
                                    </div>
                                </td>

                                <td className="whitespace-nowrap px-3 py-4 text-slate-500">
                                    {employee.email}
                                </td>

                                <td className="whitespace-nowrap px-3 py-4 text-slate-600">
                                    {employee.department}
                                </td>

                                <td className="px-3 py-4">
                    <span
                        className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${
                            employee.status === 'Active'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-red-100 text-red-600'
                        }`}
                    >
                      {employee.status}
                    </span>
                                </td>

                                <td className="px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        aria-label={`More actions for ${employee.name}`}
                                        onClick={() =>
                                            navigate(`/emp/${employee.id}/edit`)
                                        }
                                        className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-blue-600"
                                    >
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {filteredEmployees.length === 0 && (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-5 py-12 text-center text-sm text-slate-500"
                                >
                                    No employees found.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
                    <p className="text-xs text-slate-500">
                        Showing {filteredEmployees.length ? 1 : 0}-
                        {filteredEmployees.length} of {filteredEmployees.length} employees
                    </p>

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            disabled={page === 1}
                            onClick={() => setPage((current) => Math.max(1, current - 1))}
                            aria-label="Previous page"
                            className="rounded-md border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        {[1, 2, 3, 4, 5].map((pageNumber) => (
                            <button
                                key={pageNumber}
                                type="button"
                                onClick={() => setPage(pageNumber)}
                                className={`h-8 min-w-8 rounded-md px-2 text-xs font-medium ${
                                    page === pageNumber
                                        ? 'bg-blue-600 text-white'
                                        : 'text-slate-600 hover:bg-slate-100'
                                }`}
                            >
                                {pageNumber}
                            </button>
                        ))}

                        <button
                            type="button"
                            onClick={() => setPage((current) => current + 1)}
                            aria-label="Next page"
                            className="rounded-md border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Employee;