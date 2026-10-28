import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import {
    Users,
    Plus,
    Filter,
    ChevronDown,
    MoreVertical,
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react'
import { employeeList } from '@/api/employeeApi.ts'

const PAGE_SIZE = 5;

function Employee() {
    const navigate = useNavigate()

    const [workers, setWorkers] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [filterOpen, setFilterOpen] = useState(false)
    const [statusFilter, setStatusFilter] = useState('All')
    const [selected, setSelected] = useState<number[]>([])
    const [sortAsc, setSortAsc] = useState(true)
    const [page, setPage] = useState(1);


    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await employeeList()
                console.log('API response:', response);
                setWorkers(response.data.data)
            } catch (error) {
                console.log('fetch error', error)
                setError('Failed to load employees.')
            } finally {
                setLoading(false)
            }
        }

        fetchEmployee()

    }, []);

    console.log('all-workers', workers);

    const filteredEmployees = useMemo(() => {
        const result = workers.filter(
            (employee) =>
                statusFilter === 'All' ||
                employee.status.toLowerCase() === statusFilter.toLowerCase(),
        )

        return [...result].sort((a, b) =>
            sortAsc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name),
        )
    }, [workers, statusFilter, sortAsc])

    const totalPage = Math.max(1, Math.ceil(filteredEmployees.length / PAGE_SIZE))

    const currentPage = Math.min(page, totalPage)

    const paginatedEmployees = filteredEmployees.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    )

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
                        <div
                            className="absolute right-0 z-10 mt-2 w-44 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
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
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500">
                        <tr>
                            <th className="w-12 px-5 py-4">
                                <input
                                    type="checkbox"
                                    aria-label="Select all employees"
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
                                    <ArrowUpDown size={14}/>
                                </button>
                            </th>
                            <th className="px-3 py-4 font-medium">Email</th>
                            <th className="px-3 py-4 font-medium">Department</th>
                            <th className="px-3 py-4 font-medium">Status</th>
                            <th className="px-5 py-4 text-right font-medium">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                        { loading ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center">
                                    Loading employee...
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-red-600">
                                    {error}
                                </td>
                            </tr>
                        ) : filteredEmployees.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-5 py-12 text-center text-sm text-slate-500"
                                >
                                    No employees found.
                                </td>
                            </tr>
                        ) : (
                            paginatedEmployees.map((employee) => (
                                <tr
                                    key={employee.id}
                                    className='transition-colors hover:bg-blue-50/40'
                                >
                                    <td className="px-5 py-4">
                                        <input
                                            type="checkbox"
                                            aria-label={`Select ${employee.name}`}
                                            className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                                        />
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-4">
                                        <div className="flex items-center gap-3">
                                            {employee.name}
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
                                            employee.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
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
                                            <MoreVertical size={18}/>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}


                        </tbody>

                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
                    <p className="text-xs text-slate-500">
                        Showing {filteredEmployees.length === 0 ? 0 : (currentPage-1) * PAGE_SIZE+1}-
                        {Math.min(
                            currentPage * PAGE_SIZE,
                            filteredEmployees.length,
                        )}{' '} of {filteredEmployees.length} employees
                    </p>

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() => setPage((current) => Math.max(1, current - 1))}
                            aria-label="Previous page"
                            className="rounded-md border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                        >
                            <ChevronLeft size={16}/>
                        </button>

                        {Array.from(
                            { length: totalPage },
                            (_, index) => index + 1,
                        ).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                type="button"
                                onClick={() => setPage(pageNumber)}
                                className={`h-8 min-w-8 rounded-md px-2 text-xs font-medium ${
                                    currentPage === pageNumber
                                        ? 'bg-blue-600 text-white'
                                        : 'text-slate-600 hover:bg-slate-100'
                                }`}
                            >
                                {pageNumber}
                            </button>
                        ))}

                        <button
                            type="button"
                            disabled={currentPage === totalPage}
                            onClick={() =>
                                setPage((current) => Math.min(totalPage, current + 1))
                            }
                            aria-label="Next page"
                            className="rounded-md border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                        >
                            <ChevronRight size={16}/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Employee;