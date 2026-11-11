1. Event কী?
2. Event Type কেন ব্যবহার করি?
3. `React.ChangeEvent<HTMLInputElement>` মানে কী?
4. Common Event Types কী কী?

## ১. Event কী?

React-এ User যখন কোনো HTML Element-এর সঙ্গে Interaction করে, তখন একটি Event তৈরি হয়।

যেমন:

- Input-এ কিছু লিখলে → `onChange`
- Button-এ click করলে → `onClick`
- Form submit করলে → `onSubmit`
- Mouse দিয়ে কোনো element-এর ওপর গেলে → `onMouseEnter`

একটি উদাহরণ:

```
function Search() {
    return (
        <input
            type="text"
            onChange={() => console.log('Input changed')}
        />
    )
}
```

তুমি Input-এ কিছু লিখলেই `onChange` function execute হবে।

## ২. Event Type কেন ব্যবহার করি?

ধরো, তুমি একটি function তৈরি করলে:

```
const handleChange = (event) => {
    console.log(event.target.value)
}
```

এখানে TypeScript জানে না `event`-এর মধ্যে কী কী property আছে।

তাই আমরা Event-এর Type নির্ধারণ করি:

```
const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
) => {
    console.log(event.target.value)
}
```

এখন TypeScript জানে এটি একটি Input-এর Change Event।

## ৩. এবার Type-টা ভেঙে বুঝি

```
React.ChangeEvent<HTMLInputElement>
```

এখানে তিনটি অংশ আছে।

# React

React-এর Event System

# ChangeEvent

কোন ধরনের Event ঘটেছে? Input-এর value পরিবর্তন হয়েছে।

# HTMLInputElement

কোন HTML Element-এ Event ঘটেছে? Input Element-এ।

অর্থাৎ,

`React.ChangeEvent<HTMLInputElement>` = HTML Input Element-এর Change Event-এর Type।

