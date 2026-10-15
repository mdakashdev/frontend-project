# Layout

- `Question` Layout কখন চিন্তা করব, কেন করব, আর React Router-এর মধ্যে কীভাবে implement করব?

যখন একাধিক page-এর মধ্যে common UI থাকে, তখন layout চিন্তা করবে।

তোমার application-এ ৪টা page আছে: Sidebar, Dashboard, Employees, Settings

এখানে Header ও Sidebar সব page-এ একই থাকবে, `শুধু Page Content বদলাবে।`

তাই একটা shared AppLayout তৈরি করাই ভালো।


- AppLayout.tsx-কে layouts/ folder-এ রাখবে। কারণ এর কাজ হলো একাধিক page-এর common structure ধরে রাখা।
- Outlet হলো মূল বিষয়। এর জায়গায় active route-এর page render হবে।
- এখানে index: true মানে / URL-এ Dashboard দেখাবে।
