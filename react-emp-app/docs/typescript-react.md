number-এর array - number[] - setSelected([1, 2, 3])
এখানে `string | null` মানে দুটি ধরনের value রাখা যাবে: mane, type 2 dhoroner hote pare, aar initial value hobe, null


workers a ki thakbe seta age theke define kora.

    [
        {
            id: 101,
            name: arif,
            desgintiaon: software engineer
        },
        {
            id: 102,
            name: nahid,
            designation: software engineer
        },
        {
            id: 103,
            name: rajin,
            designation: software engineer
        }
    ]

ans: array of object.
    const [state, setState] = useState<Type>(initialValue)



একটা সহজ নিয়ম মনে রাখবে:
- Object structure: interface ব্যবহার করতে পারো।
- Union / Primitive / Tuple: type ব্যবহার করো।
- Object-এর জন্য type ব্যবহার করলেও ভুল নয়।


> React + TypeScript-এর State, Props, Events এবং API Response-এর Type ভালোভাবে শিখব।
> তারপর Employee Details page-এ এগুলো implement করব।

প্রথমে একটি বিষয় বুঝে রাখো:


## ১. useState-এ TypeScript

`useState`-এর basic structure:

```
const [state, setState] = useState<Type>(initialValue)
```

এখানে:

- `state` = বর্তমান value
- `setState` = value পরিবর্তনের function
- `Type` = কী ধরনের data থাকবে
- `initialValue` = শুরুতে কী value থাকবে

### Example 1: String

```
const [name, setName] = useState<string>('')
```

এখন `name` শুধু string রাখতে পারবে।

```
setName('Akash') // ঠিক
setName('John')  // ঠিক

setName(25)      // TypeScript error
```

### Example 2: Number

```
const [age, setAge] = useState<number>(0)
```

এখন শুধু number রাখতে পারবে।

### Example 3: Boolean

```
const [loading, setLoading] = useState<boolean>(true)
```

এটি সাধারণত loading, modal open/close, checkbox ইত্যাদির জন্য ব্যবহার হয়।

```
setLoading(false)
```

### Example 4: Array

ধরো, তুমি selected employee ID রাখবে।

```
const [selected, setSelected] = useState<number[]>([])
```

এখানে `number[]` অর্থ হলো number-এর array।

```
setSelected([1, 2, 3]) // ঠিক
setSelected([5, 10])   // ঠিক

setSelected(['1', '2']) // Error
```

কেন `useState([])` না লিখে `useState<number[]>([])` লিখব?

কারণ TypeScript খালি array দেখে এর ভেতরে ভবিষ্যতে কী ধরনের value আসবে, সবসময় বুঝতে পারে না। Strict TypeScript configuration-এ এটি `never[]` হিসেবে infer হতে পারে।

### Example 5: Null এবং String

```
const [error, setError] = useState<string | null>(null)
```

এখানে `string | null` মানে দুটি ধরনের value রাখা যাবে:

```
setError(null) // ঠিক
setError('Something went wrong') // ঠিক

setError(100) // Error
```

`|` চিহ্নকে TypeScript-এ Union Type বলে।

## ২. Object State-এর Type

এবার তোমার Employee project-এর উদাহরণ দেখি।

একজন Employee-এর তথ্য:

```
const employee = {
  id: 25,
  name: 'John Doe',
  email: 'john@example.com',
  phone: '01712345678',
  position: 'Software Engineer',
  department: 'Engineering',
  status: 'active'
}
```

এখানে একটি Employee object-এর মধ্যে বিভিন্ন ধরনের property আছে।

এগুলোর জন্য একটি `interface` তৈরি করতে পারি।

```
interface Employee {
  id: number
  name: string
  email: string
  phone: string
  position: string
  department: string
  status: string
  photo: string | null
  joining_date: string
}
```

এখন State-এ এই interface ব্যবহার করব:

```
const [employee, setEmployee] = useState<Employee | null>(null)
```

এখানে দুটি বিষয়:

- `Employee` = Employee object-এর structure।
- `null` = API থেকে data আসার আগে কোনো employee নেই।

এখন:

