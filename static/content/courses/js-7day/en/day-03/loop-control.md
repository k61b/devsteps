---
title: "Loop Control: Break and Continue"
description: "Controlling loop execution flow"
type: "reading"
duration: "15 min"
day: 3
order: 3
nextLesson: "nested-loops"
---

# Loop Control: Break and Continue

Loops are powerful, but real-world logic often requires skipping certain iterations or stopping early. JavaScript gives you two keywords to control loop flow precisely: `break` and `continue`. Mastering them helps you write loops that respond elegantly to changing conditions.

## Step 1: The `break` Statement

`break` exits the loop immediately, even if the condition would still be true on the next iteration.

```javascript
const goals = [100, 200, 300, 400];
let total = 0;

for (let i = 0; i < goals.length; i++) {
  total += goals[i];
  if (total >= 350) {
    console.log("Milestone reached! 🎉");
    break;
  }
}

console.log(`Total counted: ${total}`);
```

- Useful when you found what you were searching for.
- Prevents unnecessary work once a condition is met.

## Step 2: The `continue` Statement

`continue` skips the rest of the loop body for the current iteration and jumps to the next cycle.

```javascript
const streaks = [1, 2, 0, 3, 4];

for (let i = 0; i < streaks.length; i++) {
  if (streaks[i] === 0) {
    continue; // skip broken streaks
  }
  console.log(`Active streak: ${streaks[i]} days`);
}
```

- Ideal for ignoring unwanted items while keeping the loop running.
- Keeps your code clean by avoiding deeply nested `if` statements.

## Step 3: Combining `break` and `continue`

```javascript
const lessons = ["Variables", "Operators", "Conditionals", "", "Loops"];

for (let i = 0; i < lessons.length; i++) {
  const lesson = lessons[i];

  if (!lesson) {
    continue; // skip empty entries
  }

  console.log(`Studying: ${lesson}`);

  if (lesson === "Conditionals") {
    console.log("Time for a short break 🧘‍♂️");
    break; // stop after this lesson
  }
}
```

- Use `continue` to filter data, `break` to exit once a target is found.

## Step 4: Loop Control with `while`

`break` and `continue` also work inside `while` loops.

```javascript
let number = 0;

while (number < 10) {
  number++;

  if (number % 2 === 0) {
    continue; // skip even numbers
  }

  console.log(`Odd number: ${number}`);

  if (number >= 7) {
    break; // stop once you hit 7 or higher
  }
}
```

- Remember to update loop variables even when using `continue`, otherwise you can end up in an infinite loop.

## Step 5: Realistic Scenario—Validating Input

```javascript
const entries = ["Kayra", "", "Berk", null, "Tuncer"];
const validNames = [];

for (let i = 0; i < entries.length; i++) {
  const name = entries[i];

  if (!name) {
    continue; // skip empty or null values
  }

  validNames.push(name);

  if (validNames.length === 3) {
    console.log("Collected enough names.");
    break;
  }
}

console.log(validNames);
```

- `continue` filters out invalid entries.
- `break` stops once you have enough data.

## Step 6: Avoid Overuse

- Too many `break`/`continue` statements can make loops harder to follow.
- Prefer clear conditionals when possible.
- Avoid `break` in combination with deeply nested loops unless necessary (we'll cover alternatives in the next lesson).

## Practice Prompts

1. Loop through `const scores = [95, 82, 74, 88, 91];` and stop at the first score below 80, printing the index.
2. Filter `const tasks = ["code", "", "review", " ", "deploy"];` into a new array that skips empty or whitespace-only strings using `continue`.
3. Use a `while` loop that counts up from 1, skips multiples of 3, and stops when it reaches 10.
4. Combine `break` and `continue` to process `const expenses = [120, -10, 80, 0, 200];`—skip invalid numbers (≤ 0) and stop after accumulating at least 250.

## Key Takeaways

- ✅ `break` exits a loop immediately once you reach a condition.
- ✅ `continue` skips to the next iteration, leaving the loop running.
- ✅ Use them to optimize loops and keep logic focused.
- ✅ Be mindful of readability—too many control statements can make loops confusing.

---

## 🎯 Quick Check

1. When would you reach for `break` instead of letting the loop finish naturally?
2. What happens after `continue` is executed?
3. Why should you still update loop variables when using `continue`?
4. How can `break` help prevent unnecessary computation?

Next up: nesting loops to build grids, patterns, and more complex logic! 🧩
