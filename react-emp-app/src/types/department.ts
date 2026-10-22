export type DepartmentFormData = {
  departmentName: string
  description: string
  departmentHead: string
  status: string
}

export interface DepartmentData {
  name: string,
  description: string,
  dep_head: string,
  status: string
}

export type Department = {
  id: number
  name: string
  description: string
  dep_head: string
  status: string
}

export type DepartmentResponse = {
  success: boolean
  messages: string
  data: Department[]
}