import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getEmployee } from '@/api/employeeApi.ts'

function details() {
    const {empId} = useParams();
    const [employee, setEmployee] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await getEmployee(empId);
                setEmployee(response.data.data);
            }
            catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchEmployee()

    }, [empId])


    if (!employee) {
        return <div className="p-5">Employee not found.</div>
    }

    const details = [
        { label: 'Full Name', value: employee.name },
        { label: 'Email', value: employee.email },
        { label: 'Phone', value: employee.phone },
        { label: 'Department', value: employee.department },
        { label: 'Position', value: employee.position },
        { label: 'Join Date', value: employee.joining_date },
        { label: 'Status', value: employee.status },
    ]


    return (
        <div className="p-5">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                    {/* Profile Header */}
                    <div className="flex items-center gap-5 border-b border-slate-200 px-8 py-6">

                        {employee.photo ? (
                            <img
                                src={employee.photo}
                                alt={employee.name}
                                className="h-24 w-24 rounded-full border-4 border-slate-100 object-cover"
                            />
                        ) : (
                            <div
                                className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-2xl font-semibold text-slate-500">
                                {employee.name?.charAt(0)}
                            </div>
                        )}

                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">
                                {employee.name}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                {employee.position}
                            </p>
                        </div>

                    </div>

                    {/* Details Tab */}
                    <div className="border-b border-slate-200 px-8">
                        <div
                            className="inline-block border-b-2 border-blue-500 py-4 text-sm font-semibold text-blue-600">
                            Details
                        </div>
                    </div>

                    Employee Information
                    <div>
                        {details.map((item) => (
                            <div
                                key={item.label}
                                className="grid grid-cols-2 border-b border-slate-100 px-8 py-5 last:border-b-0"
                            >
                                <p className="text-sm font-medium text-slate-500">
                                    {item.label}
                                </p>

                                <p className="text-sm font-medium text-slate-700">
                                    {item.value || 'N/A'}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
    }

    export default details;