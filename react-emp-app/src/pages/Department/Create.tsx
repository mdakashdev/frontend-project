import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { ChevronDown } from 'lucide-react'

type DepartmentFormData = {
  departmentName: string
  description: string
  departmentHead: string
  status: string
}

const employees = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Alex Johnson' },
]

function DepartmentForm() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DepartmentFormData>({
    defaultValues: {
      departmentName: '',
      description: '',
      departmentHead: '',
      status: 'Active',
    },
  })

  const onSubmit = (data: DepartmentFormData) => {
    console.log('Department data:', data)

    // Later: send data to Laravel API
    navigate('/departments')
  }

  const inputClass =
    'mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'

  const labelClass = 'text-sm font-medium text-slate-700'

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Add Department
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Create a new department for your organization.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          {/* Department Name */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Department Name{' '}
              <span className="text-red-500">*</span>
            </label>

            <input
              {...register('departmentName', {
                required: 'Department name is required',
                minLength: {
                  value: 2,
                  message: 'Department name must be at least 2 characters',
                },
              })}
              placeholder="Enter department name"
              className={inputClass}
            />

            {errors.departmentName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.departmentName.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Description
            </label>

            <textarea
              {...register('description', {
                maxLength: {
                  value: 500,
                  message: 'Description cannot exceed 500 characters',
                },
              })}
              placeholder="Enter description"
              rows={4}
              className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Department Head */}
          <div>
            <label className={labelClass}>
              Department Head
            </label>

            <div className="relative">
              <select
                {...register('departmentHead')}
                className={`${inputClass} appearance-none pr-10`}
              >
                <option value="">Select employee</option>

                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className={labelClass}>
              Status
            </label>

            <div className="relative">
              <select
                {...register('status')}
                className={`${inputClass} appearance-none pr-10`}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col-reverse justify-end gap-3 border-t border-slate-100 pt-5 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate('/departments')}
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Save Department
          </button>
        </div>
      </form>
    </div>
  )
}

export default DepartmentForm;
