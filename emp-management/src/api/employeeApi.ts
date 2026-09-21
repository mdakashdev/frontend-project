import api from '@/api/axios'

export const createEmployee = async (formData: FormData) => {
  console.log('emp', formData);
  const response = await api.post('/employees', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data
}
