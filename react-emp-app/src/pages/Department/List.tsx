import { useEffect, useMemo, useState } from 'react'
import {
    Search,
    Plus,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Building2,
    X,
} from 'lucide-react'
import { useNavigate } from 'react-router'
import { departmentList } from '@/api/departmentApi'
import type { Department as DepartmentType } from '@/types/department'

const PAGE_SIZE = 6

const colors = [
    'bg-blue-100 text-blue-600',
    'bg-cyan-100 text-cyan-600',
    'bg-purple-100 text-purple-600',
    'bg-green-100 text-green-600',
    'bg-orange-100 text-orange-600',
]

function Department() {
    const navigate = useNavigate()

    const [departments, setDepartments] = useState<DepartmentType[]>([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [openMenu, setOpenMenu] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await departmentList()
                setDepartments(response.data.data)
            } catch (error) {
                console.error(error)
                setError('Failed to load departments.')
            } finally {
                setLoading(false)
            }
        }

        fetchDepartments()
    }, [])

    const filteredDepartments = useMemo(() => {
        const query = search.trim().toLowerCase()

        return departments.filter(
            (department) =>
                department.name.toLowerCase().includes(query) ||
                department.description.toLowerCase().includes(query),
        )
    }, [search, departments])

    console.log(JSON.stringify(filteredDepartments, null, 2))

    const totalPages = Math.max(
        1,
        Math.ceil(filteredDepartments.length / PAGE_SIZE),
    )

    const currentPage = Math.min(page, totalPages)

    const visibleDepartments = filteredDepartments.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    )

return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-bold text-slate-900">
                Departments
            </h1>
            <p className="mt-1 text-sm text-slate-500">
                Manage your departments and teams.
            </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value)
                        setPage(1)
                    }}
                    placeholder="Search departments..."
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-10 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />

                {search && (
                    <button
                        type="button"
                        aria-label="Clear search"
                        onClick={() => {
                            setSearch('')
                            setPage(1)
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>

            <button
                type="button"
                onClick={() => navigate('/departments/create')}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
            >
                <Plus size={18} />
                Add Department
            </button>
        </div>

        <section className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs text-slate-500">
                    <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-4 py-4">Department Head</th>
                        <th className="px-4 py-4">Description</th>
                        <th className="px-4 py-4">Status</th>
                        <th className="px-5 py-4 text-right">Actions</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                    {loading ? (
                        <tr>
                            <td colSpan={5} className="px-6 py-12 text-center">
                                Loading departments...
                            </td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td
                                colSpan={5}
                                className="px-6 py-12 text-center text-red-600"
                            >
                                {error}
                            </td>
                        </tr>
                    ) : visibleDepartments.length === 0 ? (
                        <tr>
                            <td
                                colSpan={5}
                                className="px-6 py-12 text-center text-slate-500"
                            >
                                No departments found.
                            </td>
                        </tr>
                    ) : (
                        visibleDepartments.map((department) => (
                            <tr
                                key={department.id}
                                className="hover:bg-blue-50/40"
                            >
                                <td className="whitespace-nowrap px-6 py-3.5">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                                colors[department.id % colors.length]
                                            }`}
                                        >
                                            <Building2 size={17} />
                                        </div>

                                        <span className="font-medium text-slate-800">{department.name}</span>
                                    </div>
                                </td>

                                <td className="px-4 py-3.5 text-slate-600">
                                    {department.dep_head}
                                </td>

                                <td className="px-4 py-3.5 text-slate-500">
                                    {department.description}
                                </td>

                                <td className="px-4 py-3.5">
                                  <span className="inline-flex rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                                    {department.status}
                                  </span>
                                </td>

                                <td className="relative px-5 py-3.5 text-right">
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${department.name}`}
                                        onClick={() =>
                                            setOpenMenu(
                                                openMenu === department.id
                                                    ? null
                                                    : department.id,
                                            )
                                        }
                                        className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100"
                                    >
                                        <MoreVertical size={18} />
                                    </button>

                                    {openMenu === department.id && (
                                        <div className="absolute right-8 top-10 z-20 w-36 rounded-lg border border-slate-200 bg-white p-1 text-left shadow-lg">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenMenu(null)
                                                    navigate(
                                                        `/departments/${department.id}/edit`,
                                                    )
                                                }}
                                                className="w-full rounded-md px-3 py-2 text-sm hover:bg-blue-50"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setOpenMenu(null)}
                                                className="w-full rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                                            >
                                                View details
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
                <p className="text-xs text-slate-500">
                    Showing{' '}
                    {filteredDepartments.length === 0
                        ? 0
                        : (currentPage - 1) * PAGE_SIZE + 1}
                    –
                    {Math.min(
                        currentPage * PAGE_SIZE,
                        filteredDepartments.length,
                    )}{' '}
                    of {filteredDepartments.length}
                </p>

                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        disabled={currentPage === 1 || loading}
                        onClick={() => setPage((value) => value - 1)}
                        aria-label="Previous page"
                        className="rounded-md border border-slate-200 p-2 disabled:opacity-40"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1,
                    ).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            type="button"
                            onClick={() => setPage(pageNumber)}
                            className={`h-8 min-w-8 rounded-md px-2 text-xs ${
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
                        disabled={currentPage === totalPages || loading}
                        onClick={() => setPage((value) => value + 1)}
                        aria-label="Next page"
                        className="rounded-md border border-slate-200 p-2 disabled:opacity-40"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    </div>
)
}

export default Department
