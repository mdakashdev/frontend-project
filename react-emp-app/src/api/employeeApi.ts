import api from './axios.ts';

export const createEmployee = (data: FormData) => {
    return api.post('/employees', data)
}

export const employeeList = () => {
    return api.get('/employees');
}

export const getEmployee = (id: string) => {
    return api.get(`/employees/${id}`);
}

export const updateEmployee = (id: string, data: FormData) => {
    console.log('Updating employee:', id);

    for (const [key, value] of data.entries()) {
        console.log(key, value);
    }

    return api.post(`/employees/${id}`, data)
}