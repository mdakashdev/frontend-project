import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import {
  CalendarDays,
  Upload,
  UserRound,
  ChevronDown,
} from 'lucide-react'
import type { EmployeeFormData } from '@/types/employee.ts'
import { createEmployee } from "@/api/employeeApi.ts";
import axios from 'axios'

const departments = [
  'Engineering',
  'Marketing',
  'Design',
  'Sales',
  'HR',
  'Finance',
];

function EmployeeForm() {
  const { empId } = useParams()
  const isEdit = Boolean(empId)

  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    defaultValues: {
      status: 'Active',
    },
  })

  const onSubmit = async (data: EmployeeFormData) => {
    console.log('Employee data:', data)
    console.log('Profile photo:', photo)
    // Later: send data to Laravel API

    const payload = new FormData()

    payload.append('name', data.fullName)
    payload.append('email', data.email)
    payload.append('phone', data.phone)
    payload.append('department', data.department)
    payload.append('position', data.position)
    payload.append('joining_date', data.joiningDate)
    payload.append('status', data.status.toLowerCase())

    if (photo) {
      payload.append('photo', photo)
    }

    try {
      await createEmployee(payload)
      navigate('/emp')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Status:', error.response?.status)
        console.log('Validation errors:', error.response?.data)
      } else {
        console.error(error)
      }
    }

  }

  const inputClass ='mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'

  const labelClass = 'text-sm font-medium text-slate-700'

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          { isEdit ? 'Edit Employee' : 'Add Employee'}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Fill in the details to add a new employee.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('fullName', { required: 'Full name is required',})}
              placeholder="Enter full name"
              className={inputClass}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Position */}
          <div>
            <label className={labelClass}>
              Position <span className="text-red-500">*</span>
            </label>
            <input
              {...register('position', {
                required: 'Position is required',
              })}
              placeholder="Enter position"
              className={inputClass}
            />
            {errors.position && (
              <p className="mt-1 text-xs text-red-500">
                {errors.position.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              placeholder="Enter email address"
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Joining Date */}
          <div>
            <label className={labelClass}>
              Date of Joining <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                {...register('joiningDate', {
                  required: 'Joining date is required',
                })}
                className={`${inputClass} pr-10`}
              />
              <CalendarDays
                size={17}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
            {errors.joiningDate && (
              <p className="mt-1 text-xs text-red-500">
                {errors.joiningDate.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              {...register('phone')}
              placeholder="Enter phone number"
              className={inputClass}
            />
          </div>

          {/* Status */}
          <div>
            <label className={labelClass}>Status</label>
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

          {/* Department */}
          <div>
            <label className={labelClass}>
              Department <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                {...register('department', {
                  required: 'Please select a department',
                })}
                className={`${inputClass} appearance-none pr-10`}
              >
                <option value="">Select department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
            {errors.department && (
              <p className="mt-1 text-xs text-red-500">
                {errors.department.message}
              </p>
            )}
          </div>

          {/* Profile Photo */}
          <div>
            <label className={labelClass}>Profile Photo</label>

            <div className="mt-2 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-400">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Employee preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound size={30} />
                )}
              </div>

              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (!file) return

                    if (file.size > 2 * 1024 * 1024) {
                      alert('Photo must be 2 MB or smaller.')
                      event.target.value = ''
                      return
                    }

                    setPhoto(file)
                    setPhotoPreview(URL.createObjectURL(file))
                  }}
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                >
                  <Upload size={16} />
                  Upload photo
                </button>

                <p className="mt-2 text-xs text-slate-400">
                  JPG, PNG (max 2MB)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col-reverse justify-end gap-3 border-t border-slate-100 pt-5 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate('/emp')}
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Save Employee
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmployeeForm;