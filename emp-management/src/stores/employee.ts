import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Employee } from '@/data/employees'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<Employee[]>([])

    function addEmployee(employee: Employee) {
      employees.value.push(employee)
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



