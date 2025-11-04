---
title: "Selecting Elements"
description: "querySelector, getElementById, and more"
type: "reading"
duration: "25 min"
day: 6
order: 2
nextLesson: "modifying-elements"
---

# Selecting Elements

Before you can change the DOM, you need references to the elements you care about. Today you’ll learn the most common selection methods, how CSS selectors power them, and when to pick each tool.

## Step 1: The `document` Object

- `document` is your gateway to the DOM.
- Selection methods return single elements, collections, or live lists.
- Always guard against `null` results—your selector might not match anything.

## Step 2: `getElementById`

Fastest when you know the unique ID.

```html
<h1 id="title">Dashboard</h1>
```

```javascript
const heading = document.getElementById("title");
console.log(heading); // <h1 id="title">Dashboard</h1>
```

- Returns a single element or `null`.
- IDs must be unique, so this is great for top-level anchors.

## Step 3: `querySelector`

Accepts any CSS selector and returns the first match.

```javascript
const firstCard = document.querySelector(".card");
const navLink = document.querySelector("nav a.active");
```

- Supports complex selectors (descendant, attribute, pseudo-classes).
- Useful when multiple elements share class names but you only need one (e.g., the first match).

## Step 4: `querySelectorAll`

Returns a static `NodeList` of every match.

```javascript
const buttons = document.querySelectorAll("button.primary");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

- `NodeList` supports `forEach`, spread syntax, and indexing.
- Static means it won’t auto-update if the DOM changes after selection.

## Step 5: Legacy Collections

- `getElementsByClassName("card")`
- `getElementsByTagName("li")`

These return live `HTMLCollection` objects that update as the DOM changes. Still useful, but be mindful that they don’t support `forEach` directly—convert with `Array.from(...)` if needed.

## Step 6: Traversing Relationships

Once you have an element, move relative to it.

```javascript
const card = document.querySelector(".card");

const parent = card.parentElement;
const children = card.children;
const firstChild = card.firstElementChild;
const next = card.nextElementSibling;
```

- Use traversal to stay scoped and avoid querying the entire document repeatedly.

## Step 7: Guarding Against `null`

Selections can fail—always check before using the result.

```javascript
const banner = document.querySelector(".banner");

if (banner) {
  banner.classList.add("visible");
} else {
  console.warn("Banner not found");
}
```

This prevents runtime errors when elements don’t exist or load conditionally.

## Step 8: Selecting Within Containers

Query a specific subtree to limit matches.

```javascript
const sidebar = document.querySelector(".sidebar");
const links = sidebar.querySelectorAll("a");
```

- Helpful in components where class names repeat.
- Improves performance on large pages.

## Step 9: Practice Prompts

1. Select the element with ID `hero` and log its `textContent`.
2. Use `querySelectorAll` to grab all checkboxes inside a form and print how many are checked.
3. Convert `document.getElementsByClassName("card")` into an array and remove the `"hidden"` class from each.
4. Implement a function `findNavLinks(containerSelector)` that returns all `<a>` elements inside the chosen container.

## Key Takeaways

- ✅ `getElementById` is fastest for unique elements; `querySelector`/`querySelectorAll` handle flexible CSS selectors.
- ✅ `NodeList` from `querySelectorAll` is static; legacy collections are live.
- ✅ Check for `null` before using selected elements.
- ✅ Scope queries within components to keep DOM work efficient.

---

## 🎯 Quick Check

1. When should you prefer `getElementById` over `querySelector`?
2. How do you iterate over the results of `querySelectorAll`?
3. What’s the difference between a live `HTMLCollection` and a static `NodeList`?
4. How can you select only the links inside a specific navigation bar?

Next lesson: modify content, attributes, and styles once you’ve grabbed the right elements. 🎨
