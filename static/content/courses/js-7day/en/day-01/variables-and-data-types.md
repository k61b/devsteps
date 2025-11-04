---
title: "Variables and Data Types"
description: "Learn about let, const, var and different data types"
type: "reading"
duration: "30 min"
day: 1
order: 4
nextLesson: "day-1-exercises"
---

# Variables and Data Types

Variables let you store information, give it a name, and reuse it throughout your program. JavaScript also supports several data types that describe what kind of information you're working with. Understanding both concepts is essential before building anything larger than a single log statement.

## Step 1: Why Variables Matter

Imagine building an app that greets the user. If you hard-code `"Hello, Alex!"`, that only works for one person. Variables let you write dynamic code:

```javascript
const userName = "Alex";
console.log(`Hello, ${userName}!`);
```

Change `userName` and the message updates automatically. Variables also allow you to keep track of scores, configuration values, and anything else your program needs to remember.

## Step 2: Declaring Variables (`let`, `const`, `var`)

JavaScript gives you three keywords to create variables.

### `const`: Default choice
```javascript
const pi = 3.14159;
```
- Cannot be reassigned.
- Works for numbers, strings, arrays, objects—the binding stays constant even if the contents of an array or object change.
- Helps prevent accidental mutations and communicates intent.

### `let`: Use when reassignment is intentional
```javascript
let score = 0;
score = score + 10;
```
- Block scoped (only available inside the nearest `{ }`).
- Reassignment allowed.
- Great for counters, accumulators, or values that change over time.

### `var`: Legacy keyword
```javascript
var legacyValue = 42;
```
- Function scoped (ignores blocks).
- Has hoisting quirks that can lead to bugs.
- Avoid using `var` in modern code unless you're working with older scripts. Stick to `const` and `let`.

> Rule of thumb: Use `const` unless you know the value needs to change, then use `let`.

## Step 3: Primitive Data Types

JavaScript has seven primitive (basic) data types. Primitives are immutable and stored by value.

| Type | Example | Description |
| ---- | ------- | ----------- |
| `string` | `"Hello"` or `'World'` | Text surrounded by quotes. Use template literals (backticks) for interpolation. |
| `number` | `42`, `3.14`, `-10` | Both integers and decimals. No separate `int` or `float`. |
| `boolean` | `true`, `false` | Represents truthy/falsey states. |
| `null` | `null` | Explicitly means “no value.” Set by developers. |
| `undefined` | `undefined` | Default value of uninitialized variables. |
| `symbol` | `Symbol('id')` | Unique identifiers, often used for object keys in advanced scenarios. |
| `bigint` | `123n` | Large integers beyond the safe range of `number`. |

### Checking Types with `typeof`

```javascript
typeof "Hello";        // "string"
typeof 99;             // "number"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object"  (quirk of the language)
typeof 123n;           // "bigint"
typeof Symbol("id");   // "symbol"
```

> Note the long-standing bug: `typeof null` returns `"object"`. Despite the output, `null` is still a primitive.

## Step 4: Reference Types (Objects and Arrays)

In addition to primitives, JavaScript has reference types. They are stored by reference and can hold multiple values.

### Objects
```javascript
const learner = {
  name: "Nora",
  progress: 40,
  isActive: true
};
```

- Key-value pairs.
- Use dot notation (`learner.name`) or bracket notation (`learner["name"]`) to access properties.
- Objects are the backbone of most data structures in JavaScript.

### Arrays
```javascript
const topics = ["Variables", "Data Types", "Functions"];
```

- Ordered lists indexed from 0.
- Use `topics[1]` to access the second item.
- Arrays are technically objects, so `typeof topics` returns `"object"`. Use `Array.isArray(topics)` to check explicitly.

## Step 5: Dynamic Typing

JavaScript is dynamically typed: variables can hold any type, and the type can change at runtime.

```javascript
let value = 10;   // number
value = "ten";    // now a string
value = true;     // now a boolean
```

Dynamic typing gives flexibility, but keep track of what type you expect. Mixing types accidentally is a common source of bugs.

## Step 6: Converting Between Types

You often need to convert values—especially when reading user input (strings) and performing calculations (numbers).

- `Number("42")` → converts a string to a number (returns `NaN` if conversion fails).
- `String(10)` → converts a number to a string.
- `Boolean("")` → `false`, `Boolean("text")` → `true`.
- `parseInt("101", 10)` → converts to an integer using base 10.
- Template literals automatically convert to strings: `` `Score: ${score}` ``.

### Beware of implicit coercion

```javascript
"5" + 1;    // "51" (string concatenation)
"5" - 1;    // 4   (string converted to number)
```

JavaScript tries to help by converting types automatically. Sometimes that's convenient, other times it causes surprises. When in doubt, convert values yourself explicitly.

## Step 7: Practice in the Console

Open DevTools or run Node.js and experiment:

```javascript
const name = "Taylor";
let age = 21;
const hobbies = ["reading", "gaming"];

console.log(typeof name);    // "string"
console.log(typeof age);     // "number"
console.log(Array.isArray(hobbies)); // true

age = age + 1;
console.log(`Happy birthday, ${name}! You are now ${age}.`);
```

Try predicting each output before running the code, then verify your understanding. Change the values and observe how the types respond.

## Step 8: Common Mistakes and Tips

- **Reassigning a `const` variable**: throws `TypeError`. Use `let` if you need to reassign.
- **Forgetting `const`/`let`**: writing `score = 0;` without a keyword creates a global variable unintentionally (strict mode prevents this).
- **Confusing `null` and `undefined`**: use `null` when you intentionally clear a value; expect `undefined` when something hasn't been set.
- **Comparing different types**: `==` performs coercion, while `===` checks both value and type. Prefer `===` to avoid surprises.

```javascript
0 == false;   // true  (because of coercion)
0 === false;  // false (strict comparison)
```

## Key Takeaways

- ✅ Use `const` by default; switch to `let` when you need reassignment.
- ✅ JavaScript supports several primitive types—learn their quirks (`typeof null`!).
- ✅ Objects and arrays are reference types used to model complex data.
- ✅ Dynamic typing and type coercion are powerful but require careful attention.

---

## 🎯 Quick Check

1. When should you choose `let` instead of `const`?
2. What data type is returned by `typeof null`, and why is it surprising?
3. How do you check whether a value is an array?
4. Why should you prefer `===` over `==` in conditionals?
5. Convert the string `"99"` into a number and explain what happens if the conversion fails.

Feel good about these answers? You're ready to tackle the Day 1 exercises next!
