---
title: "What is the DOM?"
description: "Understanding the Document Object Model"
type: "reading"
duration: "15 min"
day: 6
order: 1
nextLesson: "selecting-elements"
---

# What is the DOM?

The Document Object Model (DOM) is the live interface between your JavaScript code and the HTML page. It represents every element as a node in a tree, letting you inspect and manipulate content, structure, and styling at runtime.

## Step 1: From HTML to DOM

- The browser downloads HTML, parses it, and builds a tree of nodes.
- Every tag becomes an element node; text inside tags becomes text nodes.
- JavaScript interacts with this tree, not the raw HTML string.

Visualize a simple file:

```html
<body>
  <h1>Hello</h1>
  <p>Welcome to Day 6!</p>
</body>
```

The DOM turns it into a hierarchical structure with `body` at the root, then `h1` and `p` children, and text nodes inside each element.

## Step 2: DOM Nodes

- **Document node**: the entry point (`document` in JavaScript).
- **Element nodes**: HTML elements like `<div>` or `<button>`.
- **Text nodes**: the actual text content inside elements.
- **Attribute nodes**: metadata such as `class` or `id`.

Understanding node types helps you know which properties and methods are available.

## Step 3: Accessing the DOM

You can query the DOM using selectors and properties:

```javascript
const heading = document.querySelector("h1");
console.log(heading.textContent); // "Hello"
```

- `document` is globally available in the browser.
- Different methods (`querySelector`, `getElementById`, etc.) offer different ways to find elements—more on that next lesson.

## Step 4: Live vs. Static

- The DOM updates when HTML or CSS is added, removed, or modified.
- Your JavaScript changes are reflected immediately in the rendered page.
- Tools like DevTools show this live tree; editing nodes there updates the page instantly.

## Step 5: DOM and JavaScript Relationship

- JavaScript reads properties (`textContent`, `className`, `style`) to understand the current state.
- It writes to those properties or calls methods (`append`, `remove`) to change the page.
- Event listeners connect user actions to code, enabling interactivity.

## Step 6: Common Pitfalls

- Forgetting that the DOM only exists in browser environments (Node.js doesn’t have it by default).
- Running scripts before the DOM is ready—wrap code in `DOMContentLoaded` or place scripts at the end of `<body>`.
- Mixing DOM manipulation with server-side rendering without understanding hydration.

## Step 7: Practice Prompts

1. Open DevTools on any website and inspect the Elements panel; identify the DOM tree structure.
2. In the console, run `document.body` and explore its properties.
3. Create a small HTML page and log `document.title`, `document.URL`, and `document.links.length`.
4. Experiment with `document.body.append("Hello DOM");` to see live updates.

## Key Takeaways

- ✅ The DOM is the browser’s object-based representation of your HTML.
- ✅ JavaScript uses the DOM tree to read and modify page content.
- ✅ Node types (document, element, text, attribute) determine available properties and methods.
- ✅ Understanding the DOM is the foundation for dynamic, interactive interfaces.

---

## 🎯 Quick Check

1. How does the browser convert HTML into the DOM?
2. What’s the difference between an element node and a text node?
3. Why might your JavaScript fail if it runs before the DOM is ready?
4. How can DevTools help you understand the DOM structure?

Next lesson: learn how to select specific elements to start manipulating them. 🎯