```
setEmployee({
  id: 25,
  name: 'John Doe',
  email: 'john@example.com',
  phone: '01712345678',
  position: 'Software Engineer',
  department: 'Engineering',
  status: 'active',
  photo: null,
  joining_date: '2026-01-10'
})
```

TypeScript প্রতিটি property-এর type check করবে।

তোমার Details page-এ আমরা এই পদ্ধতিটিই ব্যবহার করব।

## ৩. Props-এর Type নির্ধারণ

ধরো, তুমি একটি reusable EmployeeCard component তৈরি করেছ।

তুমি parent component থেকে employee-এর name পাঠাতে চাও।

প্রথমে Props interface:

```
interface EmployeeCardProps {
  name: string
  position: string
}
```

তারপর component:

```
function EmployeeCard({ name, position }: EmployeeCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{position}</p>
    </div>
  )
}
```

ব্যবহার:

```
<EmployeeCard
  name="John Doe"
  position="Software Engineer"
/>
```

এখন ভুল করে number পাঠালে TypeScript error দেখাবে।

```
<EmployeeCard
  name={25}
  position="Software Engineer"
/>
```

মনে রাখবে: Props হলো Parent component থেকে Child component-এ data পাঠানোর মাধ্যম। Props-এর type নির্ধারণ করলে ভুল data পাঠানো থেকে রক্ষা পাওয়া যায়।

## ৪. Event-এর Type নির্ধারণ

React-এ input-এর value পরিবর্তন হলে `onChange` event ব্যবহার করি।

```
import { useState } from 'react'

function Search() {
  const [search, setSearch] = useState<string>('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value)
  }

  return (
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search employee"
    />
  )
}
```

এখানে:

- `React.ChangeEvent` = React-এর change event-এর type।
- `HTMLInputElement` = HTML input element।
- `event.target.value` = Input-এর বর্তমান value।

আরও কিছু common event type:

| HTML Element | TypeScript Event                         |
| ------------ | ---------------------------------------- |
| Input        | `React.ChangeEvent<HTMLInputElement>`    |
| Textarea     | `React.ChangeEvent<HTMLTextAreaElement>` |
| Select       | `React.ChangeEvent<HTMLSelectElement>`   |
| Button click | `React.MouseEvent<HTMLButtonElement>`    |
| Form submit  | `React.FormEvent<HTMLFormElement>`       |

উদাহরণ, Form submit:

```
const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault()
}
```

# ৬. এবার তোমার Employee Details page implement করি

তোমার project-এর জন্য আমরা তিনটি জায়গায় TypeScript ব্যবহার করব।

Project structure

src

types

`employee.ts`

api

`employeeApi.ts`

pages

`Details.tsx`

### Step 1: Employee interface তৈরি করো

`src/types/employee.ts`

```
export interface Employee {
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

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}
```

এখন তোমার Employee-এর type এক জায়গায় থাকবে। Create, Edit, Details এবং List page-এ একই type ব্যবহার করতে পারবে।

### Step 2: API function-এ Type ব্যবহার করো

`src/api/employeeApi.ts`

তোমার `getEmployee` function-টি এভাবে লিখতে পারো:

```
import api from './axios'
import type { Employee, ApiResponse } from '@/types/employee'

export const getEmployee = (id: string) => {
  return api.get<ApiResponse<Employee>>(`/employees/${id}`)
}
```

এখানে `api.get<ApiResponse<Employee>>` দিয়ে Axios-কে জানিয়ে দিচ্ছি, API response-এর structure কী হবে।

ফলে:

```
const response = await getEmployee(empId)

response.data.success
response.data.message
response.data.data.name
response.data.data.id
```

সব জায়গায় TypeScript type checking পাবে।

তোমার Axios instance-এর filename যদি `axios.ts` না হয়ে `api.ts` বা অন্য কিছু হয়, import path সেই অনুযায়ী দেবে।

### Step 3: Details.tsx-এ State-এর Type ব্যবহার করো

এবার তোমার Details page-এর মূল code:

