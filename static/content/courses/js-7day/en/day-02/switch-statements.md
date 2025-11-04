---
title: "Switch Statements"
description: "Alternative way to handle multiple conditions"
type: "reading"
duration: "15 min"
day: 2
order: 4
nextLesson: "day-2-calculator-project"
---

# Switch Statements

`if/else if` chains work well for a handful of conditions, but when you have many specific cases based on the same value, `switch` statements can make your code cleaner and easier to read. Today you'll learn how to use `switch`, where it shines, and when to stick with `if`.

## Step 1: Basic Structure

```javascript
const level = "gold";

switch (level) {
  case "bronze":
    console.log("Bronze member perks unlocked.");
    break;
  case "silver":
    console.log("Silver perks unlocked. Keep it up!");
    break;
  case "gold":
    console.log("Gold perks unlocked. You're amazing! ✨");
    break;
  default:
    console.log("Set your membership level to see perks.");
}
```

- `switch` evaluates the expression once (`level` in this example).
- It compares the result to each `case` value using strict equality (`===`).
- When it finds a match, it runs the code until a `break` statement or the end of the switch.
- `default` runs if no cases match.

## Step 2: Remember the `break`

Without `break`, execution falls through to the next case:

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
  case "Tuesday":
    console.log("Keep the momentum.");
  default:
    console.log("Another opportunity to learn!");
}
```

Output:
```
Start of the week!
Keep the momentum.
Another opportunity to learn!
```

To prevent accidental fall-through, add `break;` at the end of each case unless you intentionally want to fall through.

## Step 3: Intentional Fall-Through

Sometimes you want multiple cases to share the same outcome:

```javascript
const mood = "excited";

switch (mood) {
  case "happy":
  case "excited":
  case "motivated":
    console.log("Channel that energy into your code! 💥");
    break;
  case "tired":
    console.log("Take a stretch break and hydrate.");
    break;
  default:
    console.log("Check in with yourself and keep learning!");
}
```

- Group cases without code in between to intentionally fall through to the shared block.

## Step 4: Using Expressions in Cases

Switch cases can be expressions, but they're evaluated once at compile time. For dynamic checks, `if` statements are better.

Still, you can mix logic inside the case body:

```javascript
const points = 87;

switch (true) {
  case points >= 100:
    console.log("Elite tier unlocked!");
    break;
  case points >= 80:
    console.log("Great progress—almost elite!");
    break;
  default:
    console.log("Keep stacking those points!");
}
```

- Here, `switch(true)` allows each case to evaluate a boolean expression. Use this pattern sparingly; a standard `if/else if` may be clearer.

## Step 5: Comparing `if` vs `switch`

Use `switch` when:
- You're checking the same value against many possibilities.
- The cases are discrete and descriptive (strings, numbers, enums).
- You want a tidy list of outcomes without repeated `if (...) { ... } else if (...) { ... }`.

Stick with `if/else` when:
- Conditions depend on different expressions or ranges.
- You need complex logic inside conditions.
- You rely on less/greater-than comparisons or compound logic (`x > 10 && y < 5`).

Example of a concise `switch`:

```javascript
const command = "share";

switch (command) {
  case "start":
    console.log("Lesson started.");
    break;
  case "pause":
    console.log("Lesson paused.");
    break;
  case "share":
    console.log("Progress shared with friends!");
    break;
  default:
    console.log("Unknown command.");
}
```

## Step 6: Practice Prompts

1. Create a `switch` for `const language = "tr";` that logs a greeting in English, Turkish, or Spanish. Use `default` for unsupported languages.
2. Group multiple cases: `const dayType = "weekend";` where `"saturday"` and `"sunday"` share the same block.
3. Use `switch(true)` to classify `const minutes = 52;` into `"Short session"`, `"Focused block"`, or `"Marathon coder"` based on ranges.
4. Compare the readability of your solution with an equivalent `if/else if`. Which do you prefer and why?

## Key Takeaways

- ✅ `switch` is great for choosing between many fixed options based on the same value.
- ✅ Always include `break` unless you intentionally fall through.
- ✅ Group cases to handle shared outcomes without repeating code.
- ✅ `if/else` remains better for ranges and complex conditions.

---

## 🎯 Quick Check

1. What happens if you forget `break` in a `switch` case?
2. How do you handle multiple cases that share the same outcome?
3. When might `switch(true)` be useful?
4. Give one scenario where `if/else` is more appropriate than `switch`.

Great job! You're ready for a hands-on challenge next—the Day 2 calculator project awaits. 🧮
