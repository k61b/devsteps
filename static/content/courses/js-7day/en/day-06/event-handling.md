---
title: "Event Handling"
description: "Responding to user interactions"
type: "reading"
duration: "30 min"
day: 6
order: 4
nextLesson: "day-6-gallery-project"
---

# Event Handling

Events connect user actions—clicks, key presses, scrolling—to your JavaScript logic. Today you’ll learn how to add and remove listeners, access event data, control propagation, and make your UI feel responsive.

## Step 1: Adding Event Listeners

```javascript
const button = document.querySelector(".cta");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

- `addEventListener` takes the event type, callback, and optional options.
- Avoid inline `onclick` attributes; listeners keep markup and logic separate.

## Step 2: Using the Event Object

```javascript
button.addEventListener("click", (event) => {
  console.log(event.type); // "click"
  console.log(event.target); // element that fired the event
});
```

- The event object carries metadata like coordinates, key codes, modifier keys, and more.
- Use `event.target` to access the element that triggered the listener.

## Step 3: Preventing Default Behavior

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submission blocked while we validate.");
});
```

- `preventDefault()` stops the browser’s default action (e.g., navigating on anchor click, submitting forms).
- Call it when you need to handle logic manually before allowing the default behavior.

## Step 4: Event Propagation

- Events bubble from the target up through ancestors (`target → parent → document`).
- They also support capturing (top-down) if you pass `{ capture: true }`.

```javascript
document.body.addEventListener("click", () => {
  console.log("Body clicked");
});
```

- Use propagation to handle many child elements with a single listener.

## Step 5: Delegation Pattern

```javascript
const list = document.querySelector(".task-list");

list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  item.classList.toggle("done");
});
```

- Listen on a parent element and act on matching child targets.
- Great for dynamic lists where items are added or removed.

## Step 6: Removing Listeners

```javascript
function handleClick() {
  console.log("Clicked once");
  button.removeEventListener("click", handleClick);
}

button.addEventListener("click", handleClick);
```

- Use named functions so you can remove them later.
- Removing listeners prevents memory leaks in long-lived components.

## Step 7: Keyboard and Input Events

```javascript
const input = document.querySelector("#search");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log(`Searching for ${input.value}`);
  }
});
```

- Check `event.key`, `event.code`, or modifier properties (`event.shiftKey`).
- Use `input` or `change` events to react to value updates.

## Step 8: Passive and Once Options

```javascript
window.addEventListener(
  "scroll",
  () => {
    // update header shadow
  },
  { passive: true }
);

button.addEventListener(
  "click",
  () => console.log("Fire once"),
  { once: true }
);
```

- `passive: true` hints that the listener won’t call `preventDefault`; improves scroll performance.
- `once: true` auto-removes the listener after the first call.

## Step 9: Practice Prompts

1. Add a click listener to a button that toggles a `"visible"` class on a modal.
2. Use event delegation on `.todo-list` so clicking any `<li>` toggles `"completed"`.
3. Block form submission until an input has at least three characters; show an error message.
4. Implement a keydown handler that closes a dialog when `Escape` is pressed.
5. Listen for `scroll` events and add a `"scrolled"` class to the header once the page offset passes 80px.

## Key Takeaways

- ✅ `addEventListener` is the standard way to connect events to logic.
- ✅ Event objects provide context like target elements and key details.
- ✅ Propagation enables delegation; stop it with `stopPropagation()` when necessary.
- ✅ Options like `once` and `passive` fine-tune performance and lifecycle.

---

## 🎯 Quick Check

1. Why is `addEventListener` preferred over inline event attributes?
2. How does event delegation reduce the number of listeners on a page?
3. When would you call `event.preventDefault()`?
4. What do the `once` and `passive` listener options do?

Next lesson: apply everything you’ve learned to build an interactive gallery. 🖼️
