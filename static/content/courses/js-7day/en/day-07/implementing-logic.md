---
title: "Implementing JavaScript Logic"
description: "Bringing your app to life"
type: "reading"
duration: "45 min"
day: 7
order: 3
nextLesson: "testing-debugging"
---

# Implementing JavaScript Logic

You’ve planned and built the interface—now connect the dots with JavaScript. Today’s session ties together everything you’ve learned: data structures, DOM manipulation, event handling, and persistence.

## Step 1: Initialize State

- Import or define your data model (e.g., tasks, goals, entries).
- Establish state variables (`const state = { tasks: [], filters: {} }`).
- Seed with sample data so the UI renders immediately.

```javascript
const state = {
  tasks: [
    { id: crypto.randomUUID(), title: "Write project outline", done: false },
    { id: crypto.randomUUID(), title: "Design UI components", done: true }
  ],
  filter: "all"
};
```

## Step 2: Reference DOM Hooks

- Cache selectors for sections you’ll update often.
- Use descriptive constants to avoid repetitive `querySelector` calls.

```javascript
const taskList = document.querySelector("[data-role='task-list']");
const taskTemplate = document.querySelector("#task-template");
const summary = document.querySelector("[data-role='summary']");
```

## Step 3: Render Functions

Create reusable functions that render parts of the UI based on state.

```javascript
function renderTasks() {
  taskList.innerHTML = "";

  const filtered = state.tasks.filter((task) => {
    if (state.filter === "completed") return task.done;
    if (state.filter === "active") return !task.done;
    return true;
  });

  filtered.forEach((task) => {
    const li = taskTemplate.content.cloneNode(true);
    const item = li.querySelector(".task");
    item.dataset.id = task.id;
    li.querySelector(".task-title").textContent = task.title;
    li.querySelector(".task-toggle").checked = task.done;
    taskList.append(li);
  });
}
```

- Keep rendering pure—read from state, update DOM, no side effects beyond display.

## Step 4: Bind Event Handlers

- Form submissions for creating items
- Click/toggle events for updating state
- Delegation for dynamic lists

```javascript
const form = document.querySelector("[data-role='task-form']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title").trim();
  if (!title) return;

  state.tasks.push({
    id: crypto.randomUUID(),
    title,
    done: false
  });

  form.reset();
  sync();
});

taskList.addEventListener("change", (event) => {
  const toggle = event.target.closest(".task-toggle");
  if (!toggle) return;
  const id = toggle.closest(".task").dataset.id;
  const task = state.tasks.find((item) => item.id === id);
  if (!task) return;
  task.done = toggle.checked;
  sync();
});
```

- Funnel all modifications through a single `sync()` function to keep updates consistent.

## Step 5: Derived Data and Summaries

Compute progress metrics whenever state changes.

```javascript
function renderSummary() {
  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.done).length;
  summary.textContent = `Completed ${completed}/${total}`;
}
```

- Call summary rendering inside `sync()` alongside other UI updates.

## Step 6: Persistence (Optional but Powerful)

Use `localStorage` to save and restore the state.

```javascript
const STORAGE_KEY = "momentum-tracker";

function load() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  Object.assign(state, JSON.parse(saved));
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function sync() {
  renderTasks();
  renderSummary();
  save();
}

load();
sync();
```

- Guard against parsing errors and outdated schemas.

## Step 7: Handle Filters and Views

- Add buttons or select menus to toggle filters.
- Update `state.filter` and call `sync()` to re-render.
- Highlight the active filter in the UI.

```javascript
document.querySelectorAll("[data-role='filter']").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document
      .querySelectorAll("[data-role='filter']")
      .forEach((btn) => btn.classList.toggle("active", btn === button));
    sync();
  });
});
```

## Step 8: Polish and Test

- Test keyboard navigation (tab order, Enter/Space triggers).
- Validate empty states, edge inputs, rapid clicking.
- Ensure states persist on refresh if you implemented storage.
- Fix any console warnings or errors before showcasing your project.

## Step 9: Prepare the Demo

- Craft a short walkthrough explaining the problem, core features, and highlight interactions.
- Capture screenshots or GIFs if you can’t present live.
- Note stretch goals you’d pursue with more time.

## Key Takeaways

- ✅ Centralize state and rendering logic to keep code predictable.
- ✅ Reuse selection, rendering, and event patterns from earlier days.
- ✅ Persistence elevates the project—`localStorage` is a quick win.
- ✅ A polished experience requires testing interactions and accessibility.

---

## 🎯 Quick Check

1. Where do you store your app state, and how do you update it?
2. How does `sync()` (or your equivalent) keep the UI and state aligned?
3. What persistence strategy did you choose, if any?
4. Which user flows will you demonstrate during your final presentation?

Congratulations on reaching the final day! Celebrate your progress and share what you’ve built. 🎉
