---
title: "Array Methods"
description: "Push, pop, shift, unshift, slice, splice and more"
type: "reading"
duration: "35 min"
day: 5
order: 2
nextLesson: "objects-properties"
---

# Array Methods

Arrays shine because JavaScript ships with plenty of helpers for inserting, removing, and reshaping data. Today you’ll master the core methods you’ll reach for daily—adding to either end, slicing copies, splicing edits, and checking values.

## Step 1: Mutating vs. Non-Mutating

- **Mutating methods** change the original array (e.g., `push`, `pop`, `splice`).
- **Non-mutating methods** return a new array or value while leaving the original intact (e.g., `slice`, `concat`).

Know which behavior you need before calling a method—mutations are great for quick updates, while non-mutating versions keep history intact.

## Step 2: `push` and `pop`

Add or remove items from the end of an array.

```javascript
const backlog = ["Setup", "Variables"];

backlog.push("Control Flow"); // returns new length (3)
const removed = backlog.pop(); // returns "Control Flow"

console.log(backlog); // ["Setup", "Variables"]
```

- `push` appends one or more values.
- `pop` removes a single value from the end.

## Step 3: `unshift` and `shift`

Manage the beginning of the array.

```javascript
const roadmap = ["Functions", "Objects"];

roadmap.unshift("Arrays"); // ["Arrays", "Functions", "Objects"]
const first = roadmap.shift(); // removes "Arrays"

console.log(roadmap); // ["Functions", "Objects"]
```

- `unshift` adds to the start.
- `shift` removes and returns the first element.

## Step 4: `slice`

`slice` copies part of an array without altering the original.

```javascript
const lessons = ["Intro", "Loops", "Functions", "Arrays"];

const fundamentals = lessons.slice(0, 3); // ["Intro", "Loops", "Functions"]
const lastTwo = lessons.slice(-2); // ["Functions", "Arrays"]

console.log(lessons); // original stays the same
```

- First param is start index (inclusive).
- Second param is end index (exclusive). Omit it to go to the end.
- Negative indexes count from the right.

## Step 5: `splice`

`splice` edits the original array by removing, replacing, or inserting values.

```javascript
const agenda = ["Welcome", "Basics", "Break", "Project"];

agenda.splice(2, 1, "Q&A"); // remove 1 item at index 2, insert "Q&A"
console.log(agenda); // ["Welcome", "Basics", "Q&A", "Project"]

agenda.splice(3, 0, "Wrap-up");
console.log(agenda); // ["Welcome", "Basics", "Q&A", "Wrap-up", "Project"]
```

- First param: starting index.
- Second param: how many items to delete.
- The rest: values to insert.

## Step 6: Combining Methods

Mix methods to perform complex updates.

```javascript
const tasks = ["Plan", "Code", "Review", "Deploy"];

tasks.pop(); // remove "Deploy"
tasks.push("Test", "Deploy"); // add two items

const active = tasks.slice(0, 3); // ["Plan", "Code", "Review"]
```

Thinking in small steps keeps logic clear and easier to debug.

## Step 7: Searching with `includes` and `indexOf`

Check whether a value exists and where.

```javascript
const badges = ["Bronze", "Silver", "Gold", "Gold"];

console.log(badges.includes("Silver")); // true
console.log(badges.indexOf("Gold")); // 2
console.log(badges.lastIndexOf("Gold")); // 3
```

- `includes` returns a boolean.
- `indexOf`/`lastIndexOf` give the first/last matching index or `-1`.

## Step 8: `join` for Display

Convert arrays into strings—useful for output or storage.

```javascript
const highlights = ["Arrays", "Objects", "DOM"];

const summary = highlights.join(", ");
console.log(summary); // "Arrays, Objects, DOM"
```

- Default separator is a comma.
- Pass any string to style the output.

## Step 9: Practice Prompts

1. Start with `const queue = ["Signup"];`, add two more items using `push`, then remove the first item with `shift`.
2. Copy the last two elements of `const stages = ["Research", "Plan", "Build", "Test"];` without mutating the original.
3. Replace `"Break"` with `"Demo"` inside `const schedule = ["Intro", "Break", "Workshop"];` using `splice`.
4. Check whether `"Review"` exists inside `const checklist = ["Plan", "Code", "Test"];`; add it if missing.
5. Convert `const mentors = ["Ada", "Grace", "Kayra"];` into the string `"Ada | Grace | Kayra"`.

## Key Takeaways

- ✅ Mutating methods (`push`, `pop`, `shift`, `unshift`, `splice`) change the original array.
- ✅ Non-mutating methods like `slice` and `concat` return new arrays—perfect for safe copies.
- ✅ Use `includes` and `indexOf` to find values quickly.
- ✅ Chain small operations for readable, maintainable logic.

---

## 🎯 Quick Check

1. What is the difference between `slice` and `splice`?
2. How can you insert a value at the start of an array?
3. When does `indexOf` return `-1`?
4. Why might you prefer a non-mutating method in certain situations?

Next lesson: level up with objects—JavaScript’s go-to structure for labeled data. 🗂️
