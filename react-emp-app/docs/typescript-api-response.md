# Golpo 


amar backend api response structure centralize kora ache, so, response back korbe 

{
"success": true,
"message": "Data retrieved successfully",
"data": []
}

now ami frontend theke bivinno feater er api call korbo, ja ei ekoi structure response pabo. 

like - employee lists, single employee, department lists, single department, etc 

export const employeeList = () => {
return api.get('/employees');
}


now ami jodi response er type define kori.  tahole 


src/types/commonResponse.ts 

interface Employee {
id: number
name: string
email: string
}

interface EmployeeListResponse {
success: boolean
message: string
data: Employee[]
}

interface SingleEmployeeResponse {
success: boolean
message: string
data: Employee
}


interface Department {
id: number
department: string
}

interface DepartmentListResponse {
success: boolean
message: string
data: Department[]
}

interface SingleDepartmentResponse {
success: boolean
message: string
data: Department
}



export const employeeList = () => {
return api.get<EmployeeListResponse>('/employees');
}

export const getEmployee = (id: string) => {
return api.get<SingleEmployeeResponse>(`/employee/${id}`);
}

export const departmentList = () => {
return api.get<DepartmentListResponse>('/departments');
}

export const getDepartment = () => {
return api.get<SingleDepartmentResponse>(`/department/${id}`);
}


now ami jodi generic use kori,  

interface Employee {
id: number
name: string
email: string
}

interface Department {
id: number
department: string
}

export interface ApiResponse<T> {
    success: boolean
    message: string
    data: T
}


export const employeeList = () => {
return api.get<ApiResponse<Employee[]>>('/employees');
}

export const getEmployee = (id: string) => {
return api.get<ApiResponse<Employee>>(`/employee/${id}`);
}

export const departmentList = () => {
return api.get<ApiResponse<Department[]>>('/departments');
}

export const getDepartment = () => {
return api.get<ApiResponse<Department>>(`/department/${id}`);
}


# Example 

```
export const employeeList = () => {
    return api.get('/employees');
}
```

ei api theke akta response asteche like :

```
{
  "success": true,
  "message": "Employee retrieved successfully",
  "data": [
      {
        "id": 25,
        "name": "John Doe",
        "email": "john@example.com",
      },
      {
        "id": 25,
        "name": "John Doe",
        "email": "john@example.com",
      }
  ]
}
```

data hocche - employee er data, jodi onno api hoi, tahole seitar data asbe; tarmane data ta variable / dynamic. 

sei jonno amon akta interface lagbe, jeita `generic` ja input nibe : Example - 

```
interface ApiResponse {
   success: boolean
   message: string
   data: Record<string, unknown>[]
}

interface ApiResponse {
   success: boolean
   message: string
   data: {
    id: number
    name: string
    email: string
   }[]
}
```

generic

```
interface ApiResponse<T> {
   success: boolean
   message: string
   data: T
}
```

eitar subida holo, single, multiple, department, others sob cover korbe.

so eitar jonno akta scenario korte hobe. for posting linkdin



# API Response-এর Type

এটি তোমার Employee project-এর জন্য খুব গুরুত্বপূর্ণ।

ধরো, Laravel API থেকে এই response আসছে:

```
{
  "success": true,
  "message": "Employee retrieved successfully",
  "data": {
    "id": 25,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "01712345678",
    "department": "Engineering",
    "position": "Software Engineer",
    "joining_date": "2026-01-10",
    "status": "active",
    "photo": null
  }
}
```

এখানে দুই ধরনের data আছে:

1. API response-এর বাইরের structure।
2. Employee-এর নিজের information।

তাই দুটি interface তৈরি করতে পারি।

```
interface Employee {
  id: number
  name: string
  email: string
  phone: string
  department: string
  position: string
  joining_date: string
  status: string
  photo: string | null
}

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}
```

এখানে `ApiResponse<T>` একটি Generic Type।

`T` হলো placeholder। অর্থাৎ API থেকে কী ধরনের data আসবে, সেটা পরে নির্ধারণ করা যাবে।

উদাহরণ:

```
ApiResponse<Employee>
```

মানে API response-এর `data` property-তে একটি Employee object থাকবে।

আর:

```
ApiResponse<Employee[]>
```

মানে `data` property-তে Employee-এর array থাকবে।