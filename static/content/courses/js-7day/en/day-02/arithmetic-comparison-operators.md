---
title: "Arithmetic and Comparison Operators"
description: "Working with mathematical and comparison operations"
type: "reading"
duration: "25 min"
day: 2
order: 1
nextLesson: "logical-operators"
---

# Arithmetic and Comparison Operators

Welcome to Day 2! Today you'll learn how JavaScript performs calculations and compares values—building blocks for every interactive app. We'll use fresh examples so you can see how math and logic combine to power real features.

## Step 1: Set Up a Practice File

Create `day2-operators.js` inside your project folder and run it with Node.js or in the browser console as you experiment:

```bash
node day2-operators.js
```

Update and rerun after each section to keep the concepts fresh.

## Step 2: Arithmetic Operators

Arithmetic operators handle basic math. Start with two numbers:

```javascript
const level = 3;
const bonusPoints = 120;
```

### Addition (`+`)

```javascript
const totalScore = level + bonusPoints;
console.log(`Total score: ${totalScore}`); // 123
```

- Adds numbers.
- When used on strings, it concatenates (joins) them: `"Hello " + "world"`.

### Subtraction (`-`)

```javascript
const pointsToNextLevel = 200 - totalScore;
console.log(pointsToNextLevel); // 77
```

### Multiplication (`*`) and Division (`/`)

```javascript
const multiplier = 2 * level; // 6
const averagePoints = bonusPoints / level; // 40
```

- Division always returns a floating-point number. Use `Math.floor` or `Math.round` if you need whole numbers.

### Remainder (`%`)

```javascript
const remainingCoins = 37 % 5; // 2
```

- Returns what's left after division.
- Great for checking even/odd numbers (`num % 2 === 0`) or cycling through items.

### Exponentiation (`**`)

```javascript
const powerUp = 2 ** level; // 8
```

- Raises the base (2) to the power of `level`.
- Equivalent to `Math.pow(2, level)`.

### Increment/Decrement (`++`, `--`)

```javascript
let streak = 1;
streak++; // streak is now 2
streak--; // back to 1
```

- Postfix form (`streak++`) returns the current value, then increments.
- Prefix form (`++streak`) increments first, then returns the new value.
- In most cases, `streak += 1` is clearer.

### Compound Assignment

Shorthand operators combine arithmetic with assignment:

```javascript
let health = 100;
health += 20; // 120
health -= 15; // 105
health *= 2;  // 210
health /= 3;  // 70
```

## Step 3: Operator Precedence and Grouping

JavaScript follows mathematical order:

1. Parentheses
2. Exponentiation
3. Multiplication/Division/Remainder
4. Addition/Subtraction

When in doubt, add parentheses so your intention is clear:

```javascript
const result = (5 + 3) * 2; // 16, not 11
```

## Step 4: Comparison Operators

Comparisons return booleans (`true` or `false`). Use them inside conditionals or to control program flow.

```javascript
const requiredPoints = 100;
const currentPoints = 123;
```

### Greater/Less Than

```javascript
console.log(currentPoints > requiredPoints);  // true
console.log(currentPoints < requiredPoints);  // false
console.log(currentPoints >= requiredPoints); // true
console.log(currentPoints <= requiredPoints); // false
```

### Equality vs Strict Equality

```javascript
const inputLevel = "3";

console.log(inputLevel == level);  // true (loose equality, coerces types)
console.log(inputLevel === level); // false (strict equality)
```

- `==` (double equals) converts types before comparing. This can hide bugs.
- `===` (triple equals) compares both value and type. Prefer this in modern code.
- The same distinction applies to inequality: `!=` vs `!==`.

### Comparing Strings

Strings are compared alphabetically based on Unicode order:

```javascript
console.log("apple" < "banana");  // true
console.log("JavaScript" > "Java"); // true
```

Avoid relying on this for user-facing features without normalizing case or locale.

## Step 5: Combining Comparisons with Arithmetic

Real code mixes math and logic. Here's a mini example that awards badges:

```javascript
const completedLessons = 5;
const targetLessons = 4;
const hasSharedProgress = false;

const earnedBadge =
  (completedLessons >= targetLessons && !hasSharedProgress)
    ? "Streak Master"
    : "Share your progress for a bonus badge!";

console.log(earnedBadge);
```

- `&&` (AND) requires both conditions to be true.
- `!` negates a boolean.
- The ternary operator (`condition ? valueIfTrue : valueIfFalse`) chooses between two outcomes.

We'll dive deeper into logical operators next, but this shows how arithmetic feeds directly into comparisons.

## Step 6: Debugging Tips

- Use `console.log` to inspect intermediate values before comparison.
- If a comparison surprises you, log `typeof value` to confirm the data type.
- Watch out for floating-point precision: `0.1 + 0.2 === 0.3` returns `false`. Use functions like `Number.toFixed()` or compare within a small tolerance for decimals.

## Practice Prompts

Try these in your practice file:

1. Calculate the average score of three quizzes. Use parentheses to control order.
2. Determine if a number of minutes is divisible by 15. Print a celebratory message if it is.
3. Prompt: `const xp = 980; const nextLevelXp = 1000;` Create a message that shows the percentage progress (`(xp / nextLevelXp) * 100`) and whether you're at least 90% there.
4. Create a variable `inputAge = "18"` and compare it with the number `18` using `==` and `===`. Explain the difference in comments.

## Key Takeaways

- ✅ Arithmetic operators let you calculate totals, differences, remainders, and powers.
- ✅ Comparison operators return booleans that drive decision-making in your code.
- ✅ Use parentheses to clarify order and avoid subtle bugs.
- ✅ Prefer strict equality (`===`) to keep types consistent.

---

## 🎯 Quick Check

1. What is the difference between `==` and `===`?
2. How do you calculate the remainder when 58 is divided by 7?
3. Which operator would you use to increase a `score` variable by 5 without overwriting other logic?
4. How do you ensure arithmetic runs before comparison in an expression?

Feeling confident? Next up: logical operators to level up your conditional skills!
