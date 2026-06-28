# React Day_04 Notes 🚀

## Topics Covered

- JSX
- JSX Expressions
- JSX Rules
- Components
- Props
- Export and Import
- React DOM
- Array Sorting
- Reference Concept
- State Updates
- Interview Key Points

---

# 1. JSX (JavaScript XML)

JSX is a syntax extension of JavaScript that allows us to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>
```

JSX is not HTML.

React converts JSX into JavaScript instructions during compilation.

Example:

```jsx
<h1>Hello</h1>
```

becomes:

```javascript
React.createElement("h1",null,"Hello")
```

---

# 2. JSX Expressions `{ }`

Expressions are used inside JSX to display dynamic values.

Allowed:

- String
- Number
- Array
- Variables
- Function results
- Object properties

Example:

```jsx
const name="Sakshi";

function Greet(){

return <h1>Hello {name}</h1>

}
```

---

# 3. Object Rendering in JSX

Direct object rendering is not allowed.

Wrong:

```jsx
const user={
name:"Sakshi",
age:22
}

<h1>{user}</h1>
```

React cannot render plain objects directly.

Correct:

```jsx
<h1>{user.name}</h1>
```

---

# 4. JSX Expressions vs Statements

JSX accepts expressions, not statements.

Expression returns a value.

Example:

```javascript
10+20
```

returns:

```
30
```

Statements perform actions.

Example:

```javascript
if(x>5){
console.log("hello")
}
```

Statements cannot be directly written inside JSX.

Use ternary:

```jsx
<h1>{x>5 ? "Hello" : "Bye"}</h1>
```

---

# 5. Arrays in JSX

Arrays can be rendered in JSX.

Example:

```jsx
const arr=[20,30,"React"]

<h1>{arr}</h1>
```

For lists React commonly uses:

```javascript
arr.map()
```

---

# 6. React Component

Component is a reusable piece of UI.

Example:

```jsx
function Greet(){

return <h1>Hello</h1>

}
```

Usage:

```jsx
<Greet/>
```

---

# 7. Component Naming Rule

Components start with capital letters.

Correct:

```jsx
function Header(){

}
```

Wrong:

```jsx
function header(){

}
```

Reason:

Lowercase names are treated as HTML tags.

---

# 8. JSX Attributes

Example:

```jsx
<h1 id="title">
Hello
</h1>
```

HTML:

```
class=""
```

JSX:

```
className=""
```

---

# 9. Props in React

Props pass data from parent to child component.

Example:

```jsx
<Greet name="Sakshi" age="22"/>
```

React creates:

```javascript
props={
name:"Sakshi",
age:"22"
}
```

Component:

```jsx
function Greet(props){

return <h1>{props.name}</h1>

}
```

Props are read-only.

---

# 10. Export and Import

## Default Export

Only one default export per file.

```javascript
export default data;
```

Import:

```javascript
import data from "./file"
```

No curly braces.

---

## Named Export

Multiple named exports allowed.

```javascript
export function greet(){

}

export function meet(){

}
```

Import:

```javascript
import {greet,meet} from "./file"
```

---

# 11. Rename Import

```javascript
import {greet as hello} from "./file"
```

---

# 12. React DOM

React DOM connects React components with browser DOM.

React updates only required UI changes efficiently.

---

# 13. Array Sorting

Problem:

```javascript
let arr=[30,10,20]

arr.sort()
```

sort changes original array.

Create copy:

```javascript
let sorted=[...arr]

sorted.sort()
```

---

# 14. Stack and Heap Reference

Primitive values store values directly.

Arrays and objects store reference.

Example:

```javascript
let arr=[10,20,30]
```

Stack stores reference.

Heap stores actual data.

---

# 15. React State Update

React checks if state value changed.

Example:

```javascript
setCount(0)
```

If previous value is also 0, React may skip update.

---

# 16. Array State Update

Wrong:

```javascript
setArr(arr)
```

Same reference.

Correct:

```javascript
let newArr=[...arr]

setArr(newArr)
```

New reference causes React update.

---

# Interview / Viva Key Learnings ⭐

1. JSX is a JavaScript syntax extension.
2. JSX accepts expressions, not statements.
3. Objects cannot be directly rendered.
4. Components start with capital letters.
5. Props are read-only objects.
6. Default export is one per file.
7. Named exports can be multiple.
8. React DOM updates UI efficiently.
9. Never modify state directly.
10. Arrays and objects need new references.
11. Spread operator creates shallow copies.
12. map() is used for rendering lists.

---

# Day 04 Completed ✅
