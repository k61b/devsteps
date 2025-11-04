---
title: "Introduction to Arrays"
description: "Working with lists of data"
type: "reading"
duration: "20 min"
day: 5
order: 1
nextLesson: "array-methods"
---

# Introduction to Arrays

Arrays let you store ordered lists of values under a single variable. They are essential whenever you need to manage collections—names of learners, scores, todo items, API responses, and more. Today you’ll learn how to create, read, and update arrays so you can move from single values to flexible data structures.

## Step 1: Why Arrays Matter

- Keep related values together instead of separate variables.
- Preserve order: the first item stays first unless you change the array.
- Provide built-in helpers for adding, removing, and searching items.

Imagine a leaderboard of top students. Without arrays you would write `const student1 = ...`, `const student2 = ...` and so on. Arrays let you bundle them: `const students = ["Ada", "Grace", "Kayra"];`.

## Step 2: Creating Arrays

Use square brackets `[]` to define an array.

```javascript
const learners = ["Ada", "Grace", "Kayra"];
const levels = [1, 3, 5, 7];
const mixed = ["Trailblazer", 42, true];
```

- Values can be strings, numbers, booleans, objects—even other arrays.
- An empty array is `const tasks = [];`.

## Step 3: Accessing Elements

Array positions (indexes) start at 0.

```javascript
const roadmap = ["Setup", "Basics", "Control Flow", "Functions"];

console.log(roadmap[0]); // "Setup"
console.log(roadmap[3]); // "Functions"
```

- Use bracket notation with the index to read a value.
- Accessing an index that doesn’t exist returns `undefined`.

## Step 4: Updating Elements

Assign a new value at a specific index.

```javascript
const status = ["To Do", "In Progress", "Review"];
status[1] = "Blocked";

console.log(status); // ["To Do", "Blocked", "Review"]
```

- Arrays remain mutable even when declared with `const`; `const` prevents reassigning the entire array variable.

## Step 5: Adding and Removing Items

The most common methods manipulate the end of the array.

```javascript
const todos = ["Read docs", "Write notes"];

todos.push("Review");   // add to end
const last = todos.pop(); // remove from end

console.log(todos); // ["Read docs", "Write notes"]
console.log(last);  // "Review"
```

- `push` returns the new length.
- `pop` returns the removed item.
- Later lessons cover more methods for the start or middle of arrays.

## Step 6: Checking Length and Last Item

Use the `.length` property to count elements.

```javascript
const modules = ["Basics", "DOM", "Async"];

console.log(modules.length);      // 3
console.log(modules[modules.length - 1]); // "Async"
```

- Length updates automatically when you add or remove items.
- The last element is always `array[array.length - 1]`.

## Step 7: Looping Through Arrays

Loops let you process every item.

```javascript
const scores = [10, 15, 18];

for (let i = 0; i < scores.length; i++) {
  console.log(`Score ${i + 1}: ${scores[i]}`);
}

for (const score of scores) {
  console.log(`Score: ${score}`);
}
```

- Traditional `for` loop gives you index control.
- `for...of` iterates directly over values.

## Step 8: Combining Arrays

Concatenate arrays or expand them with the spread operator.

```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Databases"];

const fullStack = frontend.concat(backend);
// ["HTML", "CSS", "Node.js", "Databases"]

const extended = [...frontend, "JavaScript"];
// ["HTML", "CSS", "JavaScript"]
```

- `concat` produces a new array without changing the originals.
- Spread syntax `...array` copies the elements into a new array.

## Step 9: Practice Prompts

1. Create `const mentors = ["Ada", "Grace", "Kayra"];` and read the second mentor.
2. Start with `const tasks = [];`, use `push` twice, then remove the last item with `pop`.
3. Write a `for...of` loop that logs every element in `const badges = ["Bronze", "Silver", "Gold"];`.
4. Combine `const morning = ["Stretch", "Plan"];` and `const evening = ["Reflect", "Read"];` into one routine.

## Key Takeaways

- ✅ Arrays store ordered collections under a single variable.
- ✅ Indexes start at 0; `.length` tracks how many items you have.
- ✅ `push` and `pop` add/remove from the end—perfect for stacks of work.
- ✅ Loops and spread syntax help you process and combine arrays quickly.

---

## 🎯 Quick Check

1. Why do array indexes begin at 0?
2. What happens if you access an index that doesn’t exist?
3. How does `push` differ from reassigning an array variable?
4. When would you prefer `for...of` instead of a classic `for` loop?

Next lesson: dive deeper into array methods for inserting, removing, and transforming data. 🧭
