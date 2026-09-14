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

* analysis & get skeleton from sketch
* only structure
* skeleton to code (visual in browser)
* main contend dynamically
* route setup & route mapping for parent & child 
* route render in app.vue & layout component


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

- Dynamically main content : 

actually eita hocche - ami jodi /dash a click kore, dash er content dekhabe, jodi /emp click kori tobe, emp er content dekhabe 


setar jonno need route, route install - `pnpm add vue-router`

after install, create route object, then route register in project (main.ts)

then, router er content dekhar jonno, routeView use kora in app.vue page.

jehetu amar layout er sob endpoint after login hobe, so parent a layout component thakbe aar children a jar jar endpoint er contnent dekhabe 

like: 

`/` ei endpoint dile dashboard er content dekhabe : so eita parent route ja app.vue a dekha jabe 
`/emp` dile employee list er content dekhabe , same to `/new-emp /new-department /list` etc  : eigulo child so, ei content gulo appLayout a dekha jabe

`/login` parent route, but er design alada hobe, tai eita app.vue a dekhabe.

* route a jei component gulo, obossoi `page/views` a rakhbo aar sei page other kichu jokhon use korbo tokhon seikhane `component` use korbo.


## how to show content from route

RouterView -- parent in app.vue & children in particular component / layout

1st app.vue run in application then render routerView placeholder.


4. Theme & token create 

## token create - in src/styles/tokens.css

so, tokens gulo ber korte hobe, eita AI er help niye / ux er kache theke niye nibo.

pi : `need token /Users/softzino/Documents/ART4/chat-widget-project/frontend-project/sketch/emp.png for tokens.css  and i want to add prefix emp` 

then i get -  Colors, Typography, Spacing & Layout, Border Radius & Shadows, Components (all 9 screens covered)

claude: `emp.png[Image #1] i need token for claude.css and add prefix emp`

then i get, everything

ami pi & claude diye try korlam, pore caile chatgpt diye o korte paro.

## Theme
- now theme create to map tailwindcss with tokens
- Maps emp design tokens → Tailwind CSS v4 @theme

pi: ` now, i want to create theme.css to mapping tokens.css with tailwindcss`

apatoto ja create korlam, seta thak actully output jokhon dekhbo, tokhon check korbo, thik ache kina, or kichu changes lagbe kina

### must be test 

- mapping ta ki actually tailwind ke represent kore kina!!


5. ui component 


kaj korte jeye kono base component jokhon lagbe tokhon, shadcn niye base compnent niye kaj korbo

6. base component

