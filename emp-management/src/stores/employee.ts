import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Employee } from '@/data/employees'
import { createEmployee } from '@/api/employeeApi'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<Employee[]>([])

    function toFormData(employee: Employee) {
      const formData = new FormData()

      formData.append('name', employee.name)
      formData.append('position', employee.position)
      formData.append('email', employee.email)
      formData.append('department', employee.department)
      formData.append('joining_date', employee.joining_date.toString())
      formData.append('status', employee.status)
      formData.append('phone', employee.phone)

      if (employee.profilePhoto) {
        formData.append('photo', employee.profilePhoto)
      }

      return formData
    }

    async function addEmployee(employee: Employee) {
      const formData = toFormData(employee)

      const response = await createEmployee(formData)

      employees.value.push(response)

      return response
    }

    function getEmployees() {
      return employees.value;
    }

    return {
      employees,
      addEmployee,
      getEmployees
    }
})



