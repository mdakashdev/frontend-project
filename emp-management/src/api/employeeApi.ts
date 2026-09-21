import api from '@/api/axios'

export const createEmployee = async (formData: FormData) => {
  console.log('emp', formData);
  const response = await api.post('/employees', formData);

  return response.data
}
