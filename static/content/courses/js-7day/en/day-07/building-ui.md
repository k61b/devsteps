---
title: "Building the User Interface"
description: "Creating the HTML and CSS structure"
type: "reading"
duration: "30 min"
day: 7
order: 2
nextLesson: "implementing-logic"
---

# Building the User Interface

With your plan in place, it’s time to transform sketches into a real interface. Today’s focus is on HTML structure, layout, and reusable components so tomorrow’s JavaScript layer can slot in smoothly.

## Step 1: Set Up the Base Layout

- Create the root HTML file (or Svelte component) for your app.
- Include global stylesheets, fonts, or icon libraries you’ll need.
- Define main containers—header, navigation, content, footer—based on yesterday’s plan.

```html
<body>
  <header class="app-header">
    <h1>Momentum Tracker</h1>
    <button class="theme-toggle">🌗</button>
  </header>

  <main class="layout">
    <aside class="sidebar"></aside>
    <section class="content"></section>
  </main>
</body>
```

## Step 2: Build Core Sections

- Fill placeholders for each feature (task list, stats panel, notes, etc.).
- Use semantic elements (`section`, `article`, `form`) to maintain accessibility.
- Add descriptive classes that map to your CSS strategy.

```html
<section class="task-board" aria-labelledby="tasks-heading">
  <div class="board-header">
    <h2 id="tasks-heading">Today’s Tasks</h2>
    <button class="add-task">+ New Task</button>
  </div>
  <ul class="task-list"></ul>
</section>
```

## Step 3: Design Reusable Components

- Identify cards, badges, buttons, or list items that repeat.
- Build minimal HTML snippets and style them once.
- Consider using utility classes (Tailwind) or BEM naming depending on your stack.

```html
<li class="card card--task">
  <header class="card__header">
    <h3 class="card__title">Ship course outline</h3>
    <span class="badge badge--priority">High</span>
  </header>
  <p class="card__meta">Due: Today · 3 subtasks</p>
</li>
```

## Step 4: Apply Responsive Layouts

- Use CSS Grid or Flexbox to handle columns and alignment.
- Set breakpoints for mobile-first design (e.g., single column under 768px).
- Test layouts by resizing the browser or using DevTools device mode.

```css
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    order: 2;
  }
}
```

## Step 5: Add Visual Hierarchy

- Establish a type scale (e.g., `h1` ~32px, `h2` ~24px, body ~16px).
- Define spacing tokens for consistent margins/padding.
- Choose a color palette and ensure sufficient contrast.

Document these decisions in comments or a design tokens section.

## Step 6: Prepare Interaction States

- Style hover/focus states for buttons and links.
- Use `:focus-visible` for accessible keyboard outlines.
- Include empty states and loading placeholders where data will appear.

```css
.add-task {
  border: none;
  background: var(--accent);
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  transition: transform 0.15s ease;
}

.add-task:hover,
.add-task:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}
```

## Step 7: Document Hooks for JavaScript

- Add `data-*` attributes or classes that scripts will query (`data-role="task-list"`).
- Keep naming consistent so you can reference elements easily tomorrow.
- Optionally add comments indicating intended behavior.

```html
<form class="task-form" data-role="task-form">
  <label for="task-title">Task name</label>
  <input id="task-title" name="title" placeholder="Launch email campaign" />
  <button type="submit">Add Task</button>
</form>
```

## Step 8: QA the UI

- Run through critical scenarios (long titles, empty lists, dark mode).
- Check alignment, spacing, and font rendering on multiple devices/browsers if possible.
- Validate HTML semantics and fix accessibility issues (missing labels, contrast).

## Step 9: Prep a UI Checklist

1. Base layout renders without overlap on desktop and mobile.
2. Components align with the plan and use consistent classes.
3. Interaction states exist for buttons, links, and form controls.
4. DOM hooks (`data-role`, IDs, classes) are ready for JavaScript.

Mark each item done before moving forward.

## Key Takeaways

- ✅ Translate your plan into semantic HTML and consistent CSS before adding logic.
- ✅ Reusable components simplify both styling and future interactions.
- ✅ Responsive, accessible design now saves rework later.
- ✅ Clear selectors and data attributes make tomorrow’s JavaScript easier.

---

## 🎯 Quick Check

1. Which layout method did you choose (Grid/Flex) and why?
2. How are you signaling empty or loading states in the UI?
3. What reusable component patterns did you establish?
4. Where will your JavaScript hook into the DOM tomorrow?

Next lesson: bring the interface to life with dynamic data and interactions. ⚙️
