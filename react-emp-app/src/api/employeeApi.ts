import api from './axios.ts';

export const createEmployee = (data: FormData) => {
    return api.post('/employees', data)
}

export const employeeList = () => {
    return api.get('/employees');
}