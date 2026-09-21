import axios from 'axios'
import { toast } from 'vue-sonner'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    if (!error.response) {
      toast.error('Network error. Please check your connection.')
      return Promise.reject(error)
    }

    if (status === 401) {
      toast.error('Session expired. Please log in again.')
      // router.push('/login')  // uncomment when auth is added
    } else if (status === 403) {
      toast.error('You do not have permission to perform this action.')
    } else if (status === 500) {
      toast.error('Server error. Please try again later.')
    }

    // 422 validation errors — let onError handle them per form
    return Promise.reject(error)
  }
)

export default api
