---
title: "Return Values"
description: "Getting results back from functions"
type: "reading"
duration: "20 min"
day: 4
order: 3
nextLesson: "arrow-functions"
---

# Return Values

Functions don't just perform actions—they can also produce results. Return values allow functions to hand data back to the rest of your program. Mastering returns is essential for chaining calculations, composing functions, and building scalable applications.

## Step 1: Basic `return`

```javascript
function double(number) {
  return number * 2;
}

const result = double(5);
console.log(result); // 10
```

- `return` sends a value back to the caller.
- The returned value can be stored, logged, or passed into another function.

## Step 2: Early Exit

Once a function hits `return`, it stops executing.

```javascript
function describeStreak(days) {
  if (days >= 7) {
    return "Legendary streak!";
  }

  return "Keep going!";
}

console.log(describeStreak(10)); // "Legendary streak!"
console.log(describeStreak(3));  // "Keep going!"
```

Even if there’s more code after `return`, it won’t run. Use this to simplify conditionals.

## Step 3: Multiple Returns

You can return from different branches. The first `return` encountered exits the function.

```javascript
function getBadgeColor(level) {
  if (level >= 5) {
    return "gold";
  } else if (level >= 3) {
    return "silver";
  }
  return "bronze";
}
```

- Each branch returns a string.
- Ensure every path returns something meaningful.

## Step 4: Returning Complex Types

Return objects or arrays to package multiple pieces of data.

```javascript
function buildLessonSummary(day, topic) {
  return {
    day,
    topic,
    completed: false,
    createdAt: new Date().toISOString()
  };
}

const summary = buildLessonSummary(4, "Return Values");
console.log(summary.topic); // "Return Values"
```

- Returning objects keeps data grouped sensibly.
- You can return arrays when order matters, objects when labels matter.

## Step 5: Returning Functions (Preview)

Functions can return other functions. This is the foundation of closures and advanced patterns.

```javascript
function createCheer(prefix) {
  return function(name) {
    console.log(`${prefix} ${name}!`);
  };
}

const cheer = createCheer("You rock");
cheer("Kayra"); // "You rock Kayra!"
```

You'll explore closures later, but understand that `return` isn't limited to primitives.

## Step 6: Guard Clauses with `return`

Guard clauses check for invalid input and exit early.

```javascript
function calculateBoost(points) {
  if (points < 0) {
    return "Points cannot be negative.";
  }

  return points * 1.2;
}
```

- Clear guard clauses make functions easier to read.
- They prevent unnecessary nesting.

## Step 7: `return` vs `console.log`

- `return` hands data back to the caller.
- `console.log` just prints to the console.

```javascript
function getGreeting(name) {
  return `Hello, ${name}!`;
}

const greeting = getGreeting("Elif");
console.log(greeting);
```

If you only log inside the function, you can't reuse the result. Returning allows flexibility.

## Step 8: Implicit Returns (Preview)

Function declarations require `return` explicitly. Later, when we study arrow functions, you'll learn about implicit returns:

```javascript
const doubleArrow = (number) => number * 2;
```

For now, stick with explicit `return` statements in function declarations.

## Step 9: Practice Prompts

1. Write `function milesToKilometers(miles)` that returns the converted value (1 mile ≈ 1.60934 km). Log the result of calling it with `5`.
2. Create `function buildProfile(name, points)` that returns an object with `name`, `points`, and `status` (`"pro"` if points ≥ 100, else `"newbie"`).
3. Implement `function chooseMotivation(completed)` that returns either `"Celebrate your win!"` or `"Set a tiny goal and try again."`.
4. Extend `function calculateAverage(scores)` to validate input (must be an array with length > 0) and return the average. Use a guard clause to handle invalid input.

## Key Takeaways

- ✅ `return` provides data to the caller and halts function execution.
- ✅ All code paths should return meaningful values or explicitly return nothing.
- ✅ Return objects or arrays to package multiple pieces of information.
- ✅ Guard clauses with `return` keep functions clean and resilient.

---

## 🎯 Quick Check

1. What happens to code after a `return` statement?
2. How can you return multiple values from a function?
3. Why is returning data more flexible than logging inside a function?
4. What should you do if a function receives invalid inputs but must return something?

Next up: arrow functions—modern syntax to write concise functions with implicit behavior. ⚡
