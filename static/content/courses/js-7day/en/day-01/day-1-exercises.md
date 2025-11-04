---
title: "Day 1 Practice Exercises"
description: "Hands-on exercises to reinforce what you learned"
type: "exercise"
duration: "30 min"
day: 1
order: 5
nextLesson: "arithmetic-comparison-operators"
---

# Day 1 Practice: Build Your Cheer Squad

Let's celebrate what you've learned by writing code that cheers you on! Each mini challenge reinforces variables, strings, and data types while producing fun, encouraging messages.

> Open a new file called `day1-practice.js` inside your course folder. Run each section in Node.js or the browser console and enjoy the positive feedback.

## Challenge 1: Personal Hype Message

Create a personalized cheer using variables:

```javascript
const firstName = "Jordan";
const favoriteSnack = "chocolate chip cookies";
const energyLevel = 9; // scale of 1-10

console.log(
  `Hey ${firstName}! With an energy level of ${energyLevel}/10 and a stash of ${favoriteSnack}, you're unstoppable today!`
);
```

**Try this:**
- Change the values and rerun.
- Convert `energyLevel` to a string using `` `Energy: ${String(energyLevel)}` ``.
- Use `typeof` to confirm the type of each variable.

## Challenge 2: Compliment Generator

Store a list of compliments and pick one to share:

```javascript
const compliments = [
  "Your code is cleaner than freshly fallen snow ❄️",
  "You're debugging like a pro 🕵️‍♀️",
  "Every line you write sparks joy ✨"
];

const randomIndex = Math.floor(Math.random() * compliments.length);
const randomCompliment = compliments[randomIndex];

console.log(`Compliment of the moment: ${randomCompliment}`);
```

**Try this:**
- Add more compliments to the array.
- Use `Array.isArray(compliments)` to check you’re working with an array.
- Change `randomIndex` to pick a specific compliment (like `0` or `2`) and verify the output.

## Challenge 3: Progress Report Card

Combine booleans, numbers, and strings for a friendly status update:

```javascript
const lessonsCompleted = 4;
const practicedToday = true;
const minutesSpent = 95;

const message = practicedToday
  ? `You crushed ${lessonsCompleted} lessons today! Total focus time: ${minutesSpent} minutes. 🎉`
  : "Take a break now and come back when you're ready. We believe in you! 💪";

console.log(message);
```

**Try this:**
- Flip `practicedToday` to `false` and see the encouraging reminder.
- Convert `minutesSpent` to hours using `(minutesSpent / 60).toFixed(1)`.
- Log the data types for each variable using `typeof`.

## Challenge 4: Emoji Mood Mixer

Use dynamic typing to remix your mood as both text and emoji:

```javascript
let mood = "curious";
let emoji = "🧠";

console.log(`Mood check: feeling ${mood} ${emoji}`);

// Switch it up
mood = 10; // scale out of 10
emoji = ["🚀", "🎯", "🌟"];

console.log(`Mood level: ${mood}/10`);
console.log(`Pick an emoji: ${emoji.join(" ")}`);
console.log(`Is emoji an array? ${Array.isArray(emoji)}`);
```

**Try this:**
- Replace `emoji` with a single string and notice how `.join()` behaves.
- Convert the `mood` number to a string using `String(mood)`.
- Use `Boolean("")` or `Boolean("DevSteps")` to see how truthy/falsy values work.

## Stretch Goal: Gratitude Wall

Create an object to track what you're grateful for today:

```javascript
const gratitudeWall = {
  wins: ["Finished Day 1 lessons", "Understood variables"],
  supporters: ["DevSteps community", "My future self"],
  mantra: "Keep going, future dev!"
};

console.log("Gratitude Wall 🧱");
console.log(`Wins: ${gratitudeWall.wins.join(", ")}`);
console.log(`Supporters: ${gratitudeWall.supporters.join(" & ")}`);
console.log(`Mantra: ${gratitudeWall.mantra}`);
```

Add your own items to each array, or introduce new properties like `favoriteBreakSong`. Make it yours!

---

## 🎯 Quick Recap

- ✅ Variables can hold anything—strings, numbers, arrays, objects.
- ✅ Randomness and template literals make your output delightful.
- ✅ Practicing with data types cements your understanding faster than memorizing theory.

Save your file—you can revisit these exercises anytime you need a boost. Ready for Day 2? Operators and comparisons are up next! 🚀
