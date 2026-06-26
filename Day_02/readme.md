# Day 02 - React Basics

## 1. CDN (Content Delivery Network)

A CDN is a network of servers that delivers files (JavaScript, CSS, images, etc.) from the server nearest to the user. It helps websites load faster.

---

## 2. React Rendering

When React renders a new element into the root element, the previous content is replaced.

Example:

```javascript
root.render(<h1>Hello</h1>);
root.render(<h2>Welcome</h2>);
```

Output:

```
Welcome
```

The previous `<h1>` disappears because React replaces the old UI with the new one.

---

## 3. How to Show Multiple Elements?

If we want both elements to appear, we must wrap them inside a single parent element.

Example:

```jsx
<div>
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

React components should return a single parent element.

---

## 4. Problem with Nested HTML

Suppose we have this HTML structure:

```html
<div>
    <div>
        <h1>
            <p></p>
        </h1>
    </div>
</div>
```

Creating this structure using `React.createElement()` becomes difficult and lengthy.

### Solution

Use **JSX**.

JSX allows us to write HTML-like syntax inside JavaScript, making React code much easier to read and write.

---

## 5. What is a Bundler?

A bundler combines all project files and optimizes them for production.

Popular bundlers:

* Parcel
* Vite
* Webpack

Benefits:

* Combines files
* Optimizes code
* Faster loading
* Production-ready build

---

## 6. package.json

`package.json` is a configuration file that contains information about the project.

It stores:

* Project name
* Version
* Scripts
* Dependencies
* Project metadata

---

## 7. What is npm?

npm stands for **Node Package Manager**.

It is the largest registry of JavaScript packages.

Using npm, we can install packages such as:

* React
* React DOM
* Parcel
* TypeScript
* Express
* Lodash

Example:

```bash
npm install react
```

---

## Key Points Learned Today

* What is CDN?
* Why React replaces previous content while rendering.
* Why React needs a single parent element.
* JSX makes writing UI easier.
* What is a bundler and why it is used.
* What is `package.json`.
* What is npm and how it manages JavaScript packages.
