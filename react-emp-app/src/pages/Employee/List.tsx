import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {
    Users,
    Plus,
    Filter,
    ChevronDown,
    MoreVertical,
} from 'lucide-react'
import { employeeList } from '@/api/employeeApi.ts'

function Employee() {
    const navigate = useNavigate()

    const [workers, setWorkers] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);


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
                            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                            <Filter size={16} />
                            Filter
                            <ChevronDown size={15} />
                        </button>
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
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">Length</span>
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
                            <th className="px-3 py-4 font-medium">Name</th>
                            <th className="px-3 py-4 font-medium">Email</th>
                            <th className="px-3 py-4 font-medium">Department</th>
                            <th className="px-3 py-4 font-medium">Status</th>
                            <th className="px-5 py-4 text-right font-medium">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                        {workers.map((employee) => (
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
                        ))}

                        {workers.length === 0 && (
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
                <div
                    className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
                    <p className="text-xs text-slate-500">
                        Showing employees
                    </p>

                    <div className="flex items-center gap-1">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Employee;