import api from './axios.ts'

export const createDepartment = (data: DepartmentData) => {
    return api.post('/departments', data);
}