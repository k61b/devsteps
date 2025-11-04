---
title: "Function Parameters and Arguments"
description: "Passing data to functions"
type: "reading"
duration: "25 min"
day: 4
order: 2
nextLesson: "return-values"
---

# Function Parameters and Arguments

Function declarations become truly powerful when they accept data. Parameters let your functions behave dynamically, responding to whatever information you pass in. Today you'll learn how to define parameters, call functions with arguments, set default values, and handle multiple inputs gracefully.

## Step 1: Parameters vs Arguments

- **Parameters** are the placeholders listed in the function definition.
- **Arguments** are the actual values you pass when calling the function.

```javascript
function greetLearner(name) {
  console.log(`Welcome, ${name}!`);
}

greetLearner("Kayra"); // "Kayra" is the argument
greetLearner("Berk");
```

Here, `name` is a parameter. `"Kayra"` and `"Berk"` are arguments supplied on each call.

## Step 2: Multiple Parameters

Separate parameters with commas:

```javascript
function logProgress(day, topic) {
  console.log(`Day ${day}: ${topic} mastered!`);
}

logProgress(4, "Functions");
logProgress(5, "Arrays");
```

- Order matters. The first argument maps to the first parameter, and so on.
- Use descriptive parameter names for clarity.

## Step 3: Working with Different Types

Parameters accept all data types—numbers, strings, booleans, arrays, objects, even other functions.

```javascript
function cheer(name, completed) {
  if (completed) {
    console.log(`👏 Fantastic job, ${name}!`);
  } else {
    console.log(`⏳ Keep going, ${name}! You're close.`);
  }
}

cheer("Tuncer", true);
cheer("Zeynep", false);
```

- Booleans help functions branch cleanly.
- Strings and numbers combine easily using template literals.

## Step 4: Default Parameters

Provide fallback values when arguments are missing:

```javascript
function assignBadge(name = "Trailblazer", level = 1) {
  console.log(`${name} earned level ${level} badge!`);
}

assignBadge("Kayra", 4);
assignBadge(); // uses defaults
```

- Defaults prevent `undefined` from appearing in your output.
- Position defaults thoughtfully—usually on trailing parameters.

## Step 5: Validating Inputs

Protect your functions from unexpected values:

```javascript
function calculateScore(points) {
  if (typeof points !== "number") {
    console.log("Please provide a number.");
    return;
  }

  console.log(`Score: ${points * 10}`);
}

calculateScore(8);    // 80
calculateScore("A");  // validation message
```

- Early returns (`return;`) stop the function if data is invalid.
- Input checks are essential in real apps.

## Step 6: Rest Parameters (Preview)

Rest parameters collect multiple arguments into an array:

```javascript
function celebrateAll(...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`🎉 Congrats, ${names[i]}!`);
  }
}

celebrateAll("Ayşe", "Mert", "Nilay");
```

- The `...names` syntax bundles any number of arguments.
- We'll revisit rest/spread operators in future lessons, but it's helpful to see what’s possible.

## Step 7: Passing Functions as Arguments (Preview)

Functions are first-class citizens in JavaScript. You can pass them as arguments for callbacks:

```javascript
function celebrate(name, notifier) {
  notifier(`${name} completed their goal!`);
}

function notifyConsole(message) {
  console.log(message);
}

celebrate("Elif", notifyConsole);
```

You'll learn more about callbacks later, but be aware that parameters can be other functions.

## Step 8: Named Arguments Simulation

JavaScript doesn't support named arguments directly, but you can pass objects:

```javascript
function scheduleSession({ day, topic, duration }) {
  console.log(`Day ${day}: ${topic} for ${duration} minutes.`);
}

scheduleSession({
  day: 4,
  topic: "Function Parameters",
  duration: 25
});
```

- Using an object makes the call order-agnostic.
- It also self-documents which value corresponds to which parameter.

## Step 9: Practice Prompts

1. Write `function sendReminder(name, task)` that logs `"Hey name, don't forget to task!"`.
2. Add default parameters: if `task` is missing, default to `"review loops"`.
3. Create `function addProgress(progressList, newItem)` that pushes `newItem` into an array and logs the new length. Validate that `progressList` is an array.
4. Use rest parameters: `function totalPoints(...points)` that sums any number of numeric arguments and logs the result. Skip invalid entries with a validation check inside the loop.

## Key Takeaways

- ✅ Parameters define the expected inputs; arguments supply the actual data.
- ✅ Functions can accept multiple parameters of any type—including other functions.
- ✅ Default values make functions more resilient.
- ✅ Validation and rest parameters improve flexibility and safety.

---

## 🎯 Quick Check

1. What is the difference between a parameter and an argument?
2. How do default parameters help in function design?
3. When would you use rest parameters?
4. How can objects simulate named arguments?

Next lesson: capturing return values to build functions that produce data and feed other functions. 🔁
