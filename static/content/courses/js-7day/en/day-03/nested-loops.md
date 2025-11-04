---
title: "Nested Loops"
description: "Working with loops inside loops"
type: "reading"
duration: "20 min"
day: 3
order: 4
nextLesson: "day-3-practice-project"
---

# Nested Loops

Nested loops are loops within loops. They let you work with pairs of values, build grids, and generate patterns—exactly what you need for many algorithmic challenges. Because they can grow in complexity quickly, it's important to keep them organized and efficient.

## Step 1: Basic Structure

```javascript
for (let outer = 1; outer <= 3; outer++) {
  for (let inner = 1; inner <= 2; inner++) {
    console.log(`Outer: ${outer}, Inner: ${inner}`);
  }
}
```

- The outer loop runs first (`outer` from 1 to 3).
- For each `outer` iteration, the inner loop runs completely.
- This setup executes 3 × 2 = 6 times in total.

## Step 2: Building a Grid

```javascript
const rows = 3;
const cols = 4;

for (let row = 1; row <= rows; row++) {
  let output = "";
  for (let col = 1; col <= cols; col++) {
    output += `(${row},${col}) `;
  }
  console.log(output);
}
```

Output:
```
(1,1) (1,2) (1,3) (1,4)
(2,1) (2,2) (2,3) (2,4)
(3,1) (3,2) (3,3) (3,4)
```

Use nested loops anytime you need to work with rows and columns, like building a multiplication table or rendering a chessboard.

## Step 3: Multiplication Table Example

```javascript
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += `${i * j}\t`; // tab for spacing
  }
  console.log(row);
}
```

- Inner loop multiplies the current row number by each column number.
- The `\t` character adds tab spacing for readability.

## Step 4: Nested Loops with Arrays

### Pairing learners with mentors

```javascript
const learners = ["Ada", "Grace"];
const mentors = ["Kayra", "Berk", "Tuncer"];

for (let i = 0; i < learners.length; i++) {
  for (let j = 0; j < mentors.length; j++) {
    console.log(`${learners[i]} pairs with ${mentors[j]}`);
  }
}
```

This produces every combination (cartesian product) of learners and mentors.

### Comparing arrays element by element

```javascript
const answers = ["A", "C", "B", "D"];
const userResponses = ["A", "B", "B", "D"];

let score = 0;

for (let i = 0; i < answers.length; i++) {
  if (answers[i] === userResponses[i]) {
    score++;
  }
}

console.log(`Score: ${score}/${answers.length}`);
```

Nested loops aren’t always required—you can sometimes stick with a single loop. Choose the simplest tool that fits the job.

## Step 5: Controlling Nested Loops

`break` and `continue` only affect the loop they are inside. To break out of both loops, you have options:

### Option 1: Flags
```javascript
let found = false;

for (let row = 0; row < 3 && !found; row++) {
  for (let col = 0; col < 3; col++) {
    if (row === 1 && col === 2) {
      console.log("Found target!");
      found = true;
      break;
    }
  }
}
```

### Option 2: Functions

Wrap the loops inside a function and `return` when you find what you need:

```javascript
function findTarget(grid, target) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === target) {
        return { row, col };
      }
    }
  }
  return null;
}
```

### Option 3: Labels (Advanced)

JavaScript supports labeled loops, but they’re rare and can reduce readability:

```javascript
outerLoop:
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    if (row === 1 && col === 2) {
      break outerLoop;
    }
  }
}
```

Use labels sparingly and only when necessary.

## Step 6: Performance Considerations

- Nested loops multiply work: if both loops run 100 times, you have 10,000 iterations.
- Avoid heavy computations inside inner loops when possible.
- Seek ways to reduce nested loops by using early exits (`break`) or alternative data structures (like `Set` or `Map`) when applicable.

## Practice Prompts

1. Display a star pattern:
   ```
   *
   **
   ***
   ****
   ```
2. Given `const matrix = [[1, 2], [3, 4], [5, 6]];`, log each row and the sum of its values.
3. Pair each student with each project topic using two arrays.
4. Create a function that checks whether any pair of numbers in an array sums to 10. Use nested loops and return `true` immediately when found.

## Key Takeaways

- ✅ Nested loops iterate over combinations, grids, and matrix-like data.
- ✅ Each inner loop runs for every iteration of the outer loop, magnifying runtime.
- ✅ Control flow (`break`, `continue`, `return`) helps tame nested loops.
- ✅ Use alternatives (flags, functions, early returns) to maintain readability.

---

## 🎯 Quick Check

1. How many times does a nested loop run if both loops iterate 10 times?
2. When might you prefer using a function with `return` over a labeled `break`?
3. How can you avoid unnecessary work inside nested loops?
4. Build the output:
   ```
   1 2 3
   1 2 3
   ```

Congratulations—you’ve completed the loops module! Next up is the Day 3 practice project to put everything together. 🎉
