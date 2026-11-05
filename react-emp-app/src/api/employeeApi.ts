import api from './axios.ts';
import type {Employee, ApiResponse} from '@/types/employee.ts'
export const createEmployee = (data: FormData) => {
    return api.post('/employees', data)
}

export const employeeList = () => {
    return api.get<ApiResponse<Employee[]>>('/employees');
}

export const getEmployee = (id: string) => {
    return api.get(`/employees/${id}`);
}

export const updateEmployee = (id: string, data: FormData) => {
    return api.post(`/employees/${id}`, data);
}

export const deleteEmployee = (id: string) => {
    return api.delete(`/employee/${id}`);
}