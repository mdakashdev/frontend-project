export type EmployeeFormData = {
    fullName: string
    position: string
    email: string
    joiningDate: string
    phone: string
    status: string
    department: string
}

export type EmployeeData = {
    name: string
    email: string
    phone: string
    department: string
    position: string
    joining_date: string
    status: string
    photo?: File | null
}

type Status = 'active' | 'inactive'

// API Response Employee
export interface Employee {
    id: number
    name: string
    email: string
    phone: string
    department: string
    position: string
    joining_date: string
    status: Status
    photo: string | null
}

export interface ApiResponse<T> {
    success: boolean
    message: string,
    data: T
}