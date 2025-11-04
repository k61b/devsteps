---
title: "For Loops"
description: "Understanding and using for loops"
type: "reading"
duration: "25 min"
day: 3
order: 1
nextLesson: "while-loops"
---

# For Loops

Welcome to Day 3—loop day! Loops let your code repeat tasks without copy-pasting the same lines. You'll use them to process lists, generate patterns, and automate repetitive work. Today we'll focus on the classic `for` loop, the Swiss army knife of iteration.

## Step 1: Why Loops Matter

Consider this repetitive task:

```javascript
console.log("Day 1 complete!");
console.log("Day 2 complete!");
console.log("Day 3 complete!");
console.log("Day 4 complete!");
console.log("Day 5 complete!");
```

It's doable for five days, but what about 100? Loops transform repetitive sequences into concise, flexible code.

## Step 2: Anatomy of a `for` Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}
```

- **Initialization (`let i = 0`)**: runs once at the beginning.
- **Condition (`i < 5`)**: runs before each loop. If false, the loop stops.
- **Final expression (`i++`)**: runs after each iteration.
- **Body (`console.log...`)**: executes if the condition is true.

`i` is a common loop variable name (short for index), but you can use any descriptive name.

## Step 3: Counting Up and Down

### Counting up

```javascript
for (let day = 1; day <= 7; day++) {
  console.log(`Day ${day}: Coding streak!`);
}
```

### Counting down

```javascript
for (let countdown = 5; countdown >= 1; countdown--) {
  console.log(`Launch in ${countdown}...`);
}
console.log("Blast off! 🚀");
```

Adjust the initialization, condition, and increment to control the direction and step size.

## Step 4: Using Arrays with `for`

Loops shine when iterating over arrays:

```javascript
const lessons = ["Variables", "Operators", "Conditionals", "Loops"];

for (let index = 0; index < lessons.length; index++) {
  const lessonName = lessons[index];
  console.log(`Lesson ${index + 1}: ${lessonName}`);
}
```

- `lessons.length` keeps the loop in sync with the array size.
- Access each item with `lessons[index]`.

## Step 5: Custom Steps and Skipping

Counting by twos:

```javascript
for (let number = 0; number <= 10; number += 2) {
  console.log(number);
}
```

Skipping items:

```javascript
for (let index = 0; index < lessons.length; index += 2) {
  console.log(`Every other lesson: ${lessons[index]}`);
}
```

## Step 6: Break and Continue (Sneak Peek)

You'll dive deeper tomorrow, but here's a teaser:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip 3
  }
  if (i === 5) {
    break; // stop completely
  }
  console.log(i);
}
```

- `continue` jumps to the next iteration.
- `break` exits the loop entirely.

## Step 7: Nested Loops (Preview)

Loops can appear inside other loops to create tables or grids:

```javascript
for (let row = 1; row <= 3; row++) {
  let rowOutput = "";
  for (let col = 1; col <= 3; col++) {
    rowOutput += `(${row},${col}) `;
  }
  console.log(rowOutput);
}
```

We'll explore nested loops later in Day 3.

## Step 8: Common Mistakes

- **Infinite loops**: Forgetting to update the loop variable can create endless loops. Double-check your increment (`i++`).
- **Off-by-one errors**: Decide whether to use `<`, `<=`, `>` or `>=` carefully.
- **Reusing loop variables**: Keep loop variables scoped with `let` to avoid accidental reuse.

## Practice Prompts

1. Print the numbers from 1 to 20, with a message every time the number is a multiple of 5.
2. Given `const playlist = ["Intro", "Basics", "Loops", "Functions"];`, log each track in the format `Track 1: Intro`.
3. Create a multiplication table for the number 4 (from `4 x 1` to `4 x 10`).
4. Sum the numbers in `const scores = [5, 8, 12, 4, 6];` and print the total.

## Key Takeaways

- ✅ `for` loops repeat tasks using a predictable pattern.
- ✅ The initialization, condition, and final expression control when the loop starts, stops, and steps.
- ✅ Arrays + loops help process collections of data efficiently.
- ✅ Careful conditions prevent infinite loops and off-by-one errors.

---

## 🎯 Quick Check

1. What are the three parts of a `for` loop header, and when does each run?
2. How do you iterate from 10 down to 1?
3. Why is `lessons.length` better than typing a hardcoded number?
4. What happens if you forget to increment your loop variable?

Great job! Next up: exploring other loop types (`while` and `do...while`) to build your iteration toolkit. ♻️
