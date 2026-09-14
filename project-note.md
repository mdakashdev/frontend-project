1. project init

```
i checkek node version `node -v`, get v22.22.3

project init command - `pnpm create vue@latest`

Use TypeScript? Yes

Select features to include in your project: linter & prettier (initial)

Select experimental features to include in your project: - none

Skip all example code and start with a blank Vue project? Yes
```

2. Tailwind install & configure

```
pnpm add tailwindcss @tailwindcss/vite

vite.config.ts

then @import "tailwindcss" in src/styles/main.css

available for full project - import './styles/main.css' in main.ts 
```

3. Layout skeleton & stracture

layout-এর structural skeleton

Sketch theke think korbo - layout a ki ki lagbe - like: Sidebar, Header and MainContent

- skeleton korar por layout structure ta baniye nibo.
- layouts/applayout
- components/layout/Header, Sidebar
- components/ui

then ami skelton ta visual korar try korbo, not actully follow design only skeleton - sidebar, header and mainContent

mane - code diye skeleton ta kora, sei jonno appLayout a jeye think korbo - akta div niye sidebar, header and main-content

appLayout theke suru hobe.

```
like - 
<div main-div>
div#left
    fully sidebar (sidebar reperesent aside)
div#right
    header
    maincontent
</div>

then, alada kore think korte hobe, left div ke niye; left div er upore akta logo er jaiga ache , tar niche nav ache so,
div#left
 aside
    - div#logo
    - nav
```

aar css korar jonno - first design dekhe widh ta nite parle, sei onujai jaiga chere dile hoye jabe, sathe akta border - enough

aar baki css class gulo need onujai add korbo, no hurry up.
