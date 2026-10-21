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
