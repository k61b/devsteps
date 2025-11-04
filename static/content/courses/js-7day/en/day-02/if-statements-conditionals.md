---
title: "If Statements and Conditionals"
description: "Making decisions in your code with if/else statements"
type: "reading"
duration: "30 min"
day: 2
order: 3
nextLesson: "switch-statements"
---

# If Statements and Conditionals

You've compared values and combined them with logical operators. Now let's use those comparisons to control your program flow. Conditional statements decide which code runs based on the data you have—they're the reason apps respond differently for each user.

We'll continue building in `day2-operators.js`, but feel free to create a new file (`day2-conditionals.js`) if you want a fresh start.

## Step 1: Basic `if` Statement

```javascript
const streakDays = 5;

if (streakDays >= 5) {
  console.log("You earned the Weekend Warrior badge! 🏅");
}
```

- `if` evaluates the condition inside parentheses.
- If the condition is truthy, the block inside `{ }` runs.
- If it's falsy, JavaScript skips the block.

## Step 2: `if` + `else`

```javascript
const sharedProgress = false;

if (sharedProgress) {
  console.log("Thanks for sharing your progress! 🎉");
} else {
  console.log("Share your progress to inspire others! ✨");
}
```

The `else` block catches everything that doesn't meet the `if` condition.

## Step 3: Multiple Conditions with `else if`

Use `else if` for branching logic:

```javascript
const xp = 680;

if (xp >= 1000) {
  console.log("Level up! 🆙");
} else if (xp >= 700) {
  console.log("Almost there, keep going!");
} else {
  console.log("Great start—every point counts!");
}
```

- Conditions are evaluated top to bottom.
- The first matching condition wins; others are ignored.
- Use `else` for the default case.

## Step 4: Combining Logic Inside Conditions

```javascript
const lessonsToday = 2;
const minutesToday = 45;

if (lessonsToday >= 3 && minutesToday >= 60) {
  console.log("Consistency champion! 🏆");
} else if (lessonsToday >= 1 || minutesToday >= 30) {
  console.log("Nice momentum—keep it up!");
} else {
  console.log("Small steps still count. Try a quick lesson!");
}
```

Mix arithmetic and logical operators to express clear thresholds. This is how progress trackers and achievement systems work behind the scenes.

## Step 5: Truthy/Falsy in Conditionals

Any expression can go inside an `if` condition. JavaScript will coerce it to a boolean:

```javascript
const feedback = "";

if (feedback) {
  console.log(`Thanks for your feedback: ${feedback}`);
} else {
  console.log("No feedback yet—let us know how you're doing!");
}
```

Empty strings, `0`, `null`, and `undefined` are falsy, so the `else` block runs. This is useful when checking input from forms or API responses.

## Step 6: Ternary Operator

For quick, inline conditionals, use the ternary operator (`condition ? valueIfTrue : valueIfFalse`):

```javascript
const hasCompletedDay = true;
const message = hasCompletedDay
  ? "Awesome! Day 2 complete 🙌"
  : "Finish Day 2 to unlock new lessons!";

console.log(message);
```

- Ternaries return values and are great inside string templates or variable assignments.
- Keep them short. If logic gets complex, switch back to standard `if/else`.

## Step 7: Nesting Conditionals (With Care)

You can nest `if` statements, but avoid going too deep or forgetting the `else`.

```javascript
const plan = "premium";
const storageUsed = 8; // GB

if (plan === "premium") {
  if (storageUsed < 10) {
    console.log("Plenty of storage left!");
  } else {
    console.log("You're nearing your storage limit.");
  }
} else {
  console.log("Upgrade to premium to unlock more storage.");
}
```

Whenever nesting feels messy, consider:
- Combining conditions with logical operators.
- Extracting logic into descriptive functions.
- Using `switch` statements (tomorrow's lesson).

## Step 8: Guard Clauses for Early Exits

Guard clauses let you bail out early when conditions aren't met. They're common in functions:

```javascript
function awardBadge(streak) {
  if (streak < 5) {
    console.log("Keep going! Badge unlocks at 5 days.");
    return;
  }

  console.log("Badge unlocked! 🌟");
}

awardBadge(3); // early return
awardBadge(6); // success
```

This pattern keeps your code flat and easier to read.

## Step 9: Common Mistakes to Avoid

- **Missing braces:** Always use `{ }` even for single-line blocks to prevent accidental bugs when adding new lines later.
- **Assignment instead of comparison:** `if (score = 0)` sets `score` to 0 and evaluates as falsy. Use `===`.
- **Overlapping conditions:** Make sure your `if/else if` thresholds don't overlap unintentionally.

## Practice Prompts

1. Build a mini advisor:
   ```javascript
   const hoursStudied = 4;
   const confidenceLevel = 7; // out of 10
   ```
   Print different encouragement depending on the combo (e.g., high hours + high confidence → "Ready for the quiz!").

2. Given `const membership = "gold"; const referrals = 3;`, create a message:
   - Platinum if membership is `"gold"` **and** referrals ≥ 5.
   - Bonus gifts if referrals ≥ 3.
   - Otherwise, thank them for staying with the program.

3. Use a ternary to set `const status = isOnline ? "Online" : "Offline";` and attach an emoji.

4. Write a function `recommendBreak(minutes)` that suggests `"Take a short break"` if minutes ≥ 50, else `"Keep going!"`.

## Key Takeaways

- ✅ `if/else` statements let you branch logic based on conditions.
- ✅ Combine arithmetic and logical operators inside conditions for precise rules.
- ✅ Ternaries are concise but should stay simple.
- ✅ Guard clauses and clear thresholds make your logic easier to read.

---

## 🎯 Quick Check

1. What happens if you omit braces in an `if` statement and later add a second line?
2. Why should you avoid using `==` in conditions that expect specific types?
3. When is it better to use a ternary instead of `if/else`?
4. Write a condition that checks if `completedLessons >= 5` **and** `feedback` is truthy.

Ready to explore alternative branching structures? Next up: `switch` statements! 🔀
