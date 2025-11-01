---
title: "Day 2 Challenge Project - Simple Calculator"
description: "Build a simple calculator using what you learned about operators and conditionals"
type: "project"
duration: "30 min"
day: 2
order: 5
nextLesson: "for-loops"
---

# Day 2 Challenge Project: Simple Calculator

Congratulations on making it to your first project! It's time to put what you've learned into practice by building a simple calculator.

## 🎯 Project Goal

Create a JavaScript calculator that can perform basic arithmetic operations: addition, subtraction, multiplication, and division.

## 📋 Project Requirements

Your calculator should:

1. ✅ Accept two numbers as input
2. ✅ Accept an operation (+, -, *, /)
3. ✅ Perform the correct calculation
4. ✅ Display the result
5. ✅ Handle edge cases (like division by zero)

## 🛠️ What You'll Practice

This project will help you practice:
- Variables and data types
- Arithmetic operators
- Comparison operators
- If/else statements
- Switch statements
- Console output

## 📝 Step-by-Step Guide

### Step 1: Set Up Your Project

Create a new file called `calculator.js` in your projects folder.

### Step 2: Define Your Variables

Start by creating variables for the two numbers and the operation:

```javascript
// Calculator inputs
let num1 = 10;
let num2 = 5;
let operation = "+";
let result;
```

### Step 3: Create the Calculator Logic

Use a switch statement to handle different operations:

```javascript
switch (operation) {
  case "+":
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;

  case "-":
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;

  // Add cases for * and /
  // Don't forget to handle division by zero!

  default:
    console.log("Invalid operation");
}
```

### Step 4: Handle Edge Cases

Add a check for division by zero:

```javascript
case "/":
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero!");
  } else {
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
  }
  break;
```

### Step 5: Test Your Calculator

Test your calculator with different inputs:

```javascript
// Test cases
// 10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
// 10 / 5 = 2
// 10 / 0 = Error!
```

## 🎨 Bonus Challenges

Once you have the basic calculator working, try these enhancements:

### Level 1: More Operations
Add support for:
- Modulus (`%`) - remainder after division
- Exponentiation (`**`) - power of

### Level 2: Input Validation
- Check if inputs are actually numbers
- Handle negative numbers
- Provide helpful error messages

```javascript
// Example validation
if (typeof num1 !== "number" || typeof num2 !== "number") {
  console.log("Error: Please provide valid numbers");
}
```

### Level 3: Calculator Function
Convert your calculator into a reusable function:

```javascript
function calculate(num1, num2, operation) {
  // Your calculator logic here
  return result;
}

// Use it like this:
console.log(calculate(10, 5, "+"));  // 15
console.log(calculate(20, 4, "/"));  // 5
```

### Level 4: Chain Operations
Allow multiple operations in sequence:

```javascript
// Example: 10 + 5 - 3 * 2
let result = 10;
result = calculate(result, 5, "+");   // 15
result = calculate(result, 3, "-");   // 12
result = calculate(result, 2, "*");   // 24
```

## 💡 Hints

<details>
<summary>Click to see hints if you're stuck</summary>

**Hint 1:** For division by zero, check the condition BEFORE doing the division.

**Hint 2:** You can use both switch statements OR if/else statements - choose what makes sense to you.

**Hint 3:** Template literals (backticks) make it easy to format your output: `` `${num1} + ${num2} = ${result}` ``

**Hint 4:** For the function version, use the `return` keyword to send the result back.

</details>

## ✅ Example Solution

Try to complete the project on your own first! When you're done (or truly stuck), you can check one possible solution:

<details>
<summary>Click to see example solution</summary>

```javascript
// Simple Calculator
function calculator(num1, num2, operation) {
  let result;

  // Validate inputs
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: Please provide valid numbers";
  }

  // Perform calculation based on operation
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero!";
      }
      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;

    case "**":
      result = num1 ** num2;
      break;

    default:
      return "Error: Invalid operation. Use +, -, *, /, %, or **";
  }

  return result;
}

// Test the calculator
console.log("Calculator Tests:");
console.log("10 + 5 =", calculator(10, 5, "+"));      // 15
console.log("10 - 5 =", calculator(10, 5, "-"));      // 5
console.log("10 * 5 =", calculator(10, 5, "*"));      // 50
console.log("10 / 5 =", calculator(10, 5, "/"));      // 2
console.log("10 / 0 =", calculator(10, 0, "/"));      // Error
console.log("10 % 3 =", calculator(10, 3, "%"));      // 1
console.log("2 ** 8 =", calculator(2, 8, "**"));      // 256
```

</details>

## 🚀 Submission Instructions

1. **Create a GitHub repository** for your calculator project
2. **Add a README.md** explaining:
   - What your calculator does
   - How to run it
   - What features you implemented
   - Any challenges you faced
3. **Push your code** to GitHub
4. **Share your work** on the DevSteps Reddit community

### README Template

```markdown
# Simple JavaScript Calculator

A basic calculator built with JavaScript for the DevSteps Day 2 Project.

## Features
- ✅ Basic operations: +, -, *, /
- ✅ Division by zero handling
- ✅ [Add your bonus features here]

## How to Run
1. Clone this repository
2. Open `calculator.js` in your code editor
3. Run with Node.js: `node calculator.js`
4. Or open in browser console and paste the code

## What I Learned
- [Share what you learned building this]

## Challenges
- [Share any difficulties you encountered]

## Next Steps
- [What would you add next?]

---

Part of the [DevSteps](https://devsteps.com) JavaScript Fundamentals course
```

## 💬 Discussion Points

When sharing your project on Reddit, consider discussing:

1. **What approach did you use?** Switch statement or if/else?
2. **What was the hardest part?** Division by zero? Input validation?
3. **What bonus features did you add?** Did you try any of the challenges?
4. **How did you test your calculator?** What test cases did you use?

## 🎓 What You've Learned

By completing this project, you've demonstrated:
- ✅ Understanding of variables and data types
- ✅ Ability to use arithmetic operators
- ✅ Skill with conditional logic (if/else, switch)
- ✅ Problem-solving and debugging
- ✅ Code organization

## 📚 Going Further

Want to take your calculator to the next level? Try:

1. **Add a user interface** (we'll learn about DOM manipulation later!)
2. **Support calculator history** (store previous calculations)
3. **Add scientific functions** (sin, cos, square root)
4. **Create a command-line version** that accepts user input
5. **Add unit tests** to verify your calculator works correctly

## 🌟 Inspiration

Check out what other students have built:
- Search for "devsteps calculator" on GitHub
- Browse submissions on r/devsteps
- Get inspired and inspire others!

---

**Remember:** There's no single "correct" solution! Every developer has their own style. Focus on making your code work, then make it better. Share your journey with the community - we're all learning together! 🚀

Good luck, and happy coding! 💻
