// src/utils/api-error.ts
import type { AxiosError } from 'axios'

type LaravelErrorResponse = {
  message?: string
  errors?: Record<string, string[]>
}

export function getApiError(
  error: unknown,
): LaravelErrorResponse {
  const axiosError = error as AxiosError<LaravelErrorResponse>

  return (
    axiosError.response?.data ?? {
      message: 'Something went wrong. Please try again.',
    }
  )
}
