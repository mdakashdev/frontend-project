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

3. Layout skeleton & structure

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

* svg icon - lucid
* base component - shadcn


- note: `ui-component` er kaj korte jeye kono base component jokhon lagbe tokhon, shadcn niye base compnent niye kaj korbo


> small small part niye think korte hobe, now ami `sidebar` niye think kori. 3 ta part ache, 1. logo 2. nav 3. user pic & name

1. logo
logo er jonno svg use korlam
svg designer er kahce theke pete pari. or library or website theke nite pari
https://lucide.dev/
https://simpleicons.org/

svg file ta assets a rakhalam then component a import kore use korlam

amra icon er jonno or svg er jonno lucid install korbo then use korbo

2. nav

install- `pnpm add lucide-vue-next`

import { Users, Settings } from 'lucide-vue-next' kore then use korte hobe

eigulo ekekta component - like: <Settings :size="20" />


sidebar niye kaj korar somai dekhlam main bisoi chilo - `icon` ja lucid library diye solve korechi.

then changellenge chilo 3 ta part ke alada kore class deya, ja `flex flex-col` diye solve korechi, flex hocche magical class

particular kono part a css class dekte hole- tailwind a cole jabe, then example dekhe class add kore dibe or screenshop or image diye ai er kache theke 

jene nite parbe.

3. user & pic

done

> now, next chunk header niye kaj korbo. 2 ta part 1. search 2. user & logout 

```text
- ami jokhon header er design korte gelam, dekhlam 3 ta part ache, search, bell, user-& logout
- ami structure korte pari, div niye part kore, then flex use kore korlam, ami jani search er jonno input field lagbe setar basic kaj korlam
- but jokhon actually css class gulo lagbe tokhon, hoi amake sketch file dhore map gulo nite hobe, or AI diye kore nite hobe.
```
* ami ei css gulo, obossoi AI er help niye kore nibo. so, structure nije aar actually css from AI

---
when i was working on header, then i get `input field` which is base component. 

input field akta re usable component, ja onek jaigai use hobe, seta ami nije korte pari or 2nd option - shadcn use kora.

so, i decided base component for - shadcn.

## shadcn

install - `pnpm dlx shadcn-vue@latest init`

note: compilerOptions na thakle, **root `tsconfig.json` a compilerOptions add korte hobe.

then, now amader need input field, so input install korbo. `pnpm dlx shadcn-vue@latest add input`

then, input field use in header component. so Input component ব্যবহার korlam from shadcn-vue 

> now, dashboard page niye kaj korbo.

dashboard kaj korte jeye -full layout er background color and border er jonno kaj korlam, so eita agei korte hobe.

after theme & token, before ui component - you should layout backgorund and border niye kaj kora. 

ami theme theke theke variable use korechi. for background and border 

- before work dashboard, click dashboard menu and active color. blue (eikhanei theme ta buje nib)

> menu bar and active color.

sei jonno `RouterLink` use korlam for link then active color use korlam and kichu css er jonno class use korlam.

> now dashboard page er kaj korbo

- heading - done
- card - eita reusable so, amra ekhon card compnent crete korbo. src/component/Card.vue
- card component korechi, using props

- shadcn er card component ache - https://www.shadcn-vue.com/docs/components/card#installation
- seta niye akta try korte paro, then other things.

> graph / char

graph er jonno amra popular library use korbo - `vue3-apexcharts` and `appexcharts`

install - `pnpm add apexcharts vue3-apexcharts`

> shadcn card

install - `pnpm dlx shadcn-vue@latest add card`

we got card component, akta mojar bisoy - 

এখানে তোমার package.json-এ shadcn-vue নামে কোনো package dependency যোগ হয় না।

তাহলে pnpm dlx কী করছে? pnpm dlx মূলত package-টা temporary ভাবে download করে command হিসেবে execute করে।

dashboard component a card perfectly use korlam 

---

6. Base component

- note: `ui-component` er kaj korte jeye kono base component jokhon lagbe tokhon, shadcn niye base compnent niye kaj korbo

input field er jonno shadcn-vue use korlam.

install - `pnpm dlx shadcn-vue@latest init`

note: compilerOptions na thakle, **root `tsconfig.json` a compilerOptions add korte hobe.

then, now amader need input field, so input install korbo. `pnpm dlx shadcn-vue@latest add input`

then, input field use in header component. so Input component ব্যবহার korlam from shadcn-vue


# question 

tailwind css test
amar theme diye test (ja mapping korechi)
shadcn er css diye test (shadcn jei base component ta use kortechi tar css kothai theke asche or mappning) - mane design compatible
theme theke keno , kivabe use korbo ta jante hobe.

- ki ki tool use korechi ta, shortlist korbo.

# Note

- css er jonno always - AI theke help niyechi, specially tailwind css