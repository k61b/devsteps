---
title: "Function Declarations"
description: "Creating reusable code with functions"
type: "reading"
duration: "20 min"
day: 4
order: 1
nextLesson: "function-parameters"
---

# Function Declarations

Welcome to Day 4! So far you've written code that runs top to bottom. Functions let you bundle logic, give it a name, and reuse it whenever you need. Think of them as mini-programs that you can plug into larger workflows.

## Step 1: What Is a Function?

A function is a reusable block of code that performs a specific task. Once defined, you can call it as many times as you want.

```javascript
function greet() {
  console.log("Hello, DevSteps community!");
}

greet(); // call or "invoke" the function
greet(); // runs again
```

- `function` keyword starts the declaration.
- `greet` is the function name.
- `{ ... }` contains the code that executes when the function is called.

## Step 2: Why Use Functions?

- **Reusability**: Write code once, use it multiple times.
- **Organization**: Break complex tasks into smaller, named steps.
- **Maintainability**: Fixing or improving a function updates every place it's called.
- **Teamwork**: Clearly named functions communicate intent to other developers (and future you!).

## Step 3: Naming Functions

Choose descriptive verbs that explain what the function does.

```javascript
function sendMotivationMessage() { ... }
function calculateScore() { ... }
function displayProgressChart() { ... }
```

- Use camelCase (`calculateScore`).
- Avoid generic names like `doStuff` or `thing`.
- A good rule: your function name should read like a command.

## Step 4: Function Flow

When you call a function:

1. JavaScript jumps to the function body.
2. Executes each line inside.
3. Returns to the line after the call.

```javascript
console.log("Start");
greet();          // runs the function body
console.log("End");
```

Output:
```
Start
Hello, DevSteps community!
End
```

## Step 5: Functions at Day 4 Skill Level

You already know about variables, conditionals, and loops. Functions can contain all of these.

```javascript
function celebrateMilestones(streak) {
  if (streak >= 7) {
    console.log("One full week! 🎉");
  } else if (streak >= 3) {
    console.log("Three-day streak—keep going!");
  } else {
    console.log("Every day counts. You're doing great!");
  }
}

celebrateMilestones(2);
celebrateMilestones(4);
celebrateMilestones(7);
```

A single function consolidates your streak logic in one place.

## Step 6: Functions Returning Values (Preview)

Functions can send back a value using `return`. We'll dive deeper soon, but here's a teaser:

```javascript
function generateBadgeName(day) {
  return `Day ${day} Trailblazer`;
}

const badge = generateBadgeName(4);
console.log(badge); // "Day 4 Trailblazer"
```

- Without `return`, a function returns `undefined`.
- The moment JavaScript hits `return`, it exits the function.

## Step 7: Function Hoisting

Function declarations are **hoisted**, meaning you can call them before they appear in the file.

```javascript
announce(); // works!

function announce() {
  console.log("Functions are hoisted.");
}
```

JavaScript moves function declarations to the top of their scope during compilation. This is why the call works even though the definition comes later. (We'll compare this with function expressions in a future lesson.)

## Step 8: Function Expressions vs Declarations (Preview)

You'll see functions defined in different ways:

```javascript
// Declaration
function logProgress() {
  console.log("Logging progress...");
}

// Expression (not hoisted the same way)
const logProgressExpression = function () {
  console.log("Logging progress...");
};
```

For now, we'll focus on declarations because they're simple and auto-hoisted. Expressions and arrow functions arrive later this week.

## Step 9: Scope Basics (Sneak Peek)

Variables declared inside a function are in its local scope:

```javascript
function assignGoal() {
  const goal = "Finish Day 4 content";
  console.log(goal);
}

assignGoal();
// console.log(goal); // ReferenceError: goal is not defined
```

Local variables stay inside the function. This isolation prevents name collisions and keeps your code modular.

## Practice Prompts

1. Define a function `printWelcome()` that logs a multi-line welcome message for Day 4. Call it twice.
2. Write `function logDailyProgress(day, completed)` that logs either `"Day X: Completed"` or `"Day X: Pending"` based on the boolean `completed`.
3. Create `function countDown(start)` that logs numbers from `start` down to 1 using a loop.
4. (Preview) Write `function createCheer(name)` that returns a string like `"Go, name! You’re crushing it!"`. Log the returned string.

## Key Takeaways

- ✅ Function declarations define reusable blocks of code with the `function` keyword.
- ✅ Hoisting lets you call declared functions before they're defined in the file.
- ✅ Functions encapsulate logic, improving structure and readability.
- ✅ `return` hands back values, ending the function immediately.

---

## 🎯 Quick Check

1. What are the three main parts of a function declaration?
2. Why are function names typically verbs?
3. What value does a function return if it has no `return` statement?
4. How does hoisting affect function declarations?

Nice work! Next up: adding parameters so your functions can work with dynamic input. 🧠➡️
