---
title: "While and Do-While Loops"
description: "Different types of loops and when to use them"
type: "reading"
duration: "20 min"
day: 3
order: 2
nextLesson: "loop-control"
---

# While and Do-While Loops

`for` loops shine when you know exactly how many times to iterate. But what if you want to keep looping until something happens? That's where `while` and `do...while` loops come in. They repeat as long as a condition stays true—perfect for waiting on user input, retrying operations, or processing data until it's finished.

## Step 1: `while` Loop Basics

```javascript
let streak = 0;

while (streak < 5) {
  streak++;
  console.log(`Streak day ${streak}!`);
}
```

- Checks the condition (`streak < 5`) before each iteration.
- If the condition is false at the start, the loop never runs.
- Make sure something in the loop changes the condition—otherwise you'll create an infinite loop.

### Use cases
- Reading data until you reach the end.
- Waiting for a flag (e.g., `isLoaded`) to become true.
- Running a process while a queue has items.

## Step 2: Translating `for` to `while`

Most `for` loops can be rewritten as `while` loops:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

This flexibility helps when you need a loop but the number of iterations isn't predetermined.

## Step 3: `do...while` Loop

`do...while` guarantees the loop body runs at least once, even if the condition starts false.

```javascript
let attempts = 0;

do {
  attempts++;
  console.log(`Attempt ${attempts} logged.`);
} while (attempts < 3);
```

- The condition is checked after the loop body.
- Great for scenarios where you want to execute code first, then decide whether to continue (e.g., prompting a user, rolling dice, retrying a request).

## Step 4: Choosing Between `while` and `do...while`

| Scenario | Use |
| -------- | --- |
| Need to check condition before running | `while` |
| Must run code at least once | `do...while` |
| Known number of iterations | `for` (still works with `while`) |

Example: asking for feedback until the user submits something

```javascript
let feedback = "";

do {
  feedback = "Great lesson!"; // imagine this comes from user input
  console.log("Thanks for your feedback!");
} while (!feedback);
```

## Step 5: Avoiding Infinite Loops

Always adjust variables inside the loop so your condition eventually becomes false.

```javascript
let energy = 3;

while (energy > 0) {
  console.log("Practicing coding...");
  energy--;
}

console.log("Time for a break! ☕");
```

- If you forget `energy--`, the loop never ends.
- Use safeguards (like `if (energy < 0) break;`) when working with external data.

## Step 6: `while` + Arrays

You can iterate through arrays with `while`, especially when working with queues:

```javascript
const reminders = ["Stretch", "Drink water", "Review notes"];
let index = 0;

while (index < reminders.length) {
  console.log(`Reminder: ${reminders[index]}`);
  index++;
}
```

Or mutate arrays until empty:

```javascript
const tasks = ["Refactor code", "Write tests", "Ship feature"];

while (tasks.length > 0) {
  const task = tasks.shift(); // removes first item
  console.log(`Completed: ${task}`);
}
```

## Step 7: Realistic Example—Countdown with `do...while`

```javascript
let countdown = 5;

do {
  console.log(`Countdown: ${countdown}`);
  countdown--;
} while (countdown > 0);

console.log("Liftoff!");
```

Even if `countdown` starts at 0, you'd still see at least one log—sometimes that's exactly what you want.

## Step 8: Practice Prompts

1. Use a `while` loop to simulate saving coins until you reach 200 units. Start with `let savings = 0;` and add 25 each time.
2. Create a `do...while` loop that rolls a die (use `Math.ceil(Math.random() * 6)`) until you roll a 6. Count how many attempts it took.
3. Given `const messages = ["Keep going", "You're almost there", "Celebrate progress"];`, log each message, then remove it from the array using `shift()` until none remain.
4. Implement a `while` loop that keeps doubling a number until it exceeds 1000. Log each intermediate value.

## Key Takeaways

- ✅ `while` loops repeat as long as a condition stays true, checking before each run.
- ✅ `do...while` loops run once before checking the condition.
- ✅ Update loop variables to avoid infinite loops.
- ✅ Choose the loop that fits your scenario: known count (`for`), conditional repetition (`while`), guaranteed first run (`do...while`).

---

## 🎯 Quick Check

1. When does a `do...while` loop check its condition?
2. How would you convert a `for` loop into a `while` loop?
3. Why is `while (true)` dangerous, and how can you prevent infinite loops?
4. Describe a scenario where `do...while` is more appropriate than `while`.

Next lesson: controlling loops with `break` and `continue` for even more precision. 🛑➡️
