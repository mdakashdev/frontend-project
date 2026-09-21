import type { AxiosError } from 'axios'

type LaravelValidationResponse = {
  message: string
  errors?: Record<string, string[]>
}

// Use this only for 422 validation errors in form onError callbacks.
// Global errors (401, 403, 500, network) are handled by the axios interceptor.
export function getApiError(error: unknown): LaravelValidationResponse {
  const axiosError = error as AxiosError<LaravelValidationResponse>

  return (
    axiosError.response?.data ?? {
      message: 'Something went wrong. Please try again.',
    }
  )
}
