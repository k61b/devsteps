---
title: "Objects and Properties"
description: "Creating and working with objects"
type: "reading"
duration: "25 min"
day: 5
order: 3
nextLesson: "iteration-methods"
---

# Objects and Properties

Objects store data as key–value pairs, letting you label information instead of relying on positions. From user profiles to API responses, objects are everywhere in JavaScript. Today you’ll learn how to create objects, read and update properties, and navigate nested structures.

## Step 1: Why Objects?

- Group related data with readable labels (`name`, `level`, `skills`).
- Mix different data types inside one structure.
- Mirror real-world entities like learners, courses, or settings.

Arrays are great for ordered lists; objects shine when you care about *what* each piece of data represents.

## Step 2: Creating Objects

Use curly braces `{}` with property pairs.

```javascript
const learner = {
  name: "Kayra",
  level: 3,
  active: true
};
```

- Properties use `key: value` syntax.
- Keys are usually lowercase and descriptive.
- Strings, numbers, booleans, arrays, functions—all valid values.

## Step 3: Reading Properties

Access data with dot or bracket notation.

```javascript
console.log(learner.name); // "Kayra"
console.log(learner["level"]); // 3
```

- Dot notation is concise when you know the property name.
- Brackets accept strings or variables—handy for dynamic keys or names with spaces.

## Step 4: Updating and Adding

Assign new values or create properties on the fly.

```javascript
learner.level = 4; // update
learner.track = "JavaScript"; // add new property

console.log(learner.track); // "JavaScript"
```

- Objects are mutable; `const` prevents reassigning the entire `learner`, not its properties.

## Step 5: Nested Objects and Arrays

Combine objects with arrays to model richer data.

```javascript
const course = {
  title: "JavaScript 7 Day Sprint",
  progress: {
    day: 5,
    percent: 62
  },
  milestones: ["Setup", "Functions", "Arrays"]
};

console.log(course.progress.percent); // 62
console.log(course.milestones[1]); // "Functions"
```

- Chain dots/brackets to reach deeper levels.
- Be careful—accessing missing paths gives `undefined`.

## Step 6: Dynamic Property Names

Bracket notation supports variables.

```javascript
const stat = "level";
console.log(learner[stat]); // 4
```

- Perfect when property names come from user input or loops.

## Step 7: Removing Properties

Use the `delete` keyword sparingly.

```javascript
delete learner.active;
console.log(learner.active); // undefined
```

- Removing properties can help avoid stale data, but double-check other code that expects them.

## Step 8: Inspecting Keys and Values

Built-in helpers reveal object contents.

```javascript
const keys = Object.keys(learner); // ["name", "level", "track"]
const values = Object.values(learner); // ["Kayra", 4, "JavaScript"]
const entries = Object.entries(learner);
// [["name", "Kayra"], ["level", 4], ["track", "JavaScript"]]
```

- Iterate over `entries` for both key and value in loops.

## Step 9: Practice Prompts

1. Create `const project = { title: "Todo App", status: "draft" };` and log the `status`.
2. Add a `contributors` array to `project` and push two names.
3. Update `project.status` to `"shipped"` and add `completed: true`.
4. Use `const detail = "title";` to read the title with bracket notation.
5. Loop through `Object.entries(project)` and log each key/value pair.

## Key Takeaways

- ✅ Objects map keys to values—ideal for labeled data.
- ✅ Dot notation is fast; brackets unlock dynamic access.
- ✅ Combine objects and arrays to reflect real data shapes.
- ✅ Use `Object.keys`, `Object.values`, and `Object.entries` to explore structures at runtime.

---

## 🎯 Quick Check

1. When would you choose bracket notation over dot notation?
2. What happens if you access a property that doesn’t exist?
3. How do objects and arrays differ in how they store data?
4. Why might you avoid deleting properties in some cases?

Next lesson: iterate over arrays and objects with built-in looping helpers. 🔁
