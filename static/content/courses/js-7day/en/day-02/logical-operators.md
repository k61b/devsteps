---
title: "Logical Operators"
description: "Understanding AND, OR, and NOT operators"
type: "reading"
duration: "20 min"
day: 2
order: 2
nextLesson: "if-statements-conditionals"
---

# Logical Operators

Now that you can compare values, let's combine those comparisons using logical operators. These operators let you express complex rules like “if the user finished the lesson AND shared their progress OR reached streak 7”. Mastering them unlocks powerful conditional logic.

We'll work inside `day2-operators.js`, adding to or running alongside your arithmetic practice.

## Step 1: Meet the Operators

JavaScript has three primary logical operators:

| Operator | Symbol | Example | Meaning |
| -------- | ------ | ------- | ------- |
| AND | `&&` | `isLoggedIn && hasSubscription` | True only if both sides are true |
| OR | `\|\|` | `isAdmin || isModerator` | True if either side is true (or both) |
| NOT | `!` | `!isBanned` | Flips true ↔ false |

Each operator works with boolean values, but JavaScript can also interpret other types as truthy or falsy (more on that later).

## Step 2: AND (`&&`)

```javascript
const completedLesson = true;
const sharedProgress = false;

console.log(completedLesson && sharedProgress); // false
console.log(completedLesson && !sharedProgress); // true
```

- AND stops early (short-circuits) if the left side is false because the entire expression can no longer be true.
- Useful for verifying multiple requirements before executing code.

### Real-world example: unlocking a badge

```javascript
const lessonsToday = 3;
const streakDays = 7;

const unlockStreakBadge = lessonsToday >= 3 && streakDays >= 7;
console.log(`Streak badge unlocked: ${unlockStreakBadge}`); // true
```

## Step 3: OR (`||`)

```javascript
const isProMember = false;
const hasPromoCode = "BETA25";

const accessGranted = isProMember || hasPromoCode === "BETA25";
console.log(accessGranted); // true
```

- OR stops early if the left side is true.
- Great for fallback logic: “Use this value unless a better one exists”.

### Using OR for defaults

```javascript
const userTheme = "";
const theme = userTheme || "light"; // if userTheme is falsy, use "light"

console.log(`Theme selected: ${theme}`); // "light"
```

## Step 4: NOT (`!`)

```javascript
const notificationsEnabled = false;
console.log(!notificationsEnabled); // true
```

- Negates a boolean.
- Double NOT (`!!value`) converts truthy/falsy values to an actual boolean.

```javascript
console.log(!!"hello"); // true
console.log(!!0);       // false
```

## Step 5: Combining Operators

You can chain logical operators to describe complex scenarios. Use parentheses to make the order explicit and easy to read.

```javascript
const hasCompletedDay2 = true;
const hasSharedOnSocial = false;
const hasReferralCode = true;

const qualifiesForBonus =
  (hasCompletedDay2 && hasSharedOnSocial) || hasReferralCode;

console.log(`Bonus unlocked: ${qualifiesForBonus}`); // true
```

### Operator precedence refresher

1. Parentheses
2. NOT (`!`)
3. AND (`&&`)
4. OR (`||`)

Add parentheses whenever you want to override or highlight the default order.

## Step 6: Short-Circuit Behavior

Logical operators evaluate left to right and return the value of the last expression evaluated—not always `true` or `false`.

```javascript
console.log("Hello" && "World"); // "World"
console.log(0 || 42);            // 42
```

- `&&` returns the first falsy value or the last value if all are truthy.
- `||` returns the first truthy value or the last value if all are falsy.

This behavior enables powerful patterns:

```javascript
const settings = { language: "en" };
const language = settings.language || "en"; // fallback

const user = null;
const displayName = user && user.name; // returns null safely
```

## Step 7: Truthy and Falsy Values

JavaScript treats certain non-boolean values as `true` or `false` in logical expressions.

**Falsy values:** `false`, `0`, `-0`, `0n`, `""` (empty string), `null`, `undefined`, `NaN`.

Everything else is truthy, including non-empty strings, arrays, objects, and functions.

```javascript
console.log(Boolean("DevSteps")); // true
console.log(Boolean(""));         // false
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
```

Understanding truthy/falsy helps you write concise fallbacks and validations.

## Practice Prompts

1. Create variables: `const hasTicket = true; const isVIP = false; const doorOpen = true;` Construct an expression that allows entry if the user has a ticket and the door is open, **or** they are a VIP.
2. Set `const feedback = "";` Use `||` to provide a default message `"No feedback yet"`.
3. Write a condition that checks if `const remainingTasks = 0;` — if there are no tasks, log `"All done!"`, otherwise log `"Keep going!"`.
4. Use `&&` to safely access `const profile = { name: "Mina", social: { twitter: "@mina.codes" } };` and print the Twitter handle only if it exists.

## Key Takeaways

- ✅ `&&`, `||`, and `!` let you combine boolean expressions into richer logic.
- ✅ Short-circuiting enables efficient checks and safe property access.
- ✅ Truthy/falsy values allow concise fallbacks—but know which values count as falsy.
- ✅ Parentheses clarify complex logic and prevent mistakes.

---

## 🎯 Quick Check

1. What does `false || "hello"` return, and why?
2. How can `&&` help you avoid errors when accessing nested object properties?
3. When would you use `!!value`?
4. If `points = 0`, why does `points || 100` return `100`?

You're now ready to combine comparisons and logic in full conditional statements. Next stop: `if` statements! 🚦
