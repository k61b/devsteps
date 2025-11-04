---
title: "Day 5 Mini Project"
description: "Build a simple todo list manager"
type: "project"
duration: "20 min"
day: 5
order: 5
nextLesson: "what-is-dom"
---

# Day 5 Mini Project: Todo List Manager

Put your arrays and objects knowledge to work by creating a simple todo tracker. You’ll store tasks in an array of objects, practice array iteration methods, and prepare data for future DOM interactions.

## Project Overview

You’ll model todos as objects and build helper functions that:

- Add a new todo
- Toggle a todo’s completed state
- Filter todos by status
- Summarize progress for display

By the end, you’ll have a lightweight data layer that can later power a user interface.

## Step 1: Define the Data Structure

Create `todos.js` (or use a REPL) and start with seed data.

```javascript
const todos = [
  { id: 1, title: "Read array lesson", completed: true },
  { id: 2, title: "Practice array methods", completed: false },
  { id: 3, title: "Draft mini project plan", completed: false }
];
```

- Each todo has an `id`, `title`, and `completed` boolean.
- Use sequential IDs or `Date.now()` when adding new items.

## Step 2: Add Todos

Write a function that accepts a title and appends a new todo object.

```javascript
function addTodo(list, title) {
  const nextId = list.length ? list[list.length - 1].id + 1 : 1;
  const todo = { id: nextId, title, completed: false };
  list.push(todo);
  return todo;
}

addTodo(todos, "Celebrate progress");
```

- Return the new todo so callers can log or test it.
- Decide whether to mutate the original array or return a new one—both are acceptable if you stay consistent.

## Step 3: Toggle Completion

Find a todo by ID and flip its `completed` status.

```javascript
function toggleTodo(list, id) {
  const todo = list.find((item) => item.id === id);
  if (!todo) {
    console.warn(`Todo with id ${id} not found`);
    return;
  }
  todo.completed = !todo.completed;
  return todo;
}

toggleTodo(todos, 2);
```

- Use `find` or `map`—pick the style you prefer.
- Guard against missing IDs to avoid runtime errors.

## Step 4: Filter by Status

Build helpers that return completed and pending todos.

```javascript
function getCompleted(list) {
  return list.filter((todo) => todo.completed);
}

function getPending(list) {
  return list.filter((todo) => !todo.completed);
}

console.log(getCompleted(todos));
console.log(getPending(todos));
```

- Filtering returns new arrays—safe to chain further operations.

## Step 5: Summarize Progress

Use `reduce` to compute totals for a quick status message.

```javascript
function summarizeTodos(list) {
  const summary = list.reduce(
    (acc, todo) => {
      acc.total += 1;
      if (todo.completed) acc.completed += 1;
      return acc;
    },
    { total: 0, completed: 0 }
  );

  const pending = summary.total - summary.completed;
  return `Completed ${summary.completed}/${summary.total} • Pending ${pending}`;
}

console.log(summarizeTodos(todos));
```

- Return both raw numbers and a formatted string if you plan UI output later.

## Stretch Goals (Optional)

- Sort todos alphabetically or by completion status.
- Add a function that deletes a todo by ID.
- Implement `searchTodos(list, query)` that returns matches using `filter`.
- Store todos in `localStorage` (or a JSON file) to practice serialization.

## Deliverables

- A JavaScript module containing the todo array and helper functions.
- Console logs or simple tests that demonstrate each helper working.
- Notes on how you’d hook this data layer to a future DOM-based interface.

When you’re ready, continue to Day 6 to move this data into the browser with real DOM manipulation. 🌐
