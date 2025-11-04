---
title: "Modifying Elements"
description: "Changing content, styles, and attributes"
type: "reading"
duration: "30 min"
day: 6
order: 3
nextLesson: "event-handling"
---

# Modifying Elements

Once you can select DOM elements, it’s time to update their content, attributes, and styling. Today you’ll manipulate text, HTML, classes, inline styles, and even create new nodes on the fly.

## Step 1: Updating Text

```javascript
const heading = document.querySelector("h1");
heading.textContent = "Welcome back!";
```

- `textContent` replaces all text inside the element.
- It treats content as plain text—HTML tags are escaped.

## Step 2: Inserting HTML

```javascript
const hero = document.querySelector(".hero");
hero.innerHTML = "<strong>New message</strong> for learners!";
```

- `innerHTML` parses the string as HTML. Use it carefully to avoid XSS vulnerabilities if content comes from users.
- Prefer DOM methods (`createElement`, `append`) when building complex structures programmatically.

## Step 3: Appending and Prepending Content

```javascript
const list = document.querySelector(".tasks");

const li = document.createElement("li");
li.textContent = "Review iteration methods";
list.append(li); // adds to end

const first = document.createElement("li");
first.textContent = "Check notifications";
list.prepend(first); // adds to start
```

- `append` and `prepend` accept nodes or strings.
- `appendChild` is similar but only accepts nodes.

## Step 4: Removing Elements

```javascript
const banner = document.querySelector(".banner");
banner.remove();
```

- `remove()` deletes the node from its parent.
- Alternatively, call `parent.removeChild(child)` for older browser support.

## Step 5: Working with Attributes

```javascript
const link = document.querySelector("a.cta");

link.setAttribute("href", "https://devsteps.io");
link.setAttribute("target", "_blank");

console.log(link.getAttribute("href"));
```

- `setAttribute`, `getAttribute`, and `removeAttribute` provide generic access.
- For common attributes, you can use properties (`link.href`, `link.id`) as well.

## Step 6: Managing Classes

```javascript
const card = document.querySelector(".card");

card.classList.add("highlight");
card.classList.remove("hidden");
card.classList.toggle("active");
card.classList.replace("old", "new");

console.log(card.classList.contains("active"));
```

- `classList` offers convenient methods for class manipulation.
- `toggle("active", condition)` lets you add/remove based on a boolean.

## Step 7: Inline Styles

```javascript
const alertBar = document.querySelector(".alert");

alertBar.style.backgroundColor = "#2563eb";
alertBar.style.color = "#fff";
alertBar.style.padding = "12px";
```

- Use camelCase property names (e.g., `backgroundColor`).
- Inline styles override stylesheets; prefer CSS classes for consistent themes.

## Step 8: CSS Custom Properties

```javascript
document.documentElement.style.setProperty("--accent", "#f97316");
```

- Set global CSS variables via `setProperty` on `style`.
- Retrieve with `getComputedStyle(document.documentElement).getPropertyValue("--accent")`.

## Step 9: Practice Prompts

1. Replace the text inside an element with ID `status` to `"All caught up!"`.
2. Append a new `<li>` item labeled `"Book review"` to a list with class `.reading-list`.
3. Toggle a `"dark-mode"` class on `body` when a checkbox is checked.
4. Update an image’s `src` and `alt` attributes to display a new illustration.
5. Set a CSS custom property `--primary` and apply it to highlight a banner.

## Key Takeaways

- ✅ `textContent` for safe text, `innerHTML` for HTML snippets (with caution).
- ✅ Create nodes with `document.createElement` and insert them via `append`, `prepend`, or `appendChild`.
- ✅ Manage classes with `classList` and attributes with `setAttribute`/`getAttribute`.
- ✅ Inline styles and CSS variables let you tweak presentation dynamically.

---

## 🎯 Quick Check

1. When should you prefer `textContent` over `innerHTML`?
2. How do `append` and `appendChild` differ?
3. What does `classList.toggle("active")` do?
4. How can you update a CSS variable from JavaScript?

Next lesson: respond to user actions by wiring up event listeners. 🖱️
