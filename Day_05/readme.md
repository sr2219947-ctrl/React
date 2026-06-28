# React Day_05 Notes 🚀
## Counter App using useState Hook (Increment & Decrement)

## Topics Covered

- React Event Handling
- onClick Event
- useState Hook
- State Management
- Re-rendering
- Increment and Decrement Logic
- React DOM Updates
- Interview / Viva Questions

---

# 1. Event Handling in React

React handles events using event handlers.

Example:

```jsx
<button onClick={incrementnumber}>
Increment
</button>
```

`onClick` is a React event handler.

The function passed to it executes only when the user clicks the button.

Example:

```jsx
function incrementnumber(){

console.log("button clicked")

}
```

---

# 2. Why use React instead of direct DOM manipulation?

Without React:

```javascript
document.querySelector("h1").innerText=count;
```

Developer has to manually update every UI element.

Problem:

- More code
- Difficult to manage
- Not optimized for large applications


React approach:

Developer changes state.

React automatically updates the required UI.

---

# 3. useState Hook

`useState` is a React Hook used to store and update data in a component.

Import:

```javascript
import {useState} from "react"
```

Syntax:

```javascript
const [state, setState] = useState(initialValue);
```

Example:

```javascript
let [count,setCount]=useState(0);
```

Here:

`count` → current state value

`setCount` → function used to update state

`0` → initial value

Initially:

```
count = 0
```

---

# 4. Counter Example

```jsx
function Counter(){

let [count,setCount]=useState(0);


function incrementnumber(){

setCount(count+1);

}


function decrementnumber(){

setCount(count-1);

}


return(
<div>

<h1>
Count is: {count}
</h1>


<button onClick={incrementnumber}>
Increment
</button>


<button onClick={decrementnumber}>
Decrement
</button>


</div>
)

}
```

---

# 5. How Increment Works

Initial:

```
count = 0
```

User clicks Increment.

Function runs:

```javascript
setCount(count+1)
```

Calculation:

```
setCount(0+1)
```

New state:

```
count = 1
```

React re-renders component.

Now UI shows:

```
Count is: 1
```

---

# 6. How Decrement Works

Initial:

```
count = 5
```

Click decrement:

```javascript
setCount(count-1)
```

Calculation:

```
setCount(5-1)
```

New state:

```
count = 4
```

UI updates:

```
Count is: 4
```

---

# 7. Important useState Concept

Calling setState does not directly change the variable.

Example:

```javascript
setCount(5)
```

It tells React:

"Update state value and render component again."

---

# 8. Re-render Flow

Flow:

```
Initial Render

count = 0

        |
        |
User clicks button

        |
        |
incrementnumber()

        |
        |
setCount(count+1)

        |
        |
React updates state

        |
        |
Component renders again

        |
        |
UI shows new value
```

---

# 9. Multiple States Example

In our counter:

```javascript
let [count,setCount]=useState(0);

let [incValue,setIncValue]=useState(0);

let [decValue,setDecValue]=useState(0);
```

Three different states:

count:
- actual counter value


incValue:
- number of increment button clicks


decValue:
- number of decrement button clicks


---

# 10. Increment Button Code

```javascript
function incrementnumber(){

setCount(count+1);

setIncValue(incValue+1);

}
```

First line:

Updates actual count.

Second line:

Counts increment button clicks.

---

# 11. Decrement Button Code

```javascript
function decrementnumber(){

setCount(count-1);

setDecValue(decValue+1);

}
```

First line:

Decreases counter value.

Second line:

Counts decrement clicks.

---

# 12. Why not modify state directly?

Wrong:

```javascript
count=count+1
```

Because React does not know that UI should update.


Correct:

```javascript
setCount(count+1)
```

React gets notified and updates UI.

---

# 13. React DOM Concept

React manages DOM updates internally.

Developer focuses on:

- UI
- Components
- State


React decides:

- What needs updating
- When to update

---

# Viva / Interview Questions ⭐

## Q1. What is useState?

Answer:

useState is a React Hook that allows functional components to store and update state.

---

## Q2. What does useState return?

Answer:

It returns an array containing:

1. Current state value
2. State update function

Example:

```javascript
[count,setCount]
```

---

## Q3. What happens when setCount is called?

Answer:

React updates the state value and re-renders the component.

---

## Q4. Why should we not directly modify state?

Answer:

Because React tracks state updates through setter functions. Direct modification does not trigger re-render.

---

## Q5. Difference between props and state?

Props:
- Passed from parent component
- Read-only


State:
- Managed inside component
- Can change using setter function


---

# Key Learnings ⭐

1. React uses event handlers like onClick.
2. useState stores component data.
3. State update triggers re-render.
4. Never modify state directly.
5. setState functions update UI automatically.
6. React manages DOM updates efficiently.
7. Each state variable has its own setter function.
8. Functional components use Hooks for state management.

---

# Day 05 Completed ✅