```
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getEmployee } from '@/api/employeeApi'
import type { Employee } from '@/types/employee'

function Details() {
  const { empId } = useParams()

  const [employee, setEmployee] = useState<Employee | null>(null)

  const [loading, setLoading] = useState<boolean>(true)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEmployee = async () => {
      if (!empId) {
        setError('Employee ID not found')
        setLoading(false)
        return
      }

      try {
        const response = await getEmployee(empId)

        setEmployee(response.data.data)
      } catch (error) {
        console.log(error)
        setError('Failed to load employee')
      } finally {
        setLoading(false)
      }
    }

    fetchEmployee()
  }, [empId])

  if (loading) {
    return <div className="p-5">Loading...</div>
  }

  if (error) {
    return <div className="p-5 text-red-500">{error}</div>
  }

  if (!employee) {
    return <div className="p-5">Employee not found</div>
  }

  const details = [
    { label: 'Full Name', value: employee.name },
    { label: 'Email', value: employee.email },
    { label: 'Phone', value: employee.phone },
    { label: 'Department', value: employee.department },
    { label: 'Position', value: employee.position },
    { label: 'Join Date', value: employee.joining_date },
    { label: 'Status', value: employee.status },
  ]

  return (
    <div className="p-5">
      <div className="overflow-hidden rounded-xl border bg-white">

        <div className="flex items-center gap-5 border-b px-8 py-6">
          {employee.photo ? (
            <img
              src={employee.photo}
              alt={employee.name}
              className="h-24 w-24 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-2xl">
              {employee.name.charAt(0)}
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold">
              {employee.name}
            </h2>

            <p className="text-sm text-slate-500">
              {employee.position}
            </p>
          </div>
        </div>

        <div className="border-b px-8">
          <div className="inline-block border-b-2 border-blue-500 py-4 font-semibold text-blue-600">
            Details
          </div>
        </div>

        <div>
          {details.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-2 border-b border-slate-100 px-8 py-5 last:border-0"
            >
              <p className="text-sm font-medium text-slate-500">
                {item.label}
              </p>

              <p className="text-sm font-medium text-slate-700">
                {item.value || 'N/A'}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Details
```

## ৭. এখন তোমার Details page-এ কী কী TypeScript ব্যবহার হলো?

| Code                    | কাজ                          |
| ----------------------- | ---------------------------- |
| `Employee`              | Employee object-এর structure |
| `Employee \\| null`     | Employee object অথবা null    |
| `boolean`               | Loading true/false           |
| `string \\| null`       | Error message অথবা null      |
| `ApiResponse<Employee>` | API response-এর structure    |
| `empId`                 | Route parameter              |
| `import type`           | শুধু TypeScript type import  |

### ৮. একটি গুরুত্বপূর্ণ বিষয়: Type Narrowing

তোমার code-এ এই অংশটি লক্ষ্য করো:

```
if (!employee) {
  return <div>Employee not found</div>
}
```

এর আগে TypeScript জানে:

```
employee: Employee | null
```

কিন্তু এই condition-এর পরে TypeScript বুঝতে পারে, `employee` আর null নয়।

তাই নিচের code-এ error হবে না:

```
employee.id
employee.name
employee.email
```

এটাকে বলে Type Narrowing।

## ৯. তোমার জন্য ছোট Practice

এবার নিজে চেষ্টা করো। আমি প্রশ্ন দিচ্ছি, তুমি উত্তর দেবে।

TypeScript Knowledge Check

0/4 answered

1\. একটি number-এর array রাখার জন্য কোনটি সঠিক?

useState\<number>([])

useState\<number[]>([])

useState\<string[]>([])

2\. Employee object অথবা null রাখার জন্য কোন type সঠিক?

Employee

Employee | null

Employee[]

3\. Input-এর onChange event-এর সঠিক type কোনটি?

React.MouseEvent\<HTMLInputElement>

React.ChangeEvent\<HTMLInputElement>

React.FormEvent\<HTMLFormElement>

4\. API থেকে একাধিক Employee এলে data-এর type কী হবে?

ApiResponse\<Employee>

ApiResponse\<Employee[]>

Employee | null

Check Answers

আমার পরামর্শ: এখন থেকে তোমার React project-এ `any` ব্যবহার না করে প্রথমে interface তৈরি করবে। তারপর State, Props এবং API response-এ সেই type ব্যবহার করবে।

পরবর্তী ধাপে তোমার Employee Create এবং Edit form-এও একই TypeScript পদ্ধতি implement করতে পারি।