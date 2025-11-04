---
title: "Day 2 Challenge Project - Simple Calculator"
description: "Build a simple calculator using what you learned about operators and conditionals"
type: "project"
duration: "30 min"
day: 2
order: 5
nextLesson: "for-loops"
---

# Day 2 Challenge: Happy Numbers Calculator

Time to celebrate your new operator skills! In this mini-project you'll build a cheerful calculator that performs basic math and responds with upbeat messages. You'll practice arithmetic operators, comparisons, logical thinking, and `if/else` statements.

## 🎯 Project Goal

Create a function that accepts two numbers and an operation (`+`, `-`, `*`, `/`, `%`, `**`) and returns both the result **and** a positive, human-friendly message.

Example output:

```
➕ Adding party!
Result: 12
Message: "Math magic! 7 plus 5 equals 12. Keep the streak alive!"
```

## 📋 Requirements Checklist

1. Accept two numbers and an operation symbol.
2. Handle addition, subtraction, multiplication, division, remainder, and exponentiation.
3. Prevent division by zero with a helpful reminder.
4. Return the numeric result.
5. Log a delightful message tailored to each operation.

## 🛠️ Step-by-Step Plan

### 1. Set Up Your File

Create `happy-calculator.js` and set up your inputs:

```javascript
const num1 = 7;
const num2 = 5;
const operation = "+";
```

### 2. Build the Core Logic

Wrap the calculator logic inside a function so you can reuse it:

```javascript
function happyCalculator(a, b, op) {
  let result;
  let message;

  if (op === "+") {
    result = a + b;
    message = `Math magic! ${a} plus ${b} equals ${result}. Keep the streak alive!`;
  }
  // Add more branches for -, *, /, %, **

  return { result, message };
}
```

### 3. Handle Edge Cases

- If the operation is division and `b` is `0`, return a friendly warning instead of crashing.
- If the operation symbol isn't recognized, let the user know which symbols are supported.

### 4. Print the Outcome

```javascript
const output = happyCalculator(num1, num2, operation);

if (output.error) {
  console.log(output.error);
} else {
  console.log(`Operation: ${operation}`);
  console.log(`Result: ${output.result}`);
  console.log(`Message: "${output.message}"`);
}
```

## 🌈 Bonus Challenges

1. **Emoji Mode**: Add unique emojis per operation (`+` → `➕`, `*` → `✖️`, etc.).
2. **History Log**: Store each calculation in an array and print a summary at the end.
3. **Random Praise**: Create an array of compliments and choose one with `Math.random()`.
4. **Input Validation**: Check if `a` and `b` are numbers. Prompt the user to try again if not.

## 💡 Hints

- Use `switch` if you prefer a tidy way to match operations.
- `Math.pow(a, b)` is the same as `a ** b` if exponentiation feels new.
- Template literals make it easy to personalize the message.
- Start simple, then add flair once the core logic works.

## ✅ Example Solution

Try the project yourself first. When you're ready, compare your approach with one possible solution:

<details>
<summary>Click to view one approach</summary>

```javascript
function happyCalculator(a, b, op) {
  if (typeof a !== "number" || typeof b !== "number") {
    return { error: "Please use numbers only. Calculators love numbers!" };
  }

  const compliments = [
    "Numbers bow down to you.",
    "You're coding with confidence!",
    "This calculation sparks pure joy!"
  ];
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];

  let result;
  let message;
  let emoji;

  switch (op) {
    case "+":
      result = a + b;
      emoji = "➕";
      message = `${compliment} ${a} plus ${b} equals ${result}.`;
      break;
    case "-":
      result = a - b;
      emoji = "➖";
      message = `${compliment} ${a} minus ${b} leaves ${result}.`;
      break;
    case "*":
      result = a * b;
      emoji = "✖️";
      message = `${compliment} ${a} times ${b} is ${result}. Multiply the momentum!`;
      break;
    case "/":
      if (b === 0) {
        return { error: "Division by zero? Not on our watch—try another number! 🚫" };
      }
      result = a / b;
      emoji = "➗";
      message = `${compliment} ${a} divided by ${b} equals ${result}.`;
      break;
    case "%":
      result = a % b;
      emoji = "🧮";
      message = `${compliment} The remainder of ${a} % ${b} is ${result}.`;
      break;
    case "**":
      result = a ** b;
      emoji = "⚡";
      message = `${compliment} ${a} to the power of ${b} is ${result}. Electrifying!`;
      break;
    default:
      return {
        error: "Unsupported operation. Try +, -, *, /, %, or **."
      };
  }

  return { emoji, result, message };
}

const calculations = [
  happyCalculator(7, 5, "+"),
  happyCalculator(10, 3, "-"),
  happyCalculator(4, 4, "*"),
  happyCalculator(9, 3, "/")
];

calculations.forEach((calc) => {
  if (calc.error) {
    console.log(calc.error);
  } else {
    console.log(`${calc.emoji} Result: ${calc.result} — ${calc.message}`);
  }
});
```

</details>

## 🚀 Share Your Wins

- Post a screenshot of your happiest output in the DevSteps community.
- Challenge yourself: can you turn this into a command-line tool that accepts user input?
- Celebrate—you just combined arithmetic, comparisons, and conditionals into a real program!

Next stop: Day 3 and the world of loops. 🔁
