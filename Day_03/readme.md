# Day 03 - React Setup, Bundlers & Components

## 1. What is `package.json`?

`package.json` is the configuration file of a Node.js/React project.

It contains:

* Project name
* Version
* Description
* Dependencies
* Scripts
* Project metadata

### Why is `package.json` important?

* Keeps all project dependencies in one place.
* Makes project setup easy using `npm install`.
* Ensures everyone working on the project uses the same package versions.

---

## 2. Initialize a Project

Create a `package.json` file using:

```bash
npm init
```

---

## 3. Versioning in `package.json`

Package versions follow the format:

```text
MAJOR.MINOR.PATCH
```

### Patch Version

* Bug fixes only.
* No new features.
* No breaking changes.

Example:

```text
1.0.0 → 1.0.1
```

---

### Minor Version

* Adds new features.
* Backward compatible.
* Existing code still works.

Example:

```text
1.0.0 → 1.1.0
```

---

### Major Version

* Breaking changes.
* Existing code may stop working.
* Users may need to update their code.

Example:

```text
1.0.0 → 2.0.0
```

---

## 4. Symbols Used in Dependencies

### Caret (^)

Allows updates for:

* Minor versions
* Patch versions

Example:

```text
^1.2.3
```

Can update to:

```text
1.3.0
1.4.5
```

But **not**:

```text
2.0.0
```

---

### Tilde (~)

Allows updates for:

* Patch versions only

Example:

```text
~1.2.3
```

Can update to:

```text
1.2.4
1.2.8
```

But **not**:

```text
1.3.0
```

---

## 5. What is a Bundler?

A bundler combines project files and prepares them for production.

Popular bundlers:

* Parcel
* Vite
* Webpack

### Install Parcel

```bash
npm install -D parcel
```

`-D` means install as a **Development Dependency**.

---

## 6. Role of a Bundler

### 1. Combines Multiple Files

It combines JavaScript, CSS, images and other assets into optimized files.

### 2. Optimizes Performance

* Minification
* Tree Shaking
* Code Splitting

### 3. Handles Dependencies

Automatically resolves imported packages and modules.

### 4. Transpiles Code

Converts modern JavaScript into code that older browsers can understand.

---

## 7. Parcel Commands

### Start Development Server

```bash
npx parcel index.html
```

### Production Build

```bash
npx parcel build index.html
```

---

## 8. Install React

```bash
npm install react
npm install react-dom
```

---

## 9. Import React

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
```

### Why do we import them?

**React**

* Used to create React elements and components.
* Enables JSX support.

**ReactDOM**

* Connects React with the browser.
* Renders React components into the DOM.
* ReactDOM is used to render React components into the browser DOM.
createRoot() creates a React root, and render() displays the React application inside the HTML element (usually the div with id="root")

Example:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

## 10. JSX (JavaScript XML)

JSX lets us write HTML-like syntax inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

---

## 11. JavaScript Inside JSX

Use curly braces `{}` to write JavaScript expressions.

```jsx
const name = "Rana";

<h1>Hello {name}</h1>
```

Objects can also be accessed.

```jsx
const obj = {
    age: 22
};

<h2>{obj.age}</h2>
```

---

## 12. Inline Styling

React uses JavaScript objects for CSS.

```jsx
const styleObj = {
    backgroundColor: "black",
    color: "pink",
    fontSize: "30px"
};

<h2 style={styleObj}>Hello</h2>
```

**Important:** CSS properties use **camelCase**.

Example:

* backgroundColor
* fontSize

---

## 13. React Fragments

Fragments allow multiple elements without adding an extra `<div>`.

```jsx
<>
    <h1>Hello</h1>
    <h2>React</h2>
</>
```

---

## 14. React Elements

A React Element describes what should appear on the screen.

```jsx
const element = <h1>Hello React</h1>;
```

---

## 15. React Components

Components are reusable pieces of UI.

### Function Component

```jsx
function Greet() {
    return <h1>Hello</h1>;
}
```

### Arrow Function Component

```jsx
const Meet = () => {
    return <h2>Hi</h2>;
};
```

---

## 16. Rendering

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
```

**Important:**

Calling `render()` again replaces the previous UI.

```javascript
root.render(element1);
root.render(element2);
```

Only **element2** will be displayed.

---

## 17. Deployment

Deployment means publishing your project on the internet.

Popular platforms:

* Netlify
* Vercel
* GitHub Pages

Basic Steps:

1. Build the project.
2. Push the code to GitHub.
3. Connect the repository.
4. Deploy.
5. Share the live URL.

---

# Key Takeaways

* package.json
* npm
* Semantic Versioning
* Caret (^)
* Tilde (~)
* Bundlers
* Parcel
* React
* ReactDOM
* JSX
* JavaScript inside JSX
* Inline Styling
* React Fragments
* React Elements
* React Components
* Rendering
* Deployment
