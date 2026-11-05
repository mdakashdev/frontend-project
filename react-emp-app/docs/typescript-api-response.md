## API Response-এর Type

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