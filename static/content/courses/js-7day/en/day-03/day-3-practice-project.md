---
title: "Day 3 Practice Project - Loop Adventure"
description: "Create loop-powered dashboards and patterns to reinforce for, while, and nested loops"
type: "project"
duration: "40 min"
day: 3
order: 5
nextLesson: "function-declarations"
---

# Day 3 Practice Project: Loop Adventure

You’ve explored `for`, `while`, and nested loops—now it’s time to use them in a single, joyful project. You’ll build a small “Loop Adventure” dashboard that celebrates progress, prints patterns, and crunches stats using nothing but loops.

> Create a new file named `loop-adventure.js` in your project folder. Run it with Node.js (`node loop-adventure.js`) as you complete each section.

## 🎯 Project Overview

Your program will produce three sections:

1. **Progress Tracker** – show daily wins with `for` loops.
2. **Motivation Meter** – compute stats using `while` loops.
3. **Pattern Playground** – draw cheerful shapes using nested loops.

Feel free to style your output with emojis, dividers, or colors if you use a library like `chalk` (optional).

---

## 1) Progress Tracker (For Loops)

- Use a `for` loop to log each day of a 7-day streak.
- Add a celebratory message every time the day number is a multiple of 3.
- Store the messages in an array so you can print them again later if you want.

```javascript
console.log("=== Progress Tracker ===");

const streakMessages = [];

for (let day = 1; day <= 7; day++) {
  let message = `Day ${day}: Code complete!`;
  if (day % 3 === 0) {
    message += " 🎉 Milestone day!";
  }
  console.log(message);
  streakMessages.push(message);
}
```

**Stretch**: Reverse the array with a loop and print the messages from most recent to oldest.

---

## 2) Motivation Meter (While + Do-While)

- Start with `let motivation = 100;`.
- Use a `while` loop to simulate practice sessions that reduce motivation by 17 each time.
- Stop when motivation drops to 0 or lower, logging each step.
- After the loop, use a `do...while` to simulate “energy boosts” that refill 25 points at a time until motivation reaches at least 80.

```javascript
console.log("\n=== Motivation Meter ===");

let motivation = 100;

while (motivation > 0) {
  console.log(`Motivation at ${motivation}. Keep pushing!`);
  motivation -= 17;
}

console.log("Motivation depleted. Time to recharge! ☕");

do {
  motivation += 25;
  console.log(`Recharge boost: motivation at ${motivation}`);
} while (motivation < 80);

console.log(`Ready to learn again with ${motivation} motivation!`);
```

**Stretch**: Keep track of how many boosts you used and summarize it at the end.

---

## 3) Pattern Playground (Nested Loops)

Create two pattern blocks:

### A) Star Ladder

Use nested loops to print:
```
★
★★
★★★
★★★★
★★★★★
```

### B) Progress Grid

Generate a 3 × 4 grid with coordinates, similar to:
```
(1,1) (1,2) (1,3) (1,4)
(2,1) (2,2) (2,3) (2,4)
(3,1) (3,2) (3,3) (3,4)
```

```javascript
console.log("\n=== Pattern Playground ===");

// Star Ladder
for (let row = 1; row <= 5; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "★";
  }
  console.log(stars);
}

console.log("\nAdventure Map:");

const rows = 3;
const cols = 4;

for (let r = 1; r <= rows; r++) {
  let line = "";
  for (let c = 1; c <= cols; c++) {
    line += `(${r},${c}) `;
  }
  console.log(line);
}
```

**Stretch**: Replace coordinates with custom labels or highlight a “treasure” cell using `if` inside the nested loop.

---

## 🌈 Bonus Ideas

1. **Looped Compliments**: Store positive phrases in an array and use a loop to print a random one after each section.
2. **Stats Summary**: Calculate total stars printed, total days logged, or total boosts used.
3. **Interactive Mode**: Accept command-line arguments (using `process.argv`) to change streak length or grid size.
4. **Color Splash** (optional): Use a library like `chalk` to color different sections.

---

## ✅ Final Checklist

- `for` loops handle daily streaks and reversed order.
- `while` and `do...while` manage motivation levels with safe exit conditions.
- Nested loops produce the star ladder and grid patterns.
- At least one stretch goal attempted (optional but encouraged!).

Share your output with the community or a friend—the more positive energy, the better. Tomorrow, we shift gears to functions and start organizing logic like pros! 💪✨
