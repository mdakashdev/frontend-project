import api from './axios.ts'
import type { DepartmentResponse } from '@/types/department.ts'
export const createDepartment = (data: DepartmentData) => {
    return api.post('/departments', data);
}

export const departmentList = () => {
    return api.get<DepartmentResponse>('/departments');
}