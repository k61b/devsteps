---
title: "Array and Object Iteration"
description: "Using forEach, map, filter, and reduce"
type: "reading"
duration: "20 min"
day: 5
order: 4
nextLesson: "day-5-todo-project"
---

# Array and Object Iteration

Iteration methods process every element without writing manual loops. They make transformations, filtering, and aggregation easier to express—and they’re the building blocks for clean data pipelines. Today you’ll meet the four essentials: `forEach`, `map`, `filter`, and `reduce`.

## Step 1: Meet the Methods

- `forEach` runs a callback for every element—great for side effects like logging.
- `map` transforms each element and returns a new array.
- `filter` keeps only elements that pass a test.
- `reduce` combines elements into a single value (number, object, string, etc.).

Each method receives a callback with `(value, index, array)` plus optional context arguments.

## Step 2: `forEach` for Side Effects

```javascript
const learners = ["Ada", "Grace", "Kayra"];

learners.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
```

- Executes the callback for each item.
- Returns `undefined`; use it when you’re not creating a new array.
- If you need to break early, switch to a `for` loop instead.

## Step 3: `map` for Transformation

```javascript
const scores = [10, 12, 15];

const doubled = scores.map((score) => score * 2);
console.log(doubled); // [20, 24, 30]
```

- Returns a new array with the same length.
- Leave the original untouched.

## Step 4: `filter` for Selection

```javascript
const lessons = [
  { title: "Arrays", duration: 20 },
  { title: "Objects", duration: 25 },
  { title: "Iteration", duration: 20 }
];

const longLessons = lessons.filter((lesson) => lesson.duration > 20);
console.log(longLessons);
// [{ title: "Objects", duration: 25 }]
```

- Returns a new array with only the items that return `true`.
- Output length may be shorter (or even 0).

## Step 5: `reduce` for Aggregation

```javascript
const durations = [20, 25, 20];

const total = durations.reduce((sum, minutes) => sum + minutes, 0);
console.log(total); // 65
```

- Takes an accumulator (`sum`) and current value (`minutes`) plus an initial value (`0`).
- Use it for totals, grouping, composing new objects, and more.

## Step 6: Chaining Methods

Combine methods in sequence.

```javascript
const learners = [
  { name: "Ada", progress: 0.9 },
  { name: "Grace", progress: 0.6 },
  { name: "Kayra", progress: 0.8 }
];

const ahead = learners
  .filter((learner) => learner.progress >= 0.8)
  .map((learner) => learner.name.toUpperCase());

console.log(ahead); // ["ADA", "KAYRA"]
```

- Each method returns a new array, so the next method can keep refining it.

## Step 7: Iterating Objects

Objects don’t have these methods, but you can convert them to arrays.

```javascript
const stats = { day: 5, completed: 12, remaining: 3 };

Object.entries(stats).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

- `Object.keys`, `Object.values`, and `Object.entries` return arrays you can iterate.

## Step 8: Choosing the Right Tool

- Use `map` if you’re transforming every element.
- Use `filter` if you’re excluding some elements.
- Use `reduce` if you’re combining into a single result.
- Stick with `forEach` for side effects or when return values aren’t needed.

## Step 9: Practice Prompts

1. Use `forEach` to log `"Lesson: <title>"` for each item in `const lessons = ["Intro", "Arrays", "Objects"];`.
2. Build a new array of durations using `map` on `const sessions = [15, 20, 30];` that adds 5 minutes buffer to each.
3. Filter `const scores = [45, 72, 88, 95];` to keep only scores `>= 70`.
4. Sum every number in `const progress = [0.1, 0.3, 0.6];` with `reduce`.
5. Convert `const course = { title: "Arrays", level: "beginner" };` into an array of `"key: value"` strings using `Object.entries` and `map`.

## Key Takeaways

- ✅ Iteration methods reduce boilerplate and clarify intent.
- ✅ `map`, `filter`, and `reduce` create new data structures without mutating originals.
- ✅ `forEach` is best for running side effects on each element.
- ✅ Convert objects to arrays with `Object.entries` to reuse array helpers.

---

## 🎯 Quick Check

1. When would you prefer `map` over `forEach`?
2. What initial value should you pass to `reduce` when summing numbers?
3. How can you iterate key/value pairs inside an object?
4. Why are chaining methods powerful for data pipelines?

Next up: tie arrays and objects together in a mini project that tracks todos. ✅