## ৪. সম্পূর্ণ Example দেখি

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
        <div>
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search employee"
            />

            <p>Search: {search}</p>
        </div>
    )
}
```

এখানে কী হচ্ছে?

1. `useState` দিয়ে `search` নামে একটি state তৈরি করেছি।
2. Input-এ কিছু লিখলে `onChange` execute হবে।
3. `event.target.value` দিয়ে Input-এর বর্তমান value পাচ্ছি।
4. `setSearch()` দিয়ে state update করছি।
5. State update হলে UI-তে নতুন value দেখাচ্ছে।

## ৫. Common Event Types

তোমার দেওয়া তালিকাটি সহজভাবে মনে রাখো:

| HTML Element | Event Type                               |
| ------------ | ---------------------------------------- |
| Input        | `React.ChangeEvent<HTMLInputElement>`    |
| Textarea     | `React.ChangeEvent<HTMLTextAreaElement>` |
| Select       | `React.ChangeEvent<HTMLSelectElement>`   |
| Button click | `React.MouseEvent<HTMLButtonElement>`    |
| Form submit  | `React.FormEvent<HTMLFormElement>`       |

প্রতিটি Event Type-এর দুটি বিষয় থাকে:

- Event কী ধরনের? `ChangeEvent`, `MouseEvent`, `FormEvent`
- কোন Element-এ ঘটেছে? `HTMLInputElement`, `HTMLButtonElement`, `HTMLFormElement`

## ৬. এবার Form Submit বুঝি

```
const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
) => {
    event.preventDefault()

    console.log('Form submitted')
}
```

এখানে:

- `FormEvent` = Form-এর Event।
- `HTMLFormElement` = HTML Form Element।
- `preventDefault()` = Browser-এর Default Form Submit Behaviour বন্ধ করে।

## ৭. ছোট্ট Practice

তুমি এবার নিজে উত্তর দেওয়ার চেষ্টা করো।

Question 1: Input-এর value পরিবর্তন হলে কোন Event Type ব্যবহার করবে?

React.MouseEvent\<HTMLInputElement>

React.ChangeEvent\<HTMLInputElement>

React.FormEvent\<HTMLInputElement>



Question 2: Button-এ Click করলে কোন Event Type ব্যবহার করবে?

React.ChangeEvent\<HTMLButtonElement>

React.FormEvent\<HTMLButtonElement>

React.MouseEvent\<HTMLButtonElement>



Question 3: Textarea-এর জন্য কোন HTML Element Type ব্যবহার করবে?

HTMLInputElement

HTMLTextAreaElement

HTMLSelectElement



Check Answers

আমার পরামর্শ: প্রথমে শুধু `ChangeEvent`, `MouseEvent` এবং `FormEvent` ভালোভাবে বোঝো। এগুলো বুঝলে React-এর বেশিরভাগ সাধারণ Event Type ব্যবহার করতে পারবে।

--- 
# Summary 

React-এ User যখন কোনো HTML Element-এর সঙ্গে Interaction করে, তখন একটি Event তৈরি হয়।

sei interaction gulo kora hoi - mouse, keyboard, form, input, drag and drop diye.

like - input a kichu likhe akta interaction hoi - sei interaction ta pick kora hoi - onChange diye,
aar interaction manei akta event ghote, question hocche sei event ta ki? er type ki? amra ki jani!!

aar typescript jane na, event er moddhe ki ki type ache?


setar jonno, amader jante hobe 
- html element er common type : HTMLInputElement, HTMLTextAreaElement, HTMLSelectElement
- jei event ta hoyeche seta kon type er event like - ChangeEvent, MouseEvent, FormEvent
- then type define korte hobe

event a full paitechi
event.target a sei html element pacchi
event.target.value - exact value ta pacchi.


---

#ReactDiary 📘

**React Event এবং TypeScript Event Types বোঝার একটি অভিজ্ঞতা**

React-এ যখন User কোনো HTML Element-এর সঙ্গে Interaction করে, তখন একটি Event ঘটে।

এই Interaction বিভিন্নভাবে হতে পারে:

- Mouse Interaction
- Keyboard Interaction
- Form Interaction
- Input Interaction
- Drag and Drop

যেমন, User যখন কোনো Input Field-এ কিছু লেখে, তখন একটি Change Event ঘটে। React-এ আমরা `onChange` Event Handler দিয়ে সেটি Handle করি।

কিন্তু এখানে আমার মনে একটি প্রশ্ন এসেছিল:

**এই Event আসলে কী? এর Type কী? Event-এর মধ্যে কী কী Information থাকে?**

TypeScript কীভাবে বুঝবে, কোন Event-এর মধ্যে কী ধরনের Information আছে?

এই বিষয়গুলো বুঝতে গিয়ে কয়েকটি বিষয় শিখেছিলাম।

**১. HTML Element-এর Type জানতে হবে**

যেমন:

- `HTMLInputElement`
- `HTMLTextAreaElement`
- `HTMLSelectElement`
- `HTMLButtonElement`
- `HTMLFormElement`

**২. Event-এর Type জানতে হবে**

যেমন:

- `ChangeEvent`
- `MouseEvent`
- `KeyboardEvent`
- `FocusEvent`
- `FormEvent`

**৩. Event-এর Type Define করতে হবে**

```tsx
const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  console.log(event.target.value);
};
```

এখানে:

- `React.ChangeEvent` → কী ধরনের Event ঘটেছে?
- `HTMLInputElement` → কোন HTML Element-এ Event ঘটেছে?
- `event` → সম্পূর্ণ Event Object।
- `event.target` → যে Element-এ Event ঘটেছে।
- `event.currentTarget` → যে Element-এ Event Handler যুক্ত করা হয়েছে।
- `event.target.value` → Input-এর বর্তমান Value।

এভাবে Event Type এবং HTML Element Type একসঙ্গে ব্যবহার করে TypeScript-কে Event সম্পর্কে প্রয়োজনীয় Type Information দেওয়া যায়। React-এর Type Definitions এই Type Information সরবরাহ করে।

**এই ছোট বিষয়টি বুঝতে গিয়ে React Event Handling এবং TypeScript-এর Type System সম্পর্কে আরও পরিষ্কার ধারণা পেয়েছিলাম।**

Learning is a continuous process! 🚀

#ReactJS #TypeScript #ReactDiary #WebDevelopment #LearningJourney