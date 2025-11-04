---
title: "Function Scope and Closures"
description: "Understanding variable scope in functions"
type: "reading"
duration: "30 min"
day: 4
order: 5
nextLesson: "intro-to-arrays"
---

# Function Scope and Closures

Scope defines where variables exist and can be accessed. Closures let functions remember values from their outer scope even after that scope has finished running. Together, they form the mental model you need to write modular, bug-free code.

## Step 1: Types of Scope

- **Global scope**: Variables accessible everywhere.
- **Function scope**: Variables declared inside a function are only available inside it.
- **Block scope**: Variables declared with `let` or `const` inside `{ }` are limited to that block.

```javascript
const globalMessage = "Hello, world!";

function shoutMessage() {
  const localMessage = "Hello from inside!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible
}

shoutMessage();
// console.log(localMessage); // ReferenceError
```

## Step 2: Block Scope With `let` and `const`

`let` and `const` respect block scope; `var` does not.

```javascript
if (true) {
  const blockScoped = "Inside block";
}

// console.log(blockScoped); // ReferenceError
```

Use `let`/`const` to keep variables confined to the smallest necessary scope.

## Step 3: Shadowing

Variables in inner scopes can have the same name as outer ones; the inner value “shadows” the outer.

```javascript
const level = "global";

function showLevel() {
  const level = "function";
  console.log(level); // "function"
}

showLevel();
console.log(level); // "global"
```

Avoid shadowing unless you have a compelling reason—it can confuse readers.

## Step 4: What Is a Closure?

A closure is created when an inner function captures variables from its outer function—even after the outer function has finished executing.

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count: ${count}`);
  }

  return increment;
}

const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
```

- `increment` remembers `count`, even though `createCounter` has already returned.
- Each call to `createCounter` creates a new closure with its own `count`.

## Step 5: Closures With Parameters

```javascript
function createGoalTracker(goal) {
  let progress = 0;

  return function(points) {
    progress += points;
    if (progress >= goal) {
      console.log(`Goal of ${goal} reached! 🎉`);
    } else {
      console.log(`Progress: ${progress}/${goal}`);
    }
  };
}

const tracker = createGoalTracker(100);
tracker(30); // Progress: 30/100
tracker(80); // Goal reached!
```

- The inner function captures both `progress` and `goal`.
- Useful for creating customizable utilities.

## Step 6: Practical Uses for Closures

- **Encapsulation**: Hide variables inside closures instead of relying on global data.
- **Factory functions**: Generate functions configured with specific values.
- **Memoization**: Cache results inside a closure to avoid recalculating.
- **Event handlers**: Remember context when responding to events or callbacks.

## Step 7: IIFE (Immediately Invoked Function Expression)

An IIFE runs immediately and can create isolated scope.

```javascript
(function () {
  const secret = "hidden";
  console.log("IIFE executed");
})();

// console.log(secret); // ReferenceError
```

IIFEs were more common before block scope, but you may still see them in legacy code.

## Step 8: Common Pitfalls

- **Accidentally leaking variables**: Forgetting `const`/`let` can create globals.
- **Callbacks inside loops**: All callbacks share the same variable unless captured per iteration.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Outputs 3 three times because var is function-scoped

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Outputs 0, 1, 2 because let is block-scoped
```

## Step 9: Practice Prompts

1. Write `function createMultiplier(multiplier)` that returns a function multiplying any input by `multiplier`. Test with 2 and 5.
2. Implement `function makeLogger(prefix)` that returns a function logging messages with the prefix.
3. Use an IIFE to create a private counter that logs `"Counter: 1"`, `"Counter: 2"`, etc., each time a returned function is called.
4. Explain what closure allows in the `createGoalTracker` example and how changing the factory input affects behavior.

## Key Takeaways

- ✅ Scope determines where variables live and who can see them.
- ✅ Closures allow inner functions to remember variables from their outer scope.
- ✅ Use closures for encapsulation, factories, caching, and asynchronous callbacks.
- ✅ Prefer `let`/`const` to avoid accidental leaks and scope bugs.

---

## 🎯 Quick Check

1. What’s the difference between function scope and block scope?
2. How do closures make factory functions possible?
3. Why does using `var` inside loops cause issues with asynchronous callbacks?
4. How can IIFEs help avoid polluting the global scope?

Great work! Tomorrow we'll dive into arrays—your next step toward managing collections of data. 📚
